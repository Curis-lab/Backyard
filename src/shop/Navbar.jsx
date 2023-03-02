import React, { useState } from 'react'
import {HiShoppingCart} from 'react-icons/hi';


function Navbar({numberofitems, search_function}) {

  const [searchItems, setSearchItems] = useState('');

  return (
    <div>
      <div className='flex p-2'>
        {/* just import keyboard Enter keys */}
        <input 
        type='textbox' 
        className='border rounded-full' value={searchItems} 
        onChange={e=>setSearchItems(e.target.value)} 
        onKeyDown={e => e.key === 'Enter'? search_function(searchItems) : search_function('')}/>

        <div className='flex relative'>
          <HiShoppingCart className='text-2xl text-white'/>
          <h1 className='absolute bg-red-600 p-1 text-sm rounded-full inset-0 text-center text-white'>{numberofitems}</h1>
        </div>
      </div>
    </div>
  )
}

export default Navbar
