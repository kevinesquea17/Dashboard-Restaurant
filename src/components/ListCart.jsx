import React from 'react'
import cart from '../cart'
import FoodCart from './FoodCart'

const ListCart = () => {
  return (
    <div className='flex flex-col'>
        {cart.map(food => (
            <FoodCart  food={food}/>
        ))}
    </div>
  )
}

export default ListCart
