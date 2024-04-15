import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import "../../styles/More.css";

const More = () => {
    return (
        <div className=' container-l h-[120vh] flex flex-col items-center justify-around w-full  overflow-hidden'>
            <h1 className='title text-center mt-24 text-5xl font-semibold'>Get more out of your iPhone.</h1>
            <section className='one w-full flex  mt-16 items-center justify-center'>
                    <div className="first w-[49%] h-[90vh] bg-white flex items-center justify-center overflow-hidden ">
                        <Image style={{objectFit:"cover",marginLeft : "15rem"}} src={'https://www.apple.com/in/iphone/home/images/overview/bundle__gkzbqz77r82m_large_2x.jpg'} height={500} width={500} alt='apple.com'/>
                    </div>
                    <div className="second flex flex-col items-center  w-[49%] h-[90vh] bg-white">
                    <Image style={{objectFit:"cover",marginTop : "5rem"}} src={'https://www.apple.com/v/iphone/home/bs/images/overview/more-iphone/apple_one__cq8ojsqxitea_large_2x.jpg'} height={330} width={330} alt='apple.com'/>
                        <h1 className='mt-5 text-2xl font-semibold p-4'>
                        Bundle four Apple services. <br /> And enjoy more for less.
                        </h1>
                    <Link href={"*"} className='flex items-center justify-center text-blue-600 '>
                    Try it free . Learn more <MdKeyboardArrowRight/>
                    </Link>
                    </div>

            </section>
        </div>
    )
}

export default More