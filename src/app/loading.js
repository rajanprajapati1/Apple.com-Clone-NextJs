import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <Image
        className='animate-spin w-12'
        width={100}
        height={100}
        alt='apple.com'
        src="data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2260%22%20height%3D%2260%22%20fill%3D%22rgba%280%2C0%2C0%2C0%29%22%20style%3D%22%22%3E%3Cpath%20stroke%3D%22rgb%28134%2C134%2C139%29%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20d%3D%22M37.492%2011.456a20%2020%200%201%200%2012.071%2014.386%22%2F%3E%3C%2Fsvg%3E"
        wid
        ></Image>
    </div>
  )
}

export default Loading