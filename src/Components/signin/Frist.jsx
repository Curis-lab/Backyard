import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const CheckBox = ({children}) =>{
    const [checked, setChecked] = useState(true)
    return React.Children.map(children,(child)=>{
        const clone = React.cloneElement(child,{
            checked,
            setChecked
        })
        return clone
    })
}
const Label = ({setChecked, children}) =>{
    return <label onClick={()=>setChecked(state => !state)}>{children}</label>
}
const Radio = ({ checked, setChecked})=>{
    return <input className='bg-blue-900'  type="radio" checked={checked} onChange={e=>setChecked(e.target.checked)}/>
}
function Frist() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center border p-5 rounded-lg shadow-sm">
            <h1 className="text-xl font-bold">Join as a buyer or seller</h1>
            <div className="flex">
                <CheckBox className='bg-blue-900'>
                    <Radio/>
                    <Label>Sign in as Buyer</Label>
                 </CheckBox>
                {/* if it be checked countinue to work */}
                <Link to='sell'>
                    <div className="flex flex-col border-2 hover:border-green-600 m-10 rounded-lg">
                        <div className="m-10">Sign in as Seller</div>
                        <input className="pl-5 pb-2" type="radio"/>
                    </div>
                </Link>
            </div>
            <button className='m-2 rounded-full py-2 px-20 bg-green-200 hover:bg-green-600 shadow-md text-gray-500 hover:text-white'>Create a account</button>
            <p className='text-sm'>Already have an account? <Link to='login' className='text-blue-800'>Log in</Link></p>
        </div>
    </div>
  )
}

export default Frist
