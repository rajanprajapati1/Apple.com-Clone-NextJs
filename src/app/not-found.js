import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'
import { MdChevronRight } from 'react-icons/md'
import "./globals.css"

export default function NotFound() {
    return (
        <divn className={`notfound h-screen w-full flex  flex-col gap-7 items-center justify-center  text-center`}>
            <h1 className='title text-center font-semibold  text-5xl'>
                The page you’re looking <br /> for can’t be found.
            </h1>
            <div className="input flex items-center  border w-[550px]  h-16 rounded-xl">
                <FaSearch  color='#E2E8F8' className='ml-3 logo' />
                <input style={{width : "490px"}} type="text" placeholder='Search apple.com' className='ml-4 outline-none border-none h-12 text-sm' />
            </div>
            <Link className='flex items-center text-blue-500 hover:underline ' href="/">Or see our site map <MdChevronRight/></Link>
        </divn>
    )
}


export const metadata = {
    title: 'Page Not Found - Apple( IN )',
    description: '...',
}
