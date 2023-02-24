import React from 'react'
import {HiOutlineMenuAlt4} from'react-icons/hi'
import {AiOutlineSearch} from 'react-icons/ai'

const HeaderFeed = () => {
  return (
    <div className='flex space-x-10 items-center mb-12'>
      <div className='flex items-center space-x-4 text-2xl font-bold text-text'>
        <HiOutlineMenuAlt4 />
        <h1>Chukwudi</h1>
      </div>
      <div className='flex-1 p-2 bg-[#F8F8F6] shadow-sm flex items-center space-x-2 rounded-md'>
        <AiOutlineSearch className='text-text'/>
        <input type="text" placeholder='Search...' className='flex-1 bg-transparent outline-none placeholder:text-gray-400 placeholder:text-sm' />
      </div>
    </div>
  )
}

export default HeaderFeed
