import React from 'react'

function Cart({...item}) {
  return (
  <div className='bg-blue-900 rounded-lg flex-col text-slate-300'>
    <div>{item.image}</div>
    <div>
      <h1>{item.name}</h1>
      <p>{item.category}</p>
      <p>{item.price}</p>
    </div>
  </div>
  )
}

export default Cart
