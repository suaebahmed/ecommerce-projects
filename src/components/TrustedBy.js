import React from 'react';
import Facebook from '../images/facebook.svg';
import DigitalO from '../images/digitalO.svg';
import Amazon from '../images/amazon.svg';
import Tesla from '../images/tesla.svg';
import Adobe from '../images/adove.svg';

function TrustedBy() {
  return (
    <div className='mx-4 mr-6'>
        <div className="container px-6 mx-auto text-center">
            <div className="max-w-lg mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">Trusted By Gaint Company</h1>
                <p className="mt-6 text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique obcaecati illum mollitia.
                </p>
            </div>
        </div>

        <div className="max-w-screen-xl mx-auto mt-20">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                    <img src={Facebook}  className="h-12 text-gray-300" alt='face'/>
                </div>

                <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                    <img src={DigitalO}  className="h-10 text-gray-300 fill-current" alt='digital ocean'/>
                </div>

                <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                    <img src={Amazon} className="h-8 mt-2 text-gray-300 fill-current" alt='amazon'/>
                </div>

                <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
                    <img src={Tesla}  className="h-5 mt-1 text-gray-300 fill-current"  alt='tesla'/>
                </div>

                <div className="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
                    <img src={Adobe} className="h-8 text-gray-300 fill-current" alt='adobe'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TrustedBy;