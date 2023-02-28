import React from 'react'
import {HiShoppingCart} from 'react-icons/hi';


function Navbar({numberofitems}) {
  return (
    <div>
      <div className='flex p-2'>
        <input type='textbox' className='border rounded-full'/>
        <input type='submit' className='bg-pink-800'/>
        <HiShoppingCart className='text-2xl text-white'/>
        <h1>{numberofitems}</h1>
      </div>
    </div>
  )
}

export default Navbar
