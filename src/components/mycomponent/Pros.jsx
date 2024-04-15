import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import '../../styles/Pros.css';
const Pros = () => {
    return (
        <main className='w-full h-screen bg-inherit flex items-center justify-center'>
            <div
                className='prospage w-[95%] h-screen  shadow-sm
                 flex items-center  p-16 flex-col
                  rounded-2xl
                    '  style={{
                    backgroundImage: `url(https://www.apple.com/in/iphone/buy/images/meta/iphone_buy__chvehwtfgamq_og.jpg?202404050445)`,
                    backgroundPosition: "bottom",
                    backgroundRepeat: "no-repeat",
                    backgroundSize : "cover"
                }}>
                <div className="details  h-[60vh] text-center flex flex-col items-center   w-1/2">
                    <h1 className='text-4xl font-semibold mt-7'>
                        Why Apple is the best place to buy iPhone.
                    </h1>
                    <p className='text-xl mt-4 px-5'>
                        You can choose a payment option that works for you, pay less with a trade‑in, connect your new iPhone to your carrier and get set up quickly.
                        You can also chat with a Specialist anytime.

                    </p><Link href={"*"} className='linkify mt-5 text-blue-600 mb-2 font-normal text-base flex items-center mix-blend-multiply hover:underline '>
                        Learn More
                        <MdKeyboardArrowRight />
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Pros