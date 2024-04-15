import React from 'react'
import { WayToPurchase } from '@/constants/config'
import Link from 'next/link'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Image from 'next/image'
import '../../styles/WaysToBuy.css'
import CustomBox from './CutsomBox'
const WaysToBuy = () => {
    return (<>
        <div className="waystobuy w-full h-[140vh] flex flex-col ">
            <div className="title h-[32vh] flex items-center justify-center">
                <h1 className='text-5xl font-semibold text-center '>Ways to Buy iPhone </h1>
            </div>
            <div className="flex_container w-full h-screen flex items-center justify-around  ">
                {WayToPurchase.map((val, i) => {
                    return <CustomBox val={val} key={i}  direction={"col"}/>
                })}
            </div>
        </div>
    </>
    )
}

export default WaysToBuy