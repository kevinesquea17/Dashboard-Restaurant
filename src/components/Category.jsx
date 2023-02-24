import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'

const Category = ({category}) => {

  const {categoryActive, setCategoryActive} = useContext(ProductContext);

  return (
    <div onClick={() => setCategoryActive(category.id)} className={`${categoryActive === category.id ? 'bg-primary' : 'bg-transparent'} h-[6.5rem] w-14 p-1 rounded-full flex flex-col items-center shadow-lg`}>
      <div className={`${categoryActive === category.id ? 'bg-white' : 'bg-transparent border'} h-12 w-12 bg-white flex justify-center items-center rounded-full mb-2`}>
        {category.icon}
      </div>
      <p className='text-[10px] text-gray-800 font-semibold'>{category.name}</p>
    </div>
  )
}


export default Category
