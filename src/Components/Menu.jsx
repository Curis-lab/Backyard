import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.jpeg';

const Menu = () => {
  return (
    <nav className="flex justify-between items-center w-screen fixed z-10 bg-white p-2 shadow-lg">
        <div className="flex justify-between items-center">
            <img src={logo} alt='logo' className='w-12 hidden md:flex'/>
            <span className="text-2xl cursor-pointer sm:text-center w-full">
                yardChart
            </span>
        </div>
        <ul className="flex items-center">
            <li className="mx-4 my-6 md:my-0"><Link to='/'>Home</Link></li>
            <li className="mx-4 my-6 md:my-0"><Link to='/dashprofile'>Dashboard</Link></li>
            <li className="mx-4 my-6 md:my-0"><Link to='/userprofile'>user profile</Link></li>
            <button className=" border border-green-500 px-6 py-2 mx-4 hover:bg-green-500 rounded-md">
                <Link to='login' className='text-sm'>Log In</Link>
            </button>
            <button className="bg-green-600 text-white px-6 py-2 mx-4 hover:bg-green-500 rounded-md">
                <Link to='signin' className='text-sm'>Sign In</Link>
            </button>
        </ul>
    </nav>
  )
} 

export default Menu
