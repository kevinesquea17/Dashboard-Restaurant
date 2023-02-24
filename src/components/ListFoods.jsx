import React from 'react'
import foods from '../foods'
import Food from './Food'

const ListFoods = () => {
  return (
    <div className='grid grid-cols-3 gap-4'>
      {foods.map(food => (
            <Food  food={food}/>
      ))}
    </div>
  )
}

export default ListFoods
