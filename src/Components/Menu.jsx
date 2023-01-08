import React from 'react';
import { Link } from 'react-router-dom';
const Menu = () => {
  return (
    <nav className="px-5 bg-white shadow md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
            <span className="text-2xl cursor-pointer">
                yardChart
            </span>
        </div>
        <ul className="md:flex md:items-center md:static md:z-auto z-[-1] absolute">
            <li className="mx-4 my-6 md:my-0"><Link to='/'>Home</Link></li>
            <li className="mx-4 my-6 md:my-0"><Link to='/dashprofile'>Dashboard</Link></li>
            <li className="mx-4 my-6 md:my-0"><Link to='/userprofile'>user profile</Link></li>
            <button className=" border border-green-500 px-6 py-2 mx-4 hover:bg-green-500 rounded-full">
                <Link to='login'>Log In</Link>
            </button>
            <button className="bg-green-600 text-white px-6 py-2 mx-4 hover:bg-green-500 rounded-full">
                <Link to='signin'>Sign In</Link>
            </button>
        </ul>
    </nav>
  )
} 

export default Menu
