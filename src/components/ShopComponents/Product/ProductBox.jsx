"use client"
import React, { useEffect, useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { SmallproductImages } from '@/constants/config'
import Box from './Box'
import { IoIosAddCircleOutline } from "react-icons/io";
import Image from 'next/image'
import WhatsInBox from '../WhatsInBox'
import Accordian from '@/components/mycomponent/Accordian'
import ProductFaq from '../ProductFaq'
import FaqSection from '@/components/mycomponent/FaqSection'
import { FaApple } from "react-icons/fa6";
import AddToBagSec from '../AddToBagSec'

const ProductBox = ({ FindByProduct }) => {
    function generateUniqueID() {
        const timestamp = new Date().getTime();
        const randomNumber = Math.floor(Math.random() * 10000);
        const uniqueID = timestamp.toString() + randomNumber.toString();
        return uniqueID;
    }
    const cartItemID = generateUniqueID();
    const [selections, setSelections] = useState({
        id : cartItemID ,
        model: null,
        color: null,
        storage: null,
        trade: null,
        exchangeInfo: null,
        AppleCare: null,
        img: FindByProduct?.img || null ,
        quantity : 1,
    });
    const [exchangeForm, SetexchangeForm] = useState({
        pincode: null,
        isSmartPhone: null,
        SerialNo: null,
    })
    const handleSelection = (type, value) => {
        setSelections(prevState => ({
            ...prevState,
            [type]: value,
        }));
    };
    useEffect(() => {
        
        document.title = `Buy ${selections?.model?.model || 'iPhone  - (IN)'} ${selections?.storage?.size || ''} ${selections?.color?.toUpperCase() || ''}`;
    }, [selections]);

    return (<>
        <div className='w-full h-screen  flex px-5 items-center justify-between'>
            <div style={{ backgroundColor: "#F5F5F7" }} className="first w-[65%]  h-[500px] rounded-3xl shadow ">
                <Carousel>
                    <CarouselContent className={`flex `}>
                        {!SmallproductImages?.map((val, i) => {
                            return <CarouselItem key={i} className="CarouselItem w-full h-[500px] flex items-center justify-center ">
                                <div className={`shadow w-[70%]  py-8 px-8 text-${val?.color} h-[400px] rounded-2xl `} style={{ backgroundImage: `url(${val.url})`, backgroundSize: 'cover', backgroundPosition: 'center', color: `${val.color || ""}` }}>
                                </div>
                            </CarouselItem>
                        }) || <CarouselItem className="CarouselItem w-full h-[500px] flex items-center justify-center ">
                                <div className={`shadow w-[70%]  py-8 px-8  h-[400px] rounded-2xl `} style={{ backgroundImage: `url(${FindByProduct?.img})`, backgroundSize: 'contain', backgroundRepeat: "no-repeat", backgroundPosition: 'center' }}>
                                </div>
                            </CarouselItem>}
                    </CarouselContent>
                    <CarouselPrevious style={{ scale: "1.4" }} className={`prev ml-20  text-2xl  `} />
                    <CarouselNext style={{ scale: "1.4" }} className={`next mr-20  text-2xl  `} />
                </Carousel>
            </div>
            <div className="second  w-[35%] h-screen overflow-y-scroll ml-4 flex flex-col">
                <div className="main w-full h-auto  flex flex-col items-center">
                    <div className="modelbox flex flex-col ">
                        <h1 className='font-semibold my-5 text-2xl'><span className='text-gray-400'>Model</span>. Which is best for you?</h1>
                        {FindByProduct?.model?.map((val, i) => {
                            return <Box key={i} value={val}
                                selected={selections?.model === val} type="model" handleSelection={handleSelection} />
                        })}
                        {/* Help Box */}
                        <div style={{ backgroundColor: "#F5F5F7" }} className='w-full rounded-2xl h-[90px]  mb-2 flex justify-between py-3 px-5 border'>
                            <div className="model">
                                <h1 className='font-semibold text-sm'> Need help choosing a model?</h1>
                                <small className='text-slate-900 mr-5 text-xs leading-none '>
                                    Explore the differences in screen size and battery life.
                                </small>
                            </div>
                            <div className="price text-right ">
                                <small className='text-[10px] text-slate-400'><IoIosAddCircleOutline className='text-sm hover:text-black ' /></small>
                            </div>
                        </div>
                        {/* ends */}
                    </div>
                    <div className={`colorbox flex flex-col h-[200px] w-full px-7 ${selections.model ? "opacity-100" : "opacity-25 cursor-not-allowed"} `}>
                        <h1 className='font-semibold my-5 text-2xl'><span className='text-gray-400'>Finish</span>. Pick your favourite                    </h1>
                        <span className='font-semibold ml-1'>Colour -  {selections?.color?.toUpperCase()}</span>
                        <div className="flex">
                            {FindByProduct?.color?.map((color, index) => (
                                <div
                                    key={index}
                                    className={`w-8  h-8 rounded-full m-2 cursor-pointer ${selections.color === color ? 'border-2 border-black' : ''
                                        }`} style={{ backgroundColor: color }}
                                    onClick={() => handleSelection('color', color)}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div className={`storagebox flex flex-col w-full px-7 ${selections.color ? "opacity-100" : "opacity-25 cursor-not-allowed"}`}>
                        <h1 className='font-semibold my-5 text-2xl text-gray-400'><span className='text-black'>Storage</span>. How much space do you need?                    </h1>
                        {FindByProduct?.storageOptions?.map((val, i) => {
                            return <Box key={i} type="storage" value={val} selected={selections.storage === val} handleSelection={handleSelection} />
                        })}
                        <div className='stotragebox w-full rounded-2xl h-[120px]  mb-2 flex justify-between  border bg-white'>
                            <div className="image w-[60%] ">
                                <Image className='w-full h-full rounded-l-2xl' height={100} width={100} alt='apple.com' src={"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-storage-thumbnail_GEO_IN?wid=768&hei=432&fmt=p-jpg&qlt=95&.v=1691591572156"} />
                            </div>
                            <div className="storagehelp py-3 px-5 flex">
                                <div className="storage">
                                    <h1 className='font-semibold text-sm'> Not sure how much storage to get?</h1>
                                    <small className='text-slate-900  text-xs leading-none '>
                                        Get a better understanding of how much space you’ll need.         </small>
                                </div>
                                <div className="btn text-right ">
                                    <small className='text-[10px] text-slate-400'><IoIosAddCircleOutline className='text-sm hover:text-black ' /></small>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`exchange_Section h-auto w-full flex flex-col mt-10 `}>
            <div className={`trade_exchange_Sec ${selections.storage ? "opacity-100" : "opacity-25 cursor-not-allowed"} flex flex-col h-auto px-7`}>
                <h1 className='ml-7 text-slate-500 font-bold text-2xl'><span className='text-black'>Apple Trade In.</span>Get ₹3000.00-₹62300.00 credit towards your new <br /> iPhone.*</h1>
                <div className="flex_Exchange flex items-center justify-between px-10">
                    <div className="select_box flex   w-[70%] items-center gap-7">
                        <div onClick={() => handleSelection('trade', "Select a smartphone")} className={`${selections.trade === "Select a smartphone" ? "border-blue-700 border-2" : ""} exchange_option border-2 w-[350px] flex-col h-[90px] flex items-center justify-center rounded-xl`}>
                            <h1 className='font-semibold' >Select a smartphone</h1>
                            <small className='text-slate-500'>Answer a few questions to get your estimate.</small>
                        </div>
                        <div onClick={() => handleSelection('trade', "No trade-in")} className={`${selections.trade === "No trade-in" ? "border-blue-700 border-2" : ""} select_option border-2 w-[350px] h-[90px] flex items-center justify-center rounded-xl`}>
                            <h1 className='font-semibold'>No trade-in</h1>
                        </div>
                    </div>
                    <div className='TradeHelp w-[31%] rounded-2xl h-[150px]  mb-2 flex justify-between  border bg-white'>
                        <div className="image w-[100%] ">
                            <Image className='w-full h-full rounded-l-2xl' height={100} width={100} alt='apple.com' src={"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-trade-in-pre-purchase-thumbnail_GEO_IN?wid=240&hei=266&fmt=p-jpg&qlt=95&.v=1680020538111"} />
                        </div>
                        <div className="Tradehelp-In py-3 px-5 flex">
                            <div className="Trade-L">
                                <h1 className='font-semibold text-sm'> How does trade-in work?</h1>
                                <small className='text-slate-900  text-xs leading-none '>
                                    We'll help you exchange your eligible device for instant credit towards your
                                    new iPhone. See the step-by-step process.</small>
                            </div>
                            <div className="btn text-right ">
                                <small className='text-[10px] text-slate-400'><IoIosAddCircleOutline className='text-sm hover:text-black ' /></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {selections.trade === "Select a smartphone" &&
                <div className="exchange_from_section w-[58%] h-auto bg-slate-100 mx-14 rounded-xl">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleSelection("exchangeInfo", exchangeForm);
                    }} className='flex flex-col gap-2 text-black items-start  w-[60%] rounded-l-xl'>
                        <div className={`pincode flex flex-col px-4 py-4`}>
                            <label className='font-semibold text-sm my-2' htmlFor="Pincode">Enter your PIN code:</label>
                            <input onChange={(e) => SetexchangeForm(prevState => ({ ...prevState, pincode: e.target.value }))} className='w-[300px] h-14 border-2 px-4 outline-none border-gray-300 text-black font-semibold text-[16px] rounded-lg ' type="text" id='Pincode' placeholder='Pincode' />
                        </div>
                        {
                            exchangeForm.pincode && (<>
                                <label className='font-semibold text-sm px-4'>Is Your smartphone an iPhone ?</label>
                                <div className="btn px-4 py-4 flex w-full gap-1 font-semibold">
                                    <div onClick={() => SetexchangeForm(prevState => ({ ...prevState, isSmartPhone: true }))} className={`yes ${exchangeForm.isSmartPhone ? "border-blue-700 border-2" : "border-gray-300"}  border-2 w-[150px]  flex items-center justify-center rounded-xl h-14`}>Yes</div>
                                    <div onClick={() => SetexchangeForm(prevState => ({ ...prevState, isSmartPhone: false }))} className={`no  ${exchangeForm.isSmartPhone ? "border-gray-300" : "border-blue-700 border-2"} border-2 w-[150px]  flex items-center justify-center rounded-xl h-14`}>No</div>
                                </div></>)
                        }
                        {exchangeForm.pincode && (<>
                            <div className="btn px-4 py-4 flex flex-col w-full gap-1 font-semibold">
                                <label htmlFor="SerialNo">What's the serial number of your {exchangeForm.isSmartPhone ? "iPhone" : "SmartPhone"}?</label>
                                <input type="text" onChange={(e) => SetexchangeForm(prevState => ({ ...prevState, SerialNo: e.target.value }))} className='w-[300px] h-14 border-2 px-4 outline-none border-gray-300 text-black font-semibold text-[16px] rounded-lg ' placeholder='Serial Number' />
                            </div>
                            <button disabled={exchangeForm.SerialNo?.length <= 8} className='disabled:bg-blue-300 mb-6 bg-blue-700 w-[300px] h-14 text-center text-white font-semibold rounded-xl mx-4'>Apply</button>
                        </>
                        )}
                    </form>
                </div>}

            {selections.trade && (<>
                <div className={` ${selections.trade ? "opacity-100" : "opacity-25 cursor-not-allowed"} AppleCare_Sec h-[60vh] flex flex-col gap-10  mt-20 px-7`}>
                    <h1 className='ml-7 text-slate-500 font-bold text-2xl'><span className='text-black'>AppleCare+ coverage.</span>Protect your new iPhone.</h1>
                    <div className="flex_AppleCare flex items-center  justify-between px-10">
                        <div className="select_box flex   w-[70%] items-center text-center gap-7">
                            <div onClick={() => handleSelection('AppleCare', "AppleCare+ ₹14900")} className={`${selections.AppleCare === "AppleCare+ ₹14900" ? "border-blue-700 border-2" : ""} exchange_option border-2 w-[350px] flex-col h-[240px] flex items-center justify-center rounded-xl`}>
                                <h1 className='font-semibold flex items-center' ><FaApple color='red' /> AppleCare+</h1>
                                <span>
                                    From ₹2483.00/mo.Per Month <br />
                                    or MRP ₹14900.00 {"(Incl. of all taxes)"}
                                </span>
                                <li>
                                    Get unlimited repairs for accidental damage protection, Apple-certified repairs, and priority access to Apple experts.
                                </li>
                            </div>
                            <div onClick={() => handleSelection('AppleCare', "No AppleCare+ Coverage")} className={`${selections.AppleCare === "No AppleCare+ Coverage" ? "border-blue-700 border-2" : ""} select_option border-2 w-[350px] h-[240px] flex items-center justify-center rounded-xl`}>
                                <h1 className='font-semibold'>No AppleCare+ Coverage</h1>
                            </div>
                        </div>
                        <div className='AppleCarePlus w-[31%] rounded-2xl h-[150px]  mb-2 flex justify-between  border bg-white'>
                            <div className="image w-[100%] ">
                                <Image className='w-full h-full rounded-l-2xl' height={100} width={100} alt='apple.com' src={"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-applecare-plus-thumbnail_GEO_IN?wid=1960&hei=1102&fmt=p-jpg&qlt=95&.v=1699886912640"} />
                            </div>
                            <div className="AppleCarePlus-In py-3 px-5 flex">
                                <div className="AppleCare-L">
                                    <h1 className='font-semibold text-sm'> How does AppleCare+ work?</h1>
                                    <small className='text-slate-900  text-xs leading-none '>
                                        Provides coverage for accidental drops, spills, and more for your iPhone. See what’s included.</small>
                                </div>
                                <div className="btn text-right ">
                                    <small className='text-[10px] text-slate-400'><IoIosAddCircleOutline className='text-sm hover:text-black ' /></small>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </>)}

        </div>
        {selections.AppleCare && <AddToBagSec Data={selections} />}
        <WhatsInBox FindByProduct={FindByProduct} />
        <Accordian />
        <ProductFaq />
        <FaqSection />
    </>

    )
}

export default ProductBox