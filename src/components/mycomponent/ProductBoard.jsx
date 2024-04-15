"use client"
import "../../styles/Productboard.css"
import Link from 'next/link';
import { MdKeyboardArrowRight } from "react-icons/md";
import React, { useState, useEffect } from 'react';

const ProductBoard = ({ product }) => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const handleResize = () => {
            setImageUrl(window.innerWidth <= 640 ? product?.smallImg : product?.main);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [product]);

    return (
        <div style={{ backgroundColor: `${product.color}` }} className={`main w-full h-auto  text-${product?.fontcolor} flex ${product.direction} items-center justify-between overflow-hidden text-center`}>
            <div className={`detail flex text -${product?.fontcolor}  flex-col items-center mt-28 justify-center gap-3`}>
                <small className='text-orange-500 text-xl font-normal'>{product.description}</small>
                <h2 className={`${product.color == "white" ? "text-black" : "text-yellow-100"} text-2xl font-normal`}>{product.name}</h2>

                {product?.logo ? (<>
                    <div className='tianum'
                        style={{
                            backgroundImage: `url(${product?.logo})`
                        }}
                    /></>) : (<h1 className=' font-semibold text-5xl'>{product.Addition}</h1>)}
                <span style={{ color: `${product.fontcolor}` }} className={`${product.color == "white" ? "text-black" : "text-yellow-50"}  text-xl py-2 text-black  font-normal`}
                >{product.price}</span>
                <button className={`text-${product.color ? "white" : "black"} bg-blue-600 font-medium active:bg-blue-500 cursor-pointer rounded-full px-5 h-9`}>Buy</button>
                <Link className='linkbuy text-blue-500 font-medium text-xl flex items-center hover:underline py-2' href={product.learnMoreLink}>Learn More <MdKeyboardArrowRight className='mt-[3px]' /></Link>
            </div>
            <div className={`images_Sec
            ${!product.Addition ? "justify-end" : "justify-center"}
            `}
            >
                <div className={`phone-img ${product.Addition ? "" : "mb-32"}`}
                    style={{
                        backgroundImage: `url(${imageUrl})`,
                    }}
                ></div>
            </div>
        </div>
    );
};

export default ProductBoard;
