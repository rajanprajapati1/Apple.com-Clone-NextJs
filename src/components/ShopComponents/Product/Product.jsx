
import React from 'react'
import PriceBox from './PriceBox'
import ProductBox from './ProductBox'

const Product = ({FindByProduct}) => {
  return (
    <div className='flex flex-col w-full h-auto'>
        <PriceBox FindByProduct={FindByProduct}/>
        <ProductBox FindByProduct={FindByProduct}/>
    </div>
  )
}

export default Product