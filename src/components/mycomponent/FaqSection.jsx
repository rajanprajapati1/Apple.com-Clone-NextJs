import { FAQData } from '@/constants/config'
import React from 'react'
import '../../styles/FaqSection.css'
const FaqSection = () => {
    return (
        <>
            <div className='main h-auto  w-full flex justify-center items-center'>
                <main style={{ backgroundColor: "#F9F9F9" }} className='h-auto my-4  w-[98%] '>
                    {FAQData.map((val, i) => {
                        return <div key={i} className="main_details text-gray-500 font-normal flex flex-col gap-5 py-5 px-32">
                            <h1 className='text-xs'>{val.title}</h1>
                            <p className='text-xs'>{val.des1}</p>
                            <p className='text-xs'>{val.des2}</p>
                            <p className='text-xs'>{val.des3}</p>
                            {val.list.map((val, i) => {
                                return <ul key={i}>
                                    <span className='flex gap-4 -mt-1 ml-2 text-xs '>
                                        {i + 1}
                                        <li >{val}</li>
                                    </span>
                                </ul>
                            })}
                        </div>
                    })}
                </main>
            </div>
        </>
    )
}

export default FaqSection