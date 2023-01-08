import React from 'react'
import Card_container from '../Card_container'

function Ordered({products}) {
  return (
    <div className='h-full w-[70%] flex justify-end'>
        <div className='h-96 rounded-lg border-2 border-green-600 shadow-lg p-2'>
          <Card_container blogs={products}/>
        </div>
    </div>
  )
}

export default Ordered
