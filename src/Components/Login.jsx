import React from 'react';
import { Link } from 'react-router-dom';

//if clicked they will show only login page how can i manage it

const Login = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen shadow-md">
        <div className="border-2 rounded flex flex-col gap-8 p-24 border-green-500 shadow-lg">
            <h1 className="text-center text-2xl">Login to yardChart</h1>
            <form className="flex flex-col gap-2">
                <input type="text" placeholder="username" className="border p-2 rounded-lg"/>
                <input type="submit" className="bg-green-200 rounded-full p-2 hover:bg-green-700 hover:text-white shadow-md my-2"/>
            </form>
            <h2 className="text-center">or</h2>
            <button className="bg-green-200 p-2 rounded-full hover:bg-green-700 hover:text-white shadow-md">Continue with Apple</button>
            <p classNameName='text-sm'>Don't have any account? <Link to="signin" classNameName='text-blue-700'> Create </Link>.</p>
        </div>
    </div>
  )
}

export default Login
