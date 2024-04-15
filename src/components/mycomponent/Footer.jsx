import React from 'react'
import { IoLogoApple } from 'react-icons/io5'
import { IoIosArrowForward } from "react-icons/io";
import { footerSections } from '@/constants/config';
import Link from 'next/link';
import "../../styles/footer.css";

const Footer = () => {
    return (
        <footer style={{ backgroundColor: "#F9F9F9" }} className=' footer w-[98%] flex flex-col items-center  mx-3 -mt-4 h-[120vh]'>
            <hr className='line w-[90%] m-auto   ' />
            <section className='w-[80%] h-screen  '>
                <span className='logo flex items-center gap-1 text-gray-400 mx-5 my-5 '>
                    <IoLogoApple className='applelogo text-[20px]  text-black' />
                    <IoIosArrowForward className='arrow text-[18px] mt-1 ' />
                    <h3 className='mt-1 text-gray-700'>iPhone</h3>
                </span>
                <main className="footer_div flex flex-wrap justify-between mx-4">
                    {footerSections.map((section, index) => (
                        <div key={index}>
                            {section.map((subsection, subIndex) => (
                                <div key={subIndex} className='hoverbix'>
                                    <h2 className='text-black font-semibold mb-2 mt-5 text-[13px]'>{subsection.title}</h2>
                                    <ul className=''>
                                        {subsection.items.map((item, itemIndex) => (
                                            <li className='text-[11px] mt-3 hover:underline transition-all ease-in cursor-pointer' key={itemIndex}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ))}
                </main>

                <div className='shop w-[80%] h-9  mt-14  '>
                    <span className='mx-3 text-gray-700 text-sm' >More ways to shop <Link className='text-blue-700 underline mx-1' href={"/"}>Find an Apple Store</Link> or <Link className='text-blue-700 underline mx-1' href={"/"}>other retailer</Link> near you. Or call 000800 040 1966.
                    </span>
                </div>
            </section>
            <hr className='line w-[90%] m-auto  ' />
            <div className="copyright w-[78%] h-16 flex items-center justify-between ">
                <span className='font-medium text-sm'>Copyright © 2024 Apple Inc. All rights reserved</span>
                <ul className='flex items-center gap-2 text-xs -ml-36'>
                    <li className='hover:underline transition-all ease-in cursor-pointer'>Privacy Policy</li> |
                    <li className='hover:underline transition-all ease-in cursor-pointer'>Terms of Use</li> |
                    <li className='hover:underline transition-all ease-in cursor-pointer'>Sales Policy</li> |
                    <li className='hover:underline transition-all ease-in cursor-pointer'>Legal Site Map</li> |
                </ul>
                <span className='font-medium text-sm'>India</span>
            </div>
        </footer>
    )
}

export default Footer