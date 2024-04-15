"use client"
import { useApple } from '@/context/AppleContextProvider'
import React from 'react'

const page = () => {
    const { Cart } = useApple();
    console.log(Cart)
    return (
        <div></div>
    )
}

export default page