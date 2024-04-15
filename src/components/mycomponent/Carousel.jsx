import * as React from "react"
import '../../styles/Carousel.css'
import { Card, CardContent } from "@/components/ui/card"
import { products } from "@/constants/config"
import Image from "next/image"

export default function CarouselSize() {
    return (
        <>
            <div className="product_list w-full flex bg-white  items-center justify-center">
                <div className="btn-carousel">
                    <span>&lt;	</span> <strong></strong>
                </div>
                <div className="desktop  h-36 w-[80%] flex gap-1 justify-center items-center flex-wrap flex-col">
                    {products.map((val, i) => {
                        return <Card key={i} className="w-[80px] border-none bg-transparent overflow-hidden relative  h-28 text-center flex hover:text-blue-600 transition-all items-center justify-center">
                            <CardContent className="flex flex-col items-center justify-center ">
                                <Image style={{ objectFit: 'contain', aspectRatio: "1/3" }} src={val.imageUrl} alt={val.name} width={22} height={22} />
                                <span className="text-[10px] w-32 font-semibold ">{val.name}</span>
                                <span className="text-[10px]  absolute mt-24  font-medium text-yellow-700">{val.new ? 'New' : ''}</span>
                            </CardContent>
                        </Card>
                    })}
                </div>
                <div className="btn-carousel">
                    <strong></strong><span>&gt;</span>
                </div>
            </div>
        </>
    )
}