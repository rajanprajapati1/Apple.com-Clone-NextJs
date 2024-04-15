"use client"
import { useApple } from '@/context/AppleContextProvider';
import { useRouter } from 'next/navigation';
import React from 'react'

const TotalPay = ({total}) => {
  const router = useRouter()
  const {calculateInstallment} = useApple();
  let installment = calculateInstallment(total, 15, 12);
  return (
    <div className='w-[100%]  h-[45vh] text-center flex flex-col items-center justify-center'>
        <h1 className='text-[2.3rem]  font-semibold'>Your bag total is ₹{total} or ₹{installment}/mo.</h1>
        <br />
        <button onClick={()=>router.push("/order")} className='py-2 px-28 text-sm bg-blue-600 text-white rounded-xl hover:bg-blue-500'>Check Out</button>
    </div>
  )
}

export default TotalPay