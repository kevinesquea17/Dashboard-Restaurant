import React from 'react'
import {AiOutlineUser, AiOutlineFieldTime} from 'react-icons/ai'
import ListCart from './ListCart'

const RightBar = () => {
  return (
    <div className='fixed top-0 right-0 bg-rightBar h-screen w-[20%] py-8 px-8 font-Poppins flex flex-col'>
        {/* Header */}
        <div className='flex justify-end mb-8'>
            <div className='flex space-x-6 items-center'>
                <AiOutlineUser  className='text-xl text-text'/>
                <p className='bg-primary px-3 py-1 rounded-md text-text text-sm font-bold'>3</p>
            </div>
        </div>
        {/* Tittle */}
        <div className='text-text text-xl font-semibold mb-6'>
            <h2>My 😎</h2>
            <h2>Order</h2>
        </div>
        
        <div className='bg-tercery px-3 py-6 rounded-md mb-10'>
            <div className='flex justify-between items-center mb-4'>
                <p className='text-xs text-white font-light'>625 St Marks Ave</p>
                <button className='bg-transparent text-primary text-xs font-light'>Edit</button>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center space-x-2'>
                    <div className='bg-white bg-opacity-30 flex items-center justify-center w-8 h-8 rounded'>
                        <AiOutlineFieldTime className='text-primary' />
                    </div>
                    <p className='text-xs text-white font-light'>35 min</p>
                </div>
                <p className='text-xs text-primary font-light'>Choose time</p>
            </div>
        </div>

        <ListCart />
    </div>
  )
}

export default RightBar
