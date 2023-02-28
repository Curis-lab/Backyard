import React from 'react'

function Items({products, callback}) {
  return (
    <div>
        {/* card */}
        <div className="flex gap-2">
          {products.map(i=><div key={i.id} className="flex flex-col shadow-lg rounded-lg" onClick={callback}><img src={i.image} alt='/' className='w-32 h-32 object-cover'/><h1>{i.name}</h1><p>{i.prices}</p><p>color</p></div>)}
        </div>
      </div>
  )
}

export default Items
