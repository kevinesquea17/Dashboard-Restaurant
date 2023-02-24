import React from 'react'
import {AiOutlineStar} from 'react-icons/ai'

const Food = ({food}) => {
  return (
    <div className='flex flex-col bg-white shadow-sm rounded-md overflow-hidden pb-2 border'>
      <div className='h-40 w-full relative'>
        <img src={food.image} alt="" className='h-40 w-full rounded object-cover object-center'/>
        <div className='bg-white absolute bottom-0 left-0 bg-opacity-90 p-2 rounded'>
            <p className='text-sm font-semibold text-text'>20 - 25 <span className='text-xs font-normal text-gray-900'>min</span></p>
        </div>
      </div>

      <div className='p-2 pt-3'>
        <p className='font-semibold mb-1'>{food.name}</p>
        <div className='flex items-center space-x-3'>
            <div className='flex space-x-1 items-center text-gray-900 text-xs font-semibold'>
                <AiOutlineStar/>
                <span>{food.puntuation}</span>
            </div>
            <div className='flex items-center space-x-2 text-xs text-gray-400'>
            {food.categories.map(category => (
                <span className='capitalize'>{category}</span>
            ))}
            <span>$$</span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Food
