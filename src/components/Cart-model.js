import React from 'react'
import { AiOutlineCloseSquare, AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

function Cartmodel() {
  return (
    <div className='cart-overlay fixed w-full hidden h-full z-20'>
        <div className='cart sm:w-[35vw] w-full h-full translate-x-full duration-500 float-right px-6 pt-4 bg-white border'>
        <span className='text-4xl'>
            <AiOutlineCloseSquare className='cursor-pointer'/>
        </span>
        <h2 className='text-center text-xl font-semibold text-gray-700'>Your cart</h2>
        <div className='cart-content'>
            {/* cart item */}
            <div className='flex justify-between my-6'>
            <img className='w-[80px]' src='' alt='apple product'></img>
            <div>
                <h3 className='text-xl text-gray-800'>Name</h3>
                <p className='my-1 font-semibold font-serif'>$399</p>
                <button className='text-red-900'>remove</button>
            </div>
            <div className='my-2'>
                <span className='cursor-pointer'><AiOutlineUp/></span>
                <span className='ml-1'>1</span>
                <span className='cursor-pointer'><AiOutlineDown/></span>
            </div>
            </div>
            {/* end item */}
        </div>
        <h2 className='mt-10 mb-4 text-xl text-center font-semibold text-gray-800'>Your total: $<span className='text-xl font-semibold'>99</span></h2>
        <div className='flex justify-center items-center'>
            <button className='px-4 py-[7px] text-white font-semibold bg-blue-700 hover:bg-blue-800 rounded'>
            CLEAR CART
            </button>
        </div>
        </div>
    </div>
  )
}

export default Cartmodel;