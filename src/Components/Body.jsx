import React from 'react'
import background from '../assets/img/health.jpeg';
//using in project
const Body = () => {
  return (
    <div className='w-screen relative'>
      <img src={background} alt='/' className='w-full h-80 object-cover'/>
      <div className='absolute bottom-20 left-0 px-24'>
        <h1 className='text-2xl text-white font-bold w-44'>Order your Dairy Groceries</h1>
        <h1 className='text-white'>FreeDelivery</h1>
        <div className='flex'>
          <input/>
        </div>
      </div>
    </div>
  )
}

export default Body
