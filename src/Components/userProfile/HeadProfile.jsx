import React from 'react'

function HeadProfile() {
  return (
    <div className='h-full w-[30%] flex'>
      <div className='h-full w-[70%] rounded-lg border-2 border-green-600 shadow-lg p-4'>
        <div className='w-full h-24 flex justify-center'>
          <div className='w-20 h-20 bg-blue-900 rounded-full shadow-lg'></div>
        </div>
        <div className=' flex flex-col justify-center'>
          <h1 className='text-xl font-semibold'>Savana</h1>
          <p className='text-sm'>Remained : $300</p>
          <p className='text-sm text-gray-500'>Location: Thanpyuzayat, Mon State</p>
        </div>
      </div>
    </div>
  )
}

export default HeadProfile
