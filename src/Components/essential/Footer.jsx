import React from 'react'

export default function Footer({Image}) {
  return (
    <div className='flex-col content-center items-center justify-center py-5'>
      <div className='flex justify-center'>
      </div>
      <div className='flex justify-center'>
        <ul className='flex gap-4 p-2 justify-center items-center'>
          <li className='hover:text-green-600 cursor-pointer'> Facebook </li>
          <li className='hover:text-green-600 cursor-pointer'> Telegram </li>
          <li className='hover:text-green-600 cursor-pointer'> Viber </li>
        </ul>
      </div>
    </div>
  )
}
