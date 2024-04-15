import React from 'react'

const PriceBox = ({FindByProduct}) => {
    return (
        <div className="Price_box flex w-full justify-between h-[300px]   px-12 py-16">
            <div className="title px-10">
                <small className='text-orange-600 text-[1rem]'>New</small>
                <h1 className='text-[3rem] font-bold'>Buy {FindByProduct?.name}</h1>
                <span className='text-sm'>
                    From {FindByProduct?.model[0]?.monthly_price || " ₹32317.00/mo.Per Month" } with instant savings and No Cost EMI or MRP {FindByProduct?.price}
                    <br />
                    Incl. of all taxes
                </span>
            </div>
            <div className="offer flex flex-col gap-4 ">
                <span style={{backgroundColor:"#F5F5F7"}} className='px-5 py-4  text-xs  shadow text-black rounded-[35px]'>
                    Get ₹3000.00-₹62300.00 for your trade-in.
                </span>
                <span style={{backgroundColor:"#F5F5F7"}} className='px-5 py-4 float-right text-xs  shadow text-black rounded-[35px]'>Cashback
                    and No Cost EMI
                </span>
            </div>
        </div>
    )
}

export default PriceBox