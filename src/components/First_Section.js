import React from 'react';
import iphone from '../images/Apple-iPhone-14.jpg';

function First_Section() {
  return (
    <div className='w-full h-screen flex flex-col sm:flex-row pl-20'>
    <div className='max-w-[1000px] mx-auto flex flex-col justify-center h-full'>
      <p className='text-4xl font-bold text-pink-600'>Hi, This is the world largest shopping website</p>
      <h1 className='my-4 text-xl sm:text-4xl font-bold text-gray-700'>Find Your Best iPhone.</h1>
      <div>
          <button className='bg-blue-600 text-white hover:shadow-xl border-full rounded px-4 py-[6px] flex justify-center'>
            Buy Now
          </button>
      </div>
    </div>
    <div className='my-auto'>
      <img src={iphone}></img>
    </div>
  </div>
  )
}

export default First_Section;