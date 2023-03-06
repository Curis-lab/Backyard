import React from 'react'

function Cart({item, callback_function}) {
  return (
  <div key={item.id} className="flex flex-col shadow-lg rounded-lg" onClick={callback_function}>
        <div className='bg-slate-500 rounded-t-lg w-full h-full'>
          <img src={item.image} alt='/' className='w-32 h-32 object-cover hover:scale-50 hover:rounded-lg transition duration-300'/>
        </div>
    </div>
  )
}

export default Cart
