'use client'

import { BiSolidDog } from 'react-icons/bi'

const Logo = () => {
    return ( 
    <div className='flex flex-row items-center gap-1 cursor-pointer' >
        <BiSolidDog  className='text-3xl text-blue-500'/>
        <div className='text-2xl font-bold text-blue-500 hidden md:block'>
            Together
        </div>
    </div> 
    );
}
 
export default Logo;