import { FeaturedProduct, textArray } from '@/constants/config'
import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import "../../styles/FeaturedProduct.css";
const Featured = () => {
    return (
        <div className='Featured w-full h-auto '>
            <div className="title w-full h-52 flex items-center justify-center">
                <h1 className='text-5xl font-semibold'>Featured accessories</h1>
            </div>

            <div className="featured_product w-full justify-center flex gap-6">
                {FeaturedProduct.map((val, i) => {
                    return <div key={i} className={`Featutred-box w-[30%]  flex  rounded-xl items-center justify-center flex-col  h-[90vh] bg-white`}>
                        <div className={`title w-full flex flex-col  items-center justify-center h-36  mt-0 text-center`}>
                            <h1 className='font-semibold text-3xl text-center py-6  px-10'>{val.title}</h1>
                            <p className='text-sm w-11/12'>{val.subtitle}</p>
                            <div className="link">
                                <Link href={"*"} className='linkify text-blue-600  font-normal text-base flex items-center mix-blend-multiply hover:underline mt-4'>
                                    {val.link} <MdKeyboardArrowRight />
                                </Link>
                            </div>
                        </div>
                        <div className="image flex items-center  justify-center w-full h-[50vh]">
                            <div
                                className="image_main w-[100%] h-full "
                                style={{
                                    backgroundImage: `url(${val.img})`,
                                    backgroundPosition: "bottom",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "250px 200px",
                                }}
                            >
                            </div>
                        </div>
                    </div>
                })}
            </div>



            <div className="link w-full flex items-center justify-center h-[20vh]">
                <Link href={"*"} className='linkify text-blue-600 mt-5 font-normal text-xl flex items-center mix-blend-multiply hover:underline '>
                    Shop all iPhone accessories <MdKeyboardArrowRight />
                </Link>
            </div>
            <section className=' w-full h-[50vh] mt-20  flex items-center justify-center gap-11 '>
                {textArray.map((val, i) => {
                    return <div key={i} className='box w-[340px] bg-white h-[400px] rounded-2xl  gap-5 text-center  flex items-center flex-col justify-start'>
                        <div className="icon pt-6 mt-8 ">
                            {val.img}
                        </div>
                        <h1 className='font-semibold text-xl py-3'>{val.title}</h1>
                        <h2 className='h-12'>{val.description}</h2>
                        <span>{val.phone || "-"}</span>
                        <Link href={"*"} className='linkify text-blue-600 mt-5 font-normal text-xl  flex items-center mix-blend-multiply hover:underline '>
                            {val.link} <MdKeyboardArrowRight />
                        </Link>
                    </div>
                })}
            </section>
        </div>
    )
}

export default Featured