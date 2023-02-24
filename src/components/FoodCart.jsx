import React from 'react'

const FoodCart = ({food}) => {
  return (
    <div className='flex mb-4 items-center bg-white p-2 shadow-sm'>
      <img src={food.image} alt=""  className='h-6 w-12 rounded object-cover mr-2'/>
      <p className='text-xs text-gray-900 font-semibold'>{food.quantity } x  {food.name}</p>
    </div>
  )
}

export default FoodCart
