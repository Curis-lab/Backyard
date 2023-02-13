import React from 'react'
import background from '../assets/img/health.jpeg';

const Body = () => {
  return (
    <div className='w-screen relative'>
      <img src={background} alt='/' className='bg-cover w-full h-full'/>
    </div>
  )
}

export default Body
