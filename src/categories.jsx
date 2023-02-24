import {CiPizza, CiBurger, CiIceCream} from 'react-icons/ci'
import {GiOpenedFoodCan, GiPineapple, GiSushis} from 'react-icons/gi'
import {TbMeat} from 'react-icons/tb'

const categories = [
    {id: 1, name: 'Pizza', icon: <CiPizza className='text-xl' />},
    {id: 2, name: 'Asian', icon: <GiOpenedFoodCan className='text-xl' />},
    {id: 3, name: 'Burger', icon: <CiBurger className='text-xl' />},
    {id: 4, name: 'BQQ', icon: <TbMeat className='text-xl' />},
    {id: 5, name: 'Dessert', icon: <CiIceCream className='text-xl'/>},
    {id: 6, name: 'Thai', icon: <GiPineapple className='text-xl'/>},
    {id: 7, name: 'Sushi', icon: <GiSushis className='text-xl'/>},
]

export default categories;