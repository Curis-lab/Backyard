import React from 'react';
import Card from './Card';
// increaase value for item

export default function Card_container({blogs}) {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4'>
            {blogs.map((blog)=>(
              <Card single_Blog={blog}/>
            ))}
    </div>
  )
}
