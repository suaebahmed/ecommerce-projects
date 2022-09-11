import React, { useState } from 'react';
import FaqImg from '../images/preview-question.jpg';
import '../styles/FAQs.css';

function FAQs() {
  return (
    <div className='mx-4'>
        <h1 className='mb-10 text-4xl text-center text-gray-600 font-semibold'>Frequently Asked Questions ?</h1>
        <div className='grid sm:grid-cols-2 grid-cols-1'>
            <div className='pl-40 flex flex-col'>
                <Question ques="Why choose us?">
                Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident laborum.
                </Question>
                <Question ques="How we works?">
                Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident laborum.
                </Question>
                <Question ques="What do you get from us?">
                Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident laborum.
                </Question>
            </div>
            <div>
                <img className='w-full' src={FaqImg} alt='nice faq'></img>
            </div>
        </div>
    </div>
  )
}

function Question(props){
    const [isShow,setIsShow] = useState(false);
    const handleClick = () => setIsShow(!isShow);

    return(
        <div className=''>
            <div onClick={handleClick} className='px-3 py-2 cursor-pointer border-b'>{props.ques}</div>
            <div className={isShow?'block h-[250px] transition-[height] duration-1000':'hidden h-[0px] transition-[height] duration-1000'}>
                <div className='text-lg px-3 py-1 border'>{props.children}</div>
            </div>
        </div>
    )
}


export default FAQs;