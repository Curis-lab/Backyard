import React from 'react'
import Cart from './Cart'
import { useContext } from 'react';
import { shop_content } from '..';

function Items() {
  const {shopData} = useContext(shop_content);
  return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
          {shopData.map(
            pAndc=>pAndc.products.map(
              i=>
            <Cart {...i} key={i.id}/>
            )
          )
          }
        </div>
  )
}

export default Items
