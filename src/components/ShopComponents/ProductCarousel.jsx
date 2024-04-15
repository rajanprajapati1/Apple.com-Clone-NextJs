import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { SmallproductImages } from '@/constants/config'
import Image from 'next/image'
import "../../styles/ShopCss/ProductCarousel.css"

const ProductCarousel = ({ title, val, sub, MT }) => {
    return (<>
        <div className='ProductCarousel h-6 flex items-center ml-32'>
            <h1 className='text-3xl font-bold text-slate-500'> <span className='text-black'>{sub || ""} </span> {title || ""}</h1>
        </div>
        <div className='MainProductCarousel w-[100%] h-screen  items-center flex justify-end '>
            <main className='w-[90%]'>
                <Carousel>
                    <CarouselContent className={`flex ${MT} `}>
                        {val?.map((val, i) => {
                            return <CarouselItem key={i} className="CarouselItem  md:basis-1/3 lg:basis-1/3">
                                <div className={`shadow w-[${val.size || '375px'}]  py-8 px-8 text-${val?.color} h-[${val?.height || '500px'}] rounded-2xl bg-slate-50  `} style={{ backgroundImage: `url(${val.url})`, backgroundSize: 'cover', backgroundPosition: 'center', color: `${val.color || ""}`, height: `${val.height || "500px"}` }}>
                                    {val.icon || ""}
                                    <h1 className={`${val.name === "NEW" ? "text-orange-600" : ""} font-medium text-xs mb-5`}> {val.name}</h1>
                                    <h2 className='text-2xl font-bold'><span className={`${i % 2 == 0 ? "text-black" : ""}`}>{val?.benefits || ""}</span >{val.desc}</h2>
                                    <h1 className='text-sm mt-3'>{val.price}</h1>
                                </div>
                            </CarouselItem>
                        })}
                    </CarouselContent>
                    <CarouselPrevious style={{ scale: "1.4" }} className={`prev -ml-14  text-2xl  `} />
                    <CarouselNext style={{ scale: "1.4" }} className={`next mr-20  text-2xl  `} />
                </Carousel>
            </main>
        </div>
    </>
    )
}

export default ProductCarousel

export const SmallCarousel = () => {
    return (<>

        <div className='SmallCarousel w-[100%] h-64  items-center flex justify-end '>
            <main className='w-[98%]'>
                <Carousel>
                    <CarouselContent className="flex CarouselContent ">
                        {SmallproductImages.map((val, i) => {
                            return <CarouselItem key={i} className="md:basis-1/3 lg:basis-1/6">
                                <div className='card flex items-center justify-around flex-col w-[200px] h-[170px] rounded-2xl bg-white  '>
                                    <Image className='w-44 object-cover' src={val.url} height={200} width={200} alt='apple.com' />
                                    <span className='text-sm font-bold'>{val.name}</span>
                                </div></CarouselItem>
                        })}
                    </CarouselContent>
                    <CarouselPrevious style={{ scale: "1.4" }} className={`prev ml-11  text-2xl  `} />
                    <CarouselNext style={{ scale: "1.4" }} className={`next mr-20  text-2xl  `} />
                </Carousel>

            </main>
        </div>

    </>)
}