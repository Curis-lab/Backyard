import React from 'react'

function About({image}) {
  return (
    <div className='w-full flex justify-center px-10'>
      <div className='h-52 w-1/2 flex justify-center'>
        <img alt='img' className='h-full' src={image}/>
      </div>
      <div className='h-52 w-1/2 flex items-center'>
        <div className='w-1/2'>
            <h1 className='text-2xl'>About Us</h1>
            <p>this page is work for sell remain product form your home. if you have some execce vegetable , you can share and donate it.</p>
        </div>
      </div>
    </div>
  )
}

export default About
