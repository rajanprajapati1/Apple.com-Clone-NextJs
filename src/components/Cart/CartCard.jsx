"use client"
import { useApple } from '@/context/AppleContextProvider';
import Image from 'next/image'
import React from 'react'
import { FaApple } from 'react-icons/fa'
import { FiBox } from "react-icons/fi";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";

const CartCard = ({ item }) => {
    const { HandleDelete, HandleQuantity, calculateInstallment } = useApple();
    let fullPrice = item?.model?.full_price.slice(1);
    let installment = calculateInstallment(fullPrice, 15, 6);
    const  TotalPrice = parseInt(item?.model?.full_price.slice(1)) * parseInt(item?.quantity)
    return (
        <div className=' h-screen border-gray-400 border-b-[1px]  mt-4  w-full'>
            <div className="first w-full flex justify-between">
                <div className="product py-8  flex flex-col  w-[24%] h-screen ">
                    <Image src={item.img}
                        height={100}
                        width={100}
                        className='aspect-square   object-contain'
                        alt='apple.com'
                    />
                </div>
                <div className="price flex flex-col items-center w-full  h-screen">
                    <div className="flex flex-col w-full h-full py-5">
                        <div className="w-full flex  flex-col items-center justify-center h-full px-5">
                            <div className="w-full flex  justify-between items-center h-20 font-semibold text-2xl ">
                                <div className="product_info  ">
                                    <h1 className=''>{item?.model?.model} {item?.storage?.size} {item?.color}</h1>
                                </div>
                                <div className="price_quantity w-1/2 flex justify-between  px-5">
                                    <select defaultValue={item.quantity} key={item?.id} onChange={(e) => HandleQuantity(item?.id, e.target.value)} >
                                        {Array.from({ length: 10 }).map((_, i) => {
                                            return <option key={i + 1} value={i + 1}>{i + 1}</option>
                                        })}
                                    </select>
                                    <h1>₹{TotalPrice}</h1>
                                </div>
                            </div>
                            <div className="saving flex w-full justify-end">
                                <span style={{ color: "#BD571A" }} className='text-xs font-semibold'>Get up to ₹8060.00 savings with eligible card{"(s)"}</span>
                            </div>
                            <div className="installment w-full flex justify-between h-10 items-center">
                                <h1 className='text-sm font-medium'>Pay 15% pa for 6 months :^</h1>
                                <h1 className='text-sm font-medium'>₹{installment}/mo.per month^</h1>
                            </div>
                            <div className="remove w-full flex justify-end h-10 items-center">
                                <span onClick={() => HandleDelete(item?.id)} className='cursor-pointer text-[16px] font-semibold text-blue-600'>Remove</span>
                            </div>
                        </div>
                        <div className="w-full h-full flex flex-col items-center justify-center border-slate-400 border-t-[1px] px-5 border-b-[1px]">
                            <div className="applecare flex w-full font-semibold text-[16px] justify-between items-center h-16">
                                <h1 className='flex items-center'><FaApple color='red' /> AppleCare+ for iPhone 15 Pro</h1>
                                <h1>₹20900.00</h1>
                            </div>
                            <div className="installementApplecare  font-medium mb-3  text-xs text-slate-700 w-full flex  justify-between items-center h-6">
                                <h1 className='ml-4 '>Pay 15% pa for 6 months:^</h1>
                                <h1>₹3483.00/mo.per month^</h1>
                            </div>
                            <div className="details w-full font-medium  text-xs text-slate-700  justify-start items-center h-10">
                                <span className='ml-4 '>Automatically registered with your Apple Hardware.</span>
                            </div>
                            <div className="remove w-full flex justify-end  items-center">
                                <span className='cursor-pointer text-[16px] font-semibold text-blue-600'>Remove</span>
                            </div>
                        </div>
                        <div className="w-full h-auto ">
                            <div className="other_Details px-6 py-7 w-full flex gap-24">
                                <div className='w-1/3 '>
                                    <h1 className='flex items-center font-medium text-slate-800 text-sm'><FiBox />In stock and ready to ship.</h1>
                                    <span className='flex items-center font-medium text-slate-800 text-sm'>      Delivery options for : <span className='flex items-center text-blue-600 hover:underline'>400011††<IoChevronDownOutline /> </span>
                                    </span>
                                </div>
                                <div className='w-1/3 leading-3'>
                                    <strong className='flex items-center text-sm font-semibold'>  <IoBagHandleOutline />Order now. Pick up, in-store:</strong>
                                    <span className=' text-sm'>Tomorrow at Apple BKC</span> <br />
                                    <span className=' text-sm  text-blue-600 hover:underline'>Show more stores</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartCard