import React from 'react'
import Menu from '../Menu'
import HeadProfile from './HeadProfile'
import Ordered from './Ordered';
import Footer from '../essential/Footer';

function MainBoard({flow_product}) {

  return (
    <div>
        <Menu/>
        <div className='w-full h-full flex mt-10 px-24 gap-4'>
            <Ordered products={flow_product}/>
            <HeadProfile/>
        </div>
        <Footer/>
    </div>
  )
}

export default MainBoard
