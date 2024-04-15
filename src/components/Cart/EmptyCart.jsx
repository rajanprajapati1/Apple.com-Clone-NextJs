"use router"
import { useRouter } from 'next/navigation'
import React from 'react'


const EmptyCart = () => {
  const router = useRouter();
  return (
    <div className='w-full h-[50vh] flex items-center justify-center'>
      <div className="emptycart w-[80%]">
      <h1 className='font-bold py-4 text-4xl '>Your bag is empty.</h1>
      <span className='text-[16px] font-medium'>Sign in to see if you have any saved items. Or continue shopping.</span>
      <div className="btn flex w-full mt-4 gap-11">
        <button className='font-semibold text-sm rounded-xl px-32 text-white py-4 bg-blue-600'>Sign In</button>
        <button onClick={()=>router.push("/")} className='font-semibold text-sm rounded-xl border-blue-600 border-[1px] text-blue-600 px-32 py-4 hover:bg-blue-600 transition-all ease-in hover:text-white'>Continue Shopping</button>
      </div>
      </div>
    </div>
  )
}

export default EmptyCart