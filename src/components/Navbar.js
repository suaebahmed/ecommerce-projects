import React, { useContext, useState } from 'react'
import { FaBars,FaTimes, FaUserCircle } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import logo from '../logo.svg';
import { CartContext } from '../context/CartContext';

function Navbar() {
  const [isNav,setNav] = useState(true);
//   const [isLoggin,setLogin] = useState(false);
  const isLoggin = false;
  const [isDropDownOpen,setDropDownOpen] = useState(false);
  const { OpenCartHandle , cartProducts} = useContext(CartContext);
    
  return (
    <div className='fixed bg-white w-full h-[65px] flex justify-between items-center shadow-md text-gray-700 px-4 z-20'>
        <div>
            <a href='/ecommerce-projects'>
                <img className='w-[50px]' src={logo} alt='logo'></img>
            </a>
        </div>

        {/* manu */}
        <ul className='hidden md:flex justify-center items-center'>
            <li className='px-4 cursor-pointer'>
                <a href='/ecommerce-projects'>Home</a>
            </li>
            {/* Cart icon with red badge */}
            <li onClick={OpenCartHandle} className='px-4 cursor-pointer relative'>
                 <FiShoppingCart></FiShoppingCart>
                 {cartProducts.length>0 ? <span className="absolute right-1 top-[-8px] rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                    {cartProducts.length}
                 </span>:''}
            </li>
            {!isLoggin?<>
                    <li className='px-4 cursor-pointer'>Login</li>
                    <li className='px-4 cursor-pointer border'>New User</li>
                </>:<>
                    <li className='px-5 cursor-pointer relative'>
                        <FaUserCircle  onClick={()=>setDropDownOpen(!isDropDownOpen)}></FaUserCircle>
                        
                        {/* drop-down manu For User icons */}
                        <div className={!isDropDownOpen?'hidden':'absolute top-[50px] left-0 w-[100px] h-[50px] bg-slate-100 flex flex-col justify-center items-center'}>
                            <ul>
                                <li> item 1</li>
                                <li> item 2</li>
                                <li> item 3</li>
                            </ul>
                        </div>
                        {/* end drop-down manu */}
                    </li>
                    <li className='px-4 cursor-pointer border font-thin'>Log out</li>                
                </>
            }
        </ul>

        {/* Hamburger */}
        <ul className='md:hidden flex justify-center items-center'>
            {/* Cart icon with red badge */}
            <li onClick={OpenCartHandle} className='px-4 cursor-pointer relative'>
                 <FiShoppingCart></FiShoppingCart>
                 {cartProducts.length>0 ? <span className="absolute right-1 top-[-8px] rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                    {cartProducts.length}
                 </span>:''}
            </li>
            <li onClick={() => setNav(!isNav)} className='px-4 cursor-pointer z-10'>
                {isNav ? <FaBars/> : <FaTimes/>}
            </li>
        </ul>

        {/* mobile manu */}
        <ul className={isNav?'hidden':'bg-gray-100 absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-gray-700'}>
            <li className='py-2 text-xl'>Home</li>
            <li className='py-2 text-xl'>Projects</li>
            <li className='py-2 text-xl'>Technology</li>
            <li className='py-2 text-xl'>Education</li>
            <li className='py-2 text-xl'>About</li>
        </ul>
        {/* You can add social icon absolute left center */}

    </div>
  )
}

export default Navbar;