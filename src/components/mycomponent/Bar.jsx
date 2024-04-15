import Link from 'next/link'
import React from 'react'
import "../../styles/Bar.css"
const Bar = ({
  title,
link
}) => {
  return (
    <div style={{backgroundColor : '#F5F5F7'}} className="bar w-full h-12 flex justify-center items-center">
    <span className='text-[13px] font-medium text-black text-center '>
        {title}<Link className='text-blue-600' href={"/"}>{link} {">"} </Link>
    </span>
    </div>
  )
}

export default Bar