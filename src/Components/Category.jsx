import React from 'react'
import Cate_card from './Cate_card'
import {FiArrowLeftCircle, FiArrowRightCircle} from 'react-icons/fi';

function Category() {
  const categories_items=[
    {
        icons:'file',
        name:'Meet & fish'
    },
    {
        icons:'file',
        name:'Vegetables'
    },
    {
        icons:'file',
        name:'Fruits'
    },
    {
        icons:'file',
        name:'Beens'
    },
    {
        icons:'file',
        name:'Gardening'
    },
    {
        icons:'file',
        name:'IceCream'
    },
    {
        icons:'file',
        name:'Cake'
    },
    {
        icons:'file',
        name:'Salads'
    }
  ]
  return (
    <div className='py-5 flex-col px-24'>
      <div className='flex justify-between'>
        <h1 className='text-2xl font-semibold'>Category</h1>
        <div className='flex gap-4'>
            <FiArrowLeftCircle className='text-2xl'/>
            <FiArrowRightCircle className='text-2xl'/>
        </div>
      </div>
      <div className='flex w-full justify-between'>
        {categories_items.map((cate)=><Cate_card items={cate} key={cate.name}/>)}
      </div>
    </div>
  )
}

export default Category
