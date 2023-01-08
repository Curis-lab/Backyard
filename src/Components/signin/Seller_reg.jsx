import React from 'react'
import { Link } from 'react-router-dom'

function Seller_reg() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='border-2 border-green-700 shadow-sm p-10 rounded-md flex-col justify-center items-center'>
        <h1 className='font-serif text-xl'>Seller Registration</h1>
        <form className='flex flex-col gap-2'>
          <input placeholder='Name' className='border shadow-sm p-1'/>
          <input placeholder='Phone Number' className='border shadow-sm p-1'/>
          <input placeholder='Address'></input>
          <div className='flex gap-2'>
            <input type='checkbox'/>
            <p className='text-sm text-gray-500'>Did you agree our policy</p>
          </div>
          <button className='bg-green-400 rounded-full p-1 hover:bg-green-600 hover:text-white'>Submit</button>
        </form>
        <p className='text-sm mt-2'>Did you have already account? <Link to='login' className='text-blue-600'>Log In</Link></p>
      </div>
    </div>
  )
}

export default Seller_reg
