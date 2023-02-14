import React from 'react'

function Cate_card({items}) {
  return (
    <div className='p-10 bg-slate-200 rounded-lg border-none flex-col items-center shadow-lg'>
      <div>{items.icons}</div>
      <p>{items.name}</p>
    </div>
  )
}

export default Cate_card
