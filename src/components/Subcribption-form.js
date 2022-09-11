import React from 'react'

function SubcribptionForm() {
  return (
    <div className='w-full py-20'>
        <div className='w-[400px] sm:w-[600px] m-auto py-[50px] bg-[#fcfaf7] rounded-md flex flex-col items-center space-y-4'>
            <h1 className='text-4xl text-gray-800 font-semibold'>LET'S STAY IN TOUCH</h1>
            <p className='text-lg text-gray-500'>Get updates on sales, specials and more</p>
            <div>
              <input type='email' className='pl-4 pr-8 py-2 border rounded-full' placeholder='Enter your email'></input>
              <button className='px-4 py-2 ml-6 text-white font-semibold bg-blue-500 rounded-full'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default SubcribptionForm;