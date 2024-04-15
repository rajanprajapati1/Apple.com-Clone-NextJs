"use client"
import React from 'react'
import { useApple } from "@/context/AppleContextProvider"
import CartComponent from '@/components/Cart/Cart'
import Bar from '@/components/mycomponent/Bar'

const page = () => {
  const { Cart } = useApple();
  const totalPrice = Cart.map((total, index) => {
    const price = total.model.full_price ? parseFloat(total.model.full_price.replace(/[^\d.]/g, '')) : total.model.full_price.slice(0);
    return price * total?.quantity;
  })
  const TotalPay = totalPrice.reduce((total, item) => {
    return total + item
  }, 0) || "Some Error While Calculating TotalPay";
  
  return (
    <div className='w-full h-auto'>
      <Bar link={"Learn More"} key={1} title={"Get up to ₹8000.00 instant savings on selected products with eligible HDFC Bank cards. Plus No Cost EMI from most leading banks."} />
      <CartComponent Cart={Cart} total={TotalPay} />
    </div>
  )
}

export default page