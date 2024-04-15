"use client"
import "../../styles/navbar.css"
import { appleProducts, updatedNavbarSubSection } from '@/constants/config';
import React, { useEffect, useState } from 'react'
import { IoLogoApple, IoBagOutline, IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { HiBars2 } from "react-icons/hi2";
import Link from "next/link";
import { useApple } from "@/context/AppleContextProvider";
const Navbar = () => {
    const [isOpen, SetIsOpen] = useState(false)
    const {Cart} = useApple();
    const [hoveredItem, setHoveredItem] = useState([]);
    const Icons = [
        <IoSearch className="font-bold" />,
        <IoBagOutline className="font-extrabold " />,
        <HiBars2 className="mobile font-extrabold " onClick={() => SetIsOpen(true)} />
    ]

    const handleMouseEnterValue = (value) => {
        const index = appleProducts.indexOf(value);
        if (index !== -1) {
            const matchedData = updatedNavbarSubSection[index];
            setHoveredItem(matchedData);
        } else {
            console.log("Value not found in appleProducts array");
            setHoveredItem(null);
        }
    };
    const handleMouseLeaveValue = () => {
        const navbarContainer = document.querySelector(".navbar");
        const isMouseOverNavbar = navbarContainer && navbarContainer.contains(event.relatedTarget);
        if (!isMouseOverNavbar) {
            setHoveredItem(null);
        }
    };

    return (<>
        <nav className='navbar relative z-40 hover:bg-white' onMouseEnter={() => SetIsOpen(true)} onMouseLeave={() => SetIsOpen(false)}>
            <div className={`main absolute w-full flex justify-center h-screen z-50 top-10 bg-white left-0 right-0 ${isOpen ? 'visible' : 'hidden'}`}>
                <div className="nav_sub_Section m-auto w-[80%] h-auto flex items-start gap-11 ">
                    {hoveredItem && ( 
                        <>
                            {hoveredItem.map((item, index) => (
                                <div key={index} className="mt-10">
                                    <h2 className="text-xs text-gray-500">{item.title}</h2>
                                    <ul>
                                        {item.items.map((subItem, subIndex) => (
                                            <li className={` my-2 text-black ${index === 0 ? 'font-semibold text-2xl' : 'text-sm font-medium'}`} key={subIndex}>{subItem}</li>
                                        ))}
                                        <div className="mt-5 mb-11">
                                            
                                        {item?.other?.map((sub, i) =>
                                            <li className=" text-gray-800 font-semibold text-sm" key={i}>{sub}</li>
                                        )}
                                        </div>
                                    </ul>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
            <div className="logo ">
                <Link href={"/"}>
                <IoLogoApple className='applelogo text-[20px]  mx-4' /></Link>
            </div>
            <div className={` nav-list  ${isOpen ? 'open' : ''} `} >

                <div className="mobile_menu ">
                    <RxCross2 className="text-[30px]" onClick={() => SetIsOpen(false)} />
                </div>
                {appleProducts.map((val, i) => {
                    return <Link
                    href={val.toLowerCase()}
                        onMouseEnter={() => handleMouseEnterValue(val)}
                        onMouseLeave={() => handleMouseLeaveValue()}
                        className="links text-[12px]" key={i}>{val}
                    </Link>
                })}
            </div>
            <div className="button flex ">
                 <div  className="icons mx-3">
                        {Icons[0]}
                    </div>
                    <div  className="icons mx-3 relative">
                        {Icons[1]}
                        <span className="absolute text-[9px] w-5 text-center h-3 rounded-sm top-2 left-2 bg-black text-white z-50">{Cart?.length}</span>
                    </div>
                    <div  className="icons mx-3">
                        {Icons[3]}
                    </div>
 
            </div>
        </nav>
    </>
    )
}

export default Navbar