import React from 'react'
import TotalPay from './TotalPay'
import CartCard from './CartCard'
import EmptyCart from './EmptyCart'

const CartComponent = ({ Cart,total}) => {
    return (
        <div className='w-full flex flex-col items-center h-auto  mb-7 '>
            {Cart.length > 0 ? (<>
                <TotalPay  total={total}/>
                <div className="cart_items border-t-[1px] border-slate-400 flex flex-col items-center w-[80%] h-auto  ">
                    {Cart?.map((item, i) => {
                        return <CartCard item={item} key={i} />
                    })}
                </div></>) : <EmptyCart />}
        </div>
    )
}

export default CartComponent;

export const metadata = {
    title: 'BAG - Apple( IN )',
    description: '...',
}
