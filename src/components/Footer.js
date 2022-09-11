import React from 'react';
import '../styles/footer.css';
import paymentImg from '../images/payment.9058ba4d.jpg';
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';

function Footer() {
  return (
    <div className='footer text-white w-full h-full px-4 pt-8 pb-4'>
        <div  className='grid sm:grid-cols-4 grid-flow-col-1'>
            <div className='space-y-2 pr-4'>
                <h1 className='text-3xl font-semibold'>Shoes Commerce</h1>
                <p>A Your shopes which aims to provide you best services for aroud the globe. You all can find and serve better products with us.</p>
                <p>12/2, Dhanmondi 3-A, Dhaka-1209</p>
                <p>info@shopes.com</p>
                <p>Hotline: 19717897737</p>
            </div>
            <div className='space-y-2'>
                <h1 className='text-3xl font-semibold'>About company</h1>
                <div className='flex sm:flex-row flex-col justify-between'>
                    <ul>
                        <li className='pb-4'>Home</li>
                        <li className='pb-4'>About</li>
                        <li className='pb-4'>Contact</li>
                    </ul>
                    <ul className='pr-16'>
                        <li className='pb-4'>Blogs</li>
                        <li className='pb-4'>Service</li>
                        <li className='pb-4'>FAQs</li>
                    </ul>
                </div>
            </div>
            <div className='space-y-2'>
                <h1 className='text-3xl font-semibold'>Our services</h1>
                <div className='flex sm:flex-row flex-col justify-between'>
                    <ul>
                        <li className='pb-4'>Registration</li>
                        <li className='pb-4'>Order a product</li>
                        <li className='pb-4'>Buy a product</li>
                    </ul>
                    <ul className='pr-16'>
                        <li className='pb-4'>Login</li>
                        <li className='pb-4'>Review</li>
                        <li className='pb-4'>Payment</li>
                    </ul>
                </div>
            </div>
            <div className='space-y-2'>
                <h1 className='text-3xl font-semibold'>Payment</h1>
                <img className='' src={paymentImg} alt="payment"></img>
            </div>
        </div>
        {/* bottom  */}
        <div>
            <h1 className='text-3xl font-semibold text-center'>Follow Our Social Network</h1>
            <div className='flex justify-center space-x-3'>
                <BsFacebook className='text-4xl' />
                <BsTwitter className='text-4xl' />
                <BsLinkedin className='text-4xl'  />
            </div>
            <p className='text-lg text-center'>Copyright <span>&#9400;</span> Shopes - All Rights Reversed</p>
        </div>

    </div>
  )
}

export default Footer;