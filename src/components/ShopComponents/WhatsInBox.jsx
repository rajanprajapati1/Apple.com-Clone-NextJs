import Image from 'next/image'
import React from 'react'
import ProductList from '../mycomponent/ProductList'

const WhatsInBox = ({FindByProduct}) => {
    return (<>
        <div className='w-full h-[80vh] text-center flex flex-col gap-6 items-center py-4'>
            <h1 className='text-5xl py-4 font-bold mt-5'>What’s in the Box ?</h1>
            <div style={{ backgroundColor: "#FAFAFA" }} className="WhatsInBox w-[80%] items-end  h-[80%] flex justify-around overflow-hidden">
                <Image className='object-contain' src={FindByProduct?.img} alt='apple.com' height={160} width={160} />
                <Image className='object-contain' src={"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-cables-witb-202209?wid=184&hei=784&fmt=jpeg&qlt=90&.v=1660679135172"} alt='apple.com' height={100} width={100} />
            </div>
        </div>
        <div className="WhyChargerNot w-full h-[50vh] text-center flex flex-col -mb-24 px-36">
            <h1 className='text-sm font-bold text-zinc-500 mt-14'>Our environmental goals.</h1>
            <br />
            <p className='text-xs '>
                As part of our efforts to reach <span className='text-blue-700 font-medium'>carbon neutrality by 2030</span> iPhone 14 and iPhone 14 Plus do not include a power adapter or EarPods. Included in the box is a USB‑C to Lightning Cable that supports charging and is compatible with USB‑C power adapters and computer ports.
                <br />
                <br />
                We encourage you to re‑use your current USB‑A to Lightning cables, power adapters and headphones that are compatible with these iPhone models. But if you need any new Apple power adapters or headphones, they are available for purchase.
            </p>
        </div>
        <ProductList />
    </>
    )
}

export default WhatsInBox