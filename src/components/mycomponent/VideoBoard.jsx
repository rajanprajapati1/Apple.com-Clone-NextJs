"use client"
import React, { useState } from 'react'
import "../../styles/Videoboard.css"
import Modal from './Modal'
const VideoBoard = () => {
    const [ModelOpen,SetModelOpen] = useState(false);
    const HandleModal = () =>{
        SetModelOpen((prev)=>!prev)
    }
    return (
        <>
            <div className="videoboard relative w-full h-[120vh] flex justify-center z-10 items-center ">
            {ModelOpen && <Modal HandleModal={HandleModal}/>}
                <div className="title">
                    <div className=''>
                         <span className='leading-snug   text-2xl font-semibold'>A Guided Tour of</span><br />
                        <h1 className='mt-2 text-[45px] leading-tight  font-bold  '>
                        iPhone 15 & <br />
                        iPhone 15 Pro
                        </h1>
                    </div>
                    <button onClick={()=>HandleModal()} className='py-1 px-3 mt-2 cursor-pointer hover:bg-slate-300 text-black font-medium rounded-full bg-slate-100'>Watch the film</button>
                </div>
                <div className="image ">
                </div>
            </div>
        </>
    )
}

export default VideoBoard