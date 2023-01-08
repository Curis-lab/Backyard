import React from 'react'
import { Link } from 'react-router-dom';

function Card({single_Blog}) {
  return (
    <section class="flex justify-center items-center m-10">
    <div class="bg-white shadow-lg hover:scale-105 duration-300">
        <Link to='/product'>
            <img class="w-52 h-52 object-cover" src="images/a.jpeg"/>
        </Link>
        <div class="px-3 py-4">
            <span class="text-xl font-bold capitalize">{single_Blog.name}</span>
            <div class="flex my-3 items-center">
                <p class="text-lg font-semibold">${single_Blog.price}</p>
                <del class="text-gray-400">
                    <p class="text-sm  ml-2">${single_Blog.discount}</p>
                </del>
            </div>
        </div>
    </div>
  </section>
  )
}
export default Card
