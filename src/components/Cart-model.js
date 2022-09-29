import React, { useContext } from 'react'
import { AiOutlineCloseSquare, AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { CartContext } from '../context/CartContext';

function Cartmodel() {
  const { isCartOpen, totalCost ,cartProducts ,OpenCartHandle ,removeProduct ,productAmountIncrement,
  productAmountDecrement ,clearCart } = useContext(CartContext);

  return (
    // cart overlay - background-color with opacity
    <div className={isCartOpen?'fixed w-full h-full bg-[rgba(254,226,226,0.5)] z-30':'invisible fixed w-full h-full z-30'}>
        {/* cart body */}
        <div className={`sm:w-[35vw] relative w-full h-full ${isCartOpen?`translate-x-0`:`translate-x-full`} duration-500 float-right px-6 pt-4 bg-white border`}>
            <span className='text-4xl'>
                <AiOutlineCloseSquare onClick={OpenCartHandle} className='cursor-pointer'/>
            </span>
            {/* <div className='overscroll-x-auto overflow-y-auto'> */}
                <h2 className='text-center text-xl font-semibold text-gray-700'>Your cart</h2>
                <div className='cart-content'>
                    {/* cart item */}
                    {cartProducts.map(product=>{
                        return(
                            <div key={product._id} className='flex justify-between my-6'>
                                <img className='w-[80px]' src={product['image-url']} alt='apple product'></img>
                                <div>
                                    <h3 className='text-md text-gray-800'>{product.name}</h3>
                                    <p className='my-1 font-semibold font-serif'>${product.price}</p>
                                    <button onClick={()=>{removeProduct(product)}} className='text-red-900'>remove</button>
                                </div>
                                <div className='my-2'>
                                    <span onClick={()=>{productAmountIncrement(product)}} className='cursor-pointer'><AiOutlineUp/></span>
                                    <span className='ml-1'>{product.amount}</span>
                                    <span onClick={()=>{productAmountDecrement(product)}} className='cursor-pointer'><AiOutlineDown/></span>
                                </div>
                            </div>
                        )
                    })}
                    {/* end item */}
                </div>
                <h2 className='mt-10 mb-4 text-xl text-center font-semibold text-gray-800'>Your total: $<span className='text-xl font-semibold'>{totalCost}</span></h2>
                <div className='flex justify-center items-center'>
                    <button onClick={()=>{clearCart()}} className='px-4 py-[7px] text-white font-semibold bg-blue-700 hover:bg-blue-800 rounded'>
                    CLEAR CART
                    </button>
                </div>
            {/* </div> */}
        </div>
    </div>
  )
}

export default Cartmodel;