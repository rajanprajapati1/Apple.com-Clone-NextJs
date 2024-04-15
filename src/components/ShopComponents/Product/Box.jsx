import React from 'react'


const Box = ({ type, value, selected, handleSelection }) => {
    const handleClick = () => {
        handleSelection(type, value);
        console.log(selected)
    };

    return (
        <div onClick={handleClick} className={` ${selected ? 'border-blue-700 border-2' : ''} w-full rounded-2xl h-[90px] active:border-blue-700 active:border-2 mb-2 flex justify-between items-center px-5 border bg-white `}>
            {type === 'storage' && (<>
                <div className="model">
                    <h1 className='font-semibold text-xl'>{value?.size}</h1>
                </div>
                <div className="price text-right">
                    <small className='text-[10px] text-slate-400'>{value?.pricePerMonth}<br /> {value?.mrp}</small>
                </div>
            </>)}
            {type === 'model' && (<>
                <div className="model">
                    <h1 className='font-semibold text-xl'> {value?.model}</h1>
                    <small className='text-slate-400'>{value?.display}</small>
                </div>
                <div className="price text-right">
                    <small className='text-[10px] text-slate-400'>{value?.monthly_price}<br />{value?.full_price}</small>
                </div>
            </>)}
        </div>
    )
}

export default Box