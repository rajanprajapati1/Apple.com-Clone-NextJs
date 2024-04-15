"use client"
import Image from 'next/image'
import React from 'react'
import { FaBookmark } from 'react-icons/fa'
import { TbTruckDelivery } from "react-icons/tb";
import { IoBagAdd } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import { useApple } from '@/context/AppleContextProvider';

const AddToBagSec = ({ Data }) => {
    const { SetCart } = useApple()
    const router = useRouter()
    const HandleAddToCart = () => {
        SetCart((item) => [...item, Data])
        router.push(`/store/buyphone/${Data?.model?.model}/reviewbag`)
    }
    return (
        <div style={{ backgroundColor: "#F5F5F7" }} className='AddToBagSec w-full h-screen flex justify-center items-center'>
            <main className='w-[90%] h-[95vh] flex justify-between items-start '>
                <div className="phone_sec w-1/2 flex justify-between h-full flex-col overflow-hidden">
                    <h1 className='text-3xl mt-10  font-semibold'>Your new .{Data?.model?.model} <br />
                        <span className='text-slate-500'>Just the way you <br /> want it.</span></h1>
                    <Image className='object-cover' alt='apple.com' height={500} width={400} src={Data?.img} />
                </div>
                <div className="price_sec ml-3 mt-10 w-1/2">
                    <div className="first_Sec">
                        <h2>{Data?.model?.model} {Data?.storage?.size} {Data?.color}</h2>
                        <h1 className='font-semibold my-4'>From {Data?.model?.monthly_price} with instant savings and <br /> No Cost EMI.</h1>
                        <span >Or</span>
                        <h2 className='my-3'>MRP {Data?.model?.full_price} <br />
                            {"(Incl. of all taxes)"}</h2>
                        <h1 className='mt-8 text-sm text-blue-500 hover:underline'>Explore instant Cashback and No Cost EMI</h1>
                        <div className="line my-4 w-full h-[1.3px] bg-slate-500 m-auto"></div>
                    </div>
                    <div className="second_Sec">
                        <h1 className='text-sm py-2 font-semibold '>Need a moment?</h1>
                        <p className='text-sm'>Keep all your selections by saving this device to Your Saves, then come back anytime and pick up right where you left off.</p>
                        <span className='flex items-center text-xs py-2  text-blue-500'> <FaBookmark className='text-blue-500' />  Save for later</span>
                    </div>
                    <div className="line my-4 w-full h-[1.3px] bg-slate-500 m-auto"></div>
                    <div className="third_Sec">
                        <h1 className='text-sm'>Delivery details for your area will be shown in Checkout.</h1>
                    </div>
                </div>
                <div className="add_Sec w-1/2 flex flex-col h-full mt-9 ">
                    <div className="delivery flex flex-col px-3">
                        <h1 className='flex items-center text-sm '><TbTruckDelivery /> Order today. Delivers to <span className='text-sm text-blue-500 font-semibold'> 400011</span></h1>
                        <strong className='text-sm font-semibold'>Sat 23 Mar — Free</strong>
                    </div>
                    <div className="pickup flex flex-col  px-3 py-4">
                        <h1 className='flex items-center text-sm '><IoBagAdd />Order now. Pick up, in store:</h1>
                        <strong className='text-sm font-semibold'>Tomorrow at <span className='text-sm text-blue-500 font-semibold'> Apple BKC</span> </strong>
                    </div>
                    <button onClick={HandleAddToCart} className='hover:bg-blue-600 text-white bg-blue-500 w-full h-14 rounded-xl font-semibold mt-14'>Add to Bag</button>
                </div>
            </main>
        </div>
    )
}

export default AddToBagSec