import React from 'react'
import { MdCancel } from "react-icons/md";

const Modal = ({HandleModal}) => {
    return (<>
        <div className=' modal '>
            <button onClick={()=>HandleModal()}><MdCancel className='text-gray-400 text-4xl' /></button>
            <div className="video">
                
                <video src="" muted controls poster='https://www.apple.com/ac/ac-video-posterframe/4.0/images/ac_video_poster_960x540_2x.jpg'>
                </video>
            </div>
        </div>
    </>
    )
}

export default Modal