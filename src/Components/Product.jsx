import React from 'react'
import Menu from './Menu';
import logo from '../assets/img/logo.jpeg';
import { useState } from 'react';
import { useReducer } from 'react';

function reducer({state}){
    switch(state){
        case 'LOGIN':
            return {state:'CHECK_BOX'}
        case 'CHECK_BOX':
            return {state:'LOGIN'}
    }
}
function Product({product_blog}) {
    let [noItems, setNoItems] = useState(1);
    const [state, setState]= useState(false);

    const [status, dispatch] = useReducer(reducer, {state:'LOGIN'});
    
    const IncreaseClick =(e)=>{
        setNoItems(noItems++);
    }
    const DecreaseClick = (e)=>{
        if (noItems >0){setNoItems(noItems--);}
        else{setNoItems(0);}
    }
    const finalCost =(no_product, prices)=>{
        return no_product * prices
    }
    function AddToList(){
        // do someting
        return <div>do something</div>
    }
  return (
    <div>
        <Menu logo={logo}/>
        <div className='flex p-10'>
            <div className='sm:w-full md:w-1/2 items-center flex justify-center'>
                <img className='h-80' src="images/a.jpeg"/>
            </div>
            <div className="flex flex-col items-left px-10 gap-2">
                <h2 className="font-bold">{product_blog.name}</h2>
                <h1 className="text-2xl">Organic Chickend drams</h1>
                <span className="text-gray-500">2 drums, 2 things</span>
                <p className="text-xl">$9928</p>
                <p className="text-gray-500 text-sm">Actual wdight may vary from estimate due to seanality and /or sourcing</p>
                <div className="py-3">
                    <p className="text-sm">Guaranteed Fresh</p>
                    <p className="text-sm text-green-700">At least 3 days from delivery</p>
                </div>
                <h1 className="text-center">Toatal : ${finalCost(2,noItems)} (estimated weight: 1.50lb)</h1>
                <div className="flex justify-center items-center rounded-full shadow-lg">
                    <button className="w-1/3 bg-green-700 px-11 py-1 rounded-l-full text-white font-bold" onClick={DecreaseClick}>-</button>
                    <div className="w-1/3 bg-gray-200 px-11 py-1 font-bold text-center">{noItems}</div>
                    <button className="w-1/3 bg-green-700 px-11 py-1 rounded-r-full text-white font-bold" onClick={IncreaseClick}>+</button>
                </div>
                <button onClick={()=>dispatch()}>Check out</button>
                <div>{status}</div>
                <button className="text-green-700 text-center p-3" onClick={()=>AddToList()}>
                    Add to List
                </button>
            </div>
        </div>
    </div>
  )
}
Product.defaultProps={
    Image: Image,
    product_blog:{name:'salat',price: 12, discount: 99}
}
export default Product
