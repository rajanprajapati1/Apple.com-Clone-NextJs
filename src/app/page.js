import React from 'react'
import CarouselSize from '@/components/mycomponent/Carousel';
import Bar from '@/components/mycomponent/Bar';
import ProductBoard from '@/components/mycomponent/ProductBoard';
import { productBoard ,BarData } from '@/constants/config';
import VideoBoard from '@/components/mycomponent/VideoBoard';
import ProductList from '@/components/mycomponent/ProductList';
import WaysToBuy from '@/components/mycomponent/WaysToBuy';
import Pros from '@/components/mycomponent/Pros';
import Featured from '@/components/mycomponent/Featured';
import More from '@/components/mycomponent/More';
import AppleCarousel from '@/components/mycomponent/AppleCarousel';
import FaqSection from '@/components/mycomponent/FaqSection';

const page = () => {
    return (<>
        <div style={{ backgroundColor: "#F2F2F2" }} className="w-full">
            <CarouselSize />
            <Bar title={BarData[0].title} link={BarData[0].link} />
            {productBoard.map((val,i)=>{
                return <ProductBoard key={val.id} product={val} />
            })}
            <VideoBoard />
            <ProductList />
            <WaysToBuy />
            <Pros />
            <Featured />
            <More />
            <AppleCarousel />
            <FaqSection />
        </div>
    </>
    )
}

export default page