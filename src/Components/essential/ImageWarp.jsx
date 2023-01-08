import React from 'react'

function ImageWarp({Image,size}) {
  return (
    <div className='w-24 h-24 rounded-full bg-violet-800'>
      <img className='w-23 h-22' alt='profile_photo'  src={Image}></img>
    </div>
  )
}
export default ImageWarp
