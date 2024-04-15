import React from 'react';
import { AppleTable } from '@/constants/config';
import Image from 'next/image';
import Link from 'next/link';
import { MdKeyboardArrowRight } from 'react-icons/md';
import '../../styles/ProductList.css'

const ProductList = () => {
  const RenderOtherData = (Data) => {
    const details = Object.entries(Data).map(([key, value], index) => {
      if (key !== 'img' &&  key !== 'model'&& key !==  'storageOptions'  && key !== 'name' && key !== 'color' && key !== "new" && key !== "description" && key !== "price") {
        return (
          <div key={index} className='detailsbox m-5 flex items-center justify-center h-24  '>
            <span className='other font-bold text-lg px-2 text-center py-2'>{value}</span>
          </div>
        );
      }
      return null;
    });
    return details;
  }
  return (<>
    <div className='w-full h-auto ProductList'>
      <div className="title h-[40vh] flex items-center justify-center">
        <h1 className='text-5xl font-semibold text-center '>Which iPhone is right for you?</h1>
      </div>
      <div className='phone_list w-full h-auto flex items-center flex-wrap justify-center'>
        <div class="container   w-full flex h-auto justify-center   ">
          {AppleTable.map((val, i) => {
            return (<div key={i} class="box    h-auto m-2 w-56  flex flex-col items-center ">
              <Image style={{ aspectRatio: "2/2.5", objectFit: "contain", margin: "10px 0" }} src={val.img} alt={val.name} width={200} height={200} />
              <div className='flex justify-center items-center my-3 bg-s'>
                {val.color.map((color, index) => (
                  <span
                    key={index}
                    className="w-3 h-3 rounded-full mx-1"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <span className='text-orange-900 text-sm '>{val.new ? "New" : "-"}</span>
              <h1 className='phonename font-semibold text-2xl'>{val.name}</h1>
              <span className='description my-2 text-center font-normal'>{val.description}</span>
              <span className='price pt-7'>{val.price}</span>
              <Link href={`/store/buyphone/${val?.name}`}>  <button className={`text-white my-4 bg-blue-600 font-medium text-sm active:bg-blue-500 cursor-pointer rounded-full px-3 h-6`}> Buy </button></Link>
              <Link className='linkbuy text-blue-500 mb-2 font-medium text-[13px] flex items-center hover:underline py-2' href="*">Learn More <MdKeyboardArrowRight /></Link>
              <div className='line my-3 w-[80%] h-[1px] bg-gray-300 '></div>
              {RenderOtherData(val)}
              <div className='my-3 w-[80%] h-[1px] bg-gray-300 '></div>
            </div>)
          })}
        </div>
      </div>
      <div className='linkdiv w-full flex justify-center items-center h-24 gap-7'>
         <Link href={"*"} className='text-blue-500 mb-2 font-normal text-xl flex items-center  hover:underline py-2' > Compare all iPhone models  <MdKeyboardArrowRight  /></Link>
         <Link href={"*"} className='text-blue-500 mb-2 font-normal text-xl flex items-center  hover:underline py-2' > Shop iPhone  <MdKeyboardArrowRight  /></Link>
         </div>
    </div>
  </>
  );
}

export default ProductList;
