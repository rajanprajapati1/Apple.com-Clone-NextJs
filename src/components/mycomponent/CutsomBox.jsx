import React from 'react';
import Link from 'next/link';
import { MdKeyboardArrowRight } from 'react-icons/md';

const CustomBox = ({val ,width ,
  direction}) => {
    const { title, subtitle, link, img  } = val ;
  return (
    <div style={{ backgroundColor: "#FFFFFF" }} className={`box w-[45%] flex flex-${direction || "col"} rounded-2xl items-center shadow-sm h-[92vh]`}>
      <div className="title w-full flex flex-col items-center h-36 mt-11">
        <h1 className='font-bold text-2xl text-center py-8 px-20'>{title}</h1>
        <span>{subtitle}</span>
      </div>
      <div className="link">
        <Link href={"*"} className='linkify text-blue-600 mb-2 font-normal text-base flex items-center mix-blend-multiply hover:underline '>
          {link} <MdKeyboardArrowRight />
        </Link>
      </div>

      <div className="image flex items-center justify-center w-full h-[60vh]">
        <div
          className="image_main w-full h-full rounded-2xl  "
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat"
          }}
        >
        </div>
      </div>
    </div>
  );
};

export default CustomBox;
