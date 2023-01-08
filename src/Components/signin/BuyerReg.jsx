import React from 'react';
import { Link } from 'react-router-dom';
import Google_api from '../api_components/Google_api';

function BuyerReg() {
  return (
      <div className='w-screen h-screen flex items-center justify-center'>
        <div className='flex flex-col justify-center items-center border p-10 rounded-md shadow-sm'>
            <h1 className='text-3xl font-serif px-10 py-3'>Sing up to delicious</h1>
            <button className='py-2 px-40 border rounded-full border-green-900 m-2 text-sm w-full'>Continue with Facebook</button>
            <Google_api></Google_api>
            <p>or</p>
            <form className='p-1 w-full'>
                <div className='flex flex-row justify-center items-center gap-2'>
                    <input className='rounded-md border-2 text-sm py-2 px-8 w-1/2 my-2' placeholder='First name'></input>
                    <input className='rounded-md border-2 text-sm py-2 px-8 w-1/2 my-2' placeholder='Second name'></input>
                </div>
                <input className='rounded-md border-2 text-sm py-2 px-2 w-full my-2' placeholder='Second name'></input>
                <input className='rounded-md border-2 text-sm py-2 px-2 w-full my-2' placeholder='Passwords' type='password'></input>
                <input className='rounded-md border-2 text-sm py-2 px-2 w-full my-2' placeholder='Myanmar'></input>
                <div className='flex py-2'><input type='checkbox'></input><p className='text-sm px-2'>Send me emails with tips on how to find talent that fits my needs</p></div>
                <div className='flex'><input type='checkbox'></input><p className='text-sm px-2'>Yes, I understand and agree to the yardChart</p></div>
                <button className='rounded-full shadow-sm text-sm py-2 px-2 w-full my-3 bg-green-500 text-white'>Create my account</button>
            </form>
            <p>Already have an account?<Link to='login' className='text-blue-800'> Log in</Link>.</p>
        </div>
      </div>
  )
}

export default BuyerReg
