import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { GiShoppingBag } from "react-icons/gi";

const FixedBar = ({FindByProduct}) => {
    return (
        <div className="w-full fixed z-50 animate-in transition-all bg-white text-black border-b-2 Price_box flex flex-col top-0 justify-between h-auto">
            <div className="title px-10 w-full h-24 flex justify-between items-center border-b-2">
                <h1 className='text-[2rem] font-bold'>{FindByProduct?.name}</h1>
                <h1 className='font-semibold text-sm'>
                    From {FindByProduct?.model[0]?.monthly_price} with instant savings and No Cost EMI or MRP {FindByProduct?.model[0]?.full_price}
                    <br /> {`(${"Incl. of all taxes"})`}
                </h1>
            </div>
        <div className="other_details w-full gap-10 flex items-center h-12  justify-end px-10">
                <span className='items-center text-sm gap-2 flex'>Delivers to: <span className='text-blue-600'>395017</span> <CiDeliveryTruck className='text-xl' /></span>
                <span className='items-center text-sm gap-2 flex'>Sat 23 Mar {"(Free)"} <h1>|</h1> </span>
                <span className='items-center text-sm gap-2 flex'><GiShoppingBag  className='text-sm'/> Pick up Today at <span className='text-blue-600'>Apple BKC</span></span>
            </div>
        </div>
    )
}

export default FixedBar