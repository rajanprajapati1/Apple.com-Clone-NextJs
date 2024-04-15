"use client";
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const ReviewBag = ({ Data }) => {
    const router = useRouter();
    const HandleNavigate = () =>{
        router.push("/cart")
    }
    return (<>
        <div className="reviewbag w-[100%] flex flex-col items-center mb-6">
            <div className="bar flex   w-[80%] px-6 items-center justify-between h-[10vh]">
                <div className="title"><h1 className='font-semibold text-xl'>{Data?.model?.model}</h1></div>
                <div className="btn flex items-center gap-6 font-medium text-xs">
                    <span>Overview</span>
                    <span>Tech Specs</span>
                </div>
            </div>
            <div className="line w-full h-[2px] bg-slate-200"></div>
            <div className='w-[80%] flex justify-between items-center  h-[25vh] px-5 '>
                <div className="first flex items-center">
                    <Image src={Data?.img}
                        height={100}
                        width={100}
                        className='aspect-square object-contain'
                        alt='apple.com'
                    />
                    <h1 className='font-semibold text-xl'>{Data?.model?.model} {Data?.storage?.size} {Data?.color}</h1>
                </div>
                <div className="second">
                    <button onClick={()=>HandleNavigate()} className='py-4 rounded-lg px-12 text-white font-medium bg-blue-500'>Review Bag</button>
                </div>
            </div>
            <div className="line w-full h-[1px] bg-slate-200"></div>
        </div>
    </>
    )
}

export default ReviewBag