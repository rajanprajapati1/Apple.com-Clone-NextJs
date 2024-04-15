"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { fetchPopularMovies, settings } from '@/constants/config'
import "../../styles/applecar.css";
import { FaPlayCircle } from "react-icons/fa";

const AppleCarousel = () => {

    return (
        <div className='AppleCarouseln w-[98%] m-auto mt-5 bg-black text-white h-screen'>
            <div className="details w-full h-[44vh] flex text-center items-center justify-center flex-col">
                <Image height={100} width={100} alt='apple.com' src={'https://www.apple.com/v/iphone/home/bs/images/overview/more-iphone/tv_plus_river/apple_tv_plus_logo__gkj8brywycuq_large_2x.png'} />
                <h1 className='mt-2  text-xl'>
                    Get 3 months of Apple TV+ free <br />
                    when you buy an iPhone
                </h1>
                <Link className=' mt-5 text-blue-500 flex  items-center' href={"/"}>Try it free Learn more<MdKeyboardArrowRight /></Link>
            </div>
            <div className="carousel  flex-col flex justify-center  h-[56vh] ">
                <Carousel speedProps={1000} autoplaySpeed={2000} />
                <Carousel speedProps={2000} autoplaySpeed={3000} />
            </div>
        </div>
    )
}

export default AppleCarousel

export const Carousel = ({ speedProps, autoplaySpeed }) => {
    const [MovieList, setMovieList] = useState([]);
    const FetchMovies = async () => {
        const res = await fetchPopularMovies();
        console.log(res)
        if (res) {
            setMovieList(res)
            console.log(res)
        }
        else {
            console.log("failed")
        }
    }
    useEffect(() => {
        FetchMovies();
    }, [])
    
    const baseImageUrl = "https://image.tmdb.org/t/p/original/";
    return (
        <div className="slider-container w-full h-auto  text-white">
            <Slider  {...settings} speed={speedProps} autoplaySpeed={autoplaySpeed}>
                {MovieList?.map((val, i) => {
                    return <div key={i} className='w-2/5'>
                        <div className='w-[95%] h-[23vh] flex items-center justify-center text-center relative rounded-xl m-5 border-x-slate-500'>
                            <div style={{ backgroundColor: "rgba(0, 0, 1, 0.5)" }} className="overlay w-full h-[23vh] absolute flex items-center justify-center text-center rounded-xl z-20 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <button className='btn flex items-center gap-3 font-medium px-4 py-[6px] bg-white text-black rounded-full'> Stream now<FaPlayCircle size={"24px"} /></button>
                                <Image className='absolute bottom-3 w-7 right-5' src={"https://www.apple.com/v/iphone/home/bs/images/overview/more-iphone/tv_plus_river/apple_tv_plus_logo__gkj8brywycuq_large_2x.png"} height={100} width={100} alt='apple.com' />
                            </div>
                            <Image className='absolute w-full h-full rounded-2xl' src={baseImageUrl + val?.backdrop_path} alt='apple' height={100} width={100} />
                        </div>
                    </div>

                })}
            </Slider>
        </div>
    )
}
