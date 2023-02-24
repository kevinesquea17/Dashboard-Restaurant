import React, {useContext, useState} from 'react'
import categories from '../categories'
import Category from './Category'
import {BiRestaurant} from 'react-icons/bi'
import ProductContext from '../context/ProductContext'

const ListCategories = () => {

  const {categoryActive, setCategoryActive} = useContext(ProductContext);

  return (
    <div className='flex justify-between items-center space-x-5'>
      <div onClick={() => setCategoryActive(0)} className={`${categoryActive === 0 ? 'bg-primary' : 'bg-transparent'} h-[6.5rem] w-14 p-1 rounded-full flex flex-col items-center shadow-lg`}>
        <div className='h-12 w-12 bg-white flex justify-center items-center rounded-full mb-2'>
          <BiRestaurant/>
        </div>
        <p className='text-[10px] text-gray-800 font-semibold'>All</p>
      </div>
      {categories.map(category => (
        <Category key={category.id} category={category}/>
      ))}
    </div>
  )
}


export default ListCategories