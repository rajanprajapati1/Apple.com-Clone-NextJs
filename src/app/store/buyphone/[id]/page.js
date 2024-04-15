"use client"
import FixedBar from '@/components/ShopComponents/Product/FixedBar'
import Product from '@/components/ShopComponents/Product/Product'
import Bar from '@/components/mycomponent/Bar'
import { AppleTable } from '@/constants/config'
import { useState, useEffect } from 'react'

const page = ({ params }) => {
    const [showBar, setShowBar] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;
            const twentyVh = (window.innerHeight || document.documentElement.clientHeight) * 0.2;
            const oneFiftyVh = (window.innerHeight || document.documentElement.clientHeight) * 2;

            if (scrollY > twentyVh && scrollY < oneFiftyVh) {
                setShowBar(true);
            } else {
                setShowBar(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    const PhoneId = decodeURIComponent(params.id)
    const FindByProduct = AppleTable.find((val) => val.name === PhoneId);
    return (<>
        {showBar && <FixedBar FindByProduct={FindByProduct} />}
        <div className='w-full h-auto flex flex-col mb-5'>
            <Bar key={"1"} link={"See Offer"} title={"Get up to ₹6000.00 instant savings on selected iPhone models with eligible HDFC Bank Cards. Footnote §§ Plus No Cost EMI from most leading banks."} />
            <main className='flex flex-col w-full h-auto'>
                <Product PhoneId={PhoneId} FindByProduct={FindByProduct} />
            </main>
        </div>
    </>
    )
}

export default page