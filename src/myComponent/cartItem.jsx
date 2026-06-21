import React from 'react'
import Quantity from "./quantity";

const CartItem = ({item}) => {
  return (
    <div className='flex gap-2 sm:gap-4 p-2 sm:p-4'>
        <div className='bg-gray-600 h-16 w-16 sm:h-20 sm:w-20'>
        </div>
        <div className='flex flex-col gap-1 sm:gap-2'>
            <p className='text-sm sm:text-base'>{item.name}</p>
            <p className='text-xs sm:text-sm'>{item.price}</p>
            <Quantity item={item}/>
        </div>
    </div>
  )
}

export default CartItem