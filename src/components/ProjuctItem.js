import React from 'react';

function ProjuctItem({product}) {
  return (
    <div className='rounded-lg hover:shadow-xl hover:scale-[1.02] duration-500 px-8 py-6'>
        <h1 className='text-xl text-gray-800 my-3'>{product.name}</h1>
        <img className='w-[240px] h-[320px]' src={product['image-url']} alt="iphone x"></img>
        <div className='flex justify-between mt-1 mb-8'>
            <div className='text-gray-700'>{product['display-size']}</div>
            <div className='font-semibold text-gray-600'>${product.price}</div>
        </div>
        <div className='px-4 py-2 text-center text-white font-semibold cursor-pointer bg-blue-500 hover:bg-blue-700 rounded'>
          Add To Cart
        </div>
    </div>
  )
}

export default ProjuctItem;