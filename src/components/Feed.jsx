import React from 'react'
import ListCategories from './ListCategories'
import { ProductProvider } from '../context/ProductContext'
import {MdKeyboardArrowRight, MdKeyboardArrowDown} from 'react-icons/md'
import {BiTime} from 'react-icons/bi'
import HeaderFeed from './HeaderFeed'
import Promotion from './Promotion'
import ListFoods from './ListFoods'

const Feed = () => {
  return (
    <div className='relative w-[80%] top-0 left-0 font-Poppins py-8'>
        <div className='w-[85%] mx-auto h-full flex flex-col'>
          <HeaderFeed />
          <Promotion />
          <div className='flex justify-between items-center mb-6'>
            <h2 className='text-2xl text-text font-bold'>Restaurants 🍔</h2>
            <button className='flex space-x-1 px-2 py-2 bg-secondary text-white text-xs items-center rounded-full shadow-sm'>
              <BiTime />
              <span>Discover Now</span>
              <MdKeyboardArrowDown />
            </button>
          </div>
          <div className='flex justify-between items-center w-full mb-12'>
              <ProductProvider>
                <ListCategories />
                <div className='w-12 h-12 bg-[#F8F8F6] rounded-full flex justify-center items-center shadow-md text-text hover:bg-primary hover:text-white transition duration-300 ease-out'>
                  <MdKeyboardArrowRight className='text-xl' />
                </div>
              </ProductProvider> 
          </div>
          <ListFoods />
        </div>
    </div>
  )
}

export default Feed
