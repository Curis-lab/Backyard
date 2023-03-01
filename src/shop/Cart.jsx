import React from 'react'

function Cart({item, callback_function}) {
  return (
    <div key={item.id} className="flex flex-col shadow-lg rounded-lg" onClick={callback_function}>
        <img src={item.image} alt='/' className='w-32 h-32 object-cover'/>
        <h1>{item.name}</h1>
        <p>{item.prices}</p>
        <p>color</p>
    </div>
  )
}

export default Cart
