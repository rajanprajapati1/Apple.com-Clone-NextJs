import FlexBar from '@/components/ShopComponents/FlexBar'
import ProductCarousel, { SmallCarousel } from '@/components/ShopComponents/ProductCarousel'
import Bar from '@/components/mycomponent/Bar'
import { BarData, Education, ProductDataCarousel, benefits, images } from '@/constants/config'
import Link from 'next/link'
import React from 'react'
import "../globals.css"

const page = () => {
    return (
        <div className='w-full h-auto flex flex-col'>
            <Bar link={BarData[1].link} title={BarData[1].title} />
            <FlexBar />
            <div>
                <div className="categories_carousel">
                    <SmallCarousel />
                </div>
                <div className="carousel_section">
                    <ProductCarousel sub={"The latest."} title={"Take a look at what’s new right now."} val={ProductDataCarousel} MT={""} />
                </div>

                <div className="carousel_section">
                    <ProductCarousel sub={"Help is here."} title={" Whenever and however you need it."} val={images} MT={"-mr-24"} />
                </div>

                <div className="carousel_section">
                    <ProductCarousel sub={"The Apple Store difference."} title={" Even more reasons to shop with us."} val={benefits} MT={""} />
                </div>

                <div className="carousel_section">
                    <ProductCarousel sub={"Special stores."} title={" Exclusive savings for students and educators."} val={Education} MT={""} />
                </div>
            </div>
            <div className="quicklink h-52 flex flex-col px-28  gap-5 justify-center w-full">
                <h1 className='ml-4 text-2xl font-semibold'>Quick Links</h1>
                <div className="links flex gap-4">
                    <Link className='border rounded-3xl py-3 font-semibold text-xs hover:bg-black hover:text-white transition-all ease-in px-6' href={"/"}>
                        Order Status </Link>
                    <Link className='border rounded-3xl py-3 font-semibold text-xs hover:bg-black hover:text-white transition-all ease-in px-6' href={"/"}>
                        Shopping Help </Link>
                    <Link className='border rounded-3xl py-3 font-semibold text-xs hover:bg-black hover:text-white transition-all ease-in px-6' href={"/"}>
                        Your Saves</Link>
                </div>
            </div>
        </div>
    )
}

export default page



export const metadata = {
    title: 'Official Apple Store (IN)',
    description: '.',
}