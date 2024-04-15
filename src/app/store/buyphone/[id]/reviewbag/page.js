"use client"
import ReviewBag from '@/components/ShopComponents/ReviewBag/ReviewBag';
import { useApple } from '@/context/AppleContextProvider'
import React from 'react'

const page = () => {
    const {Cart} = useApple();
    const data = Cart[Cart.length-1];
  return (
    <div className='w-full h-auto flex flex-col items-center'>
         {data && <ReviewBag Data={data}/>}
    </div>
  )
}

export default page