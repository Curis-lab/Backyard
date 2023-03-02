import React from 'react'
import Cart from './Cart'

function Items({products, callback}) {
  return (
        <div className="flex gap-2">
          {products.map(i=><Cart item={i} callback_function={callback} key={i.id}/>)}
        </div>
  )
}

export default Items
