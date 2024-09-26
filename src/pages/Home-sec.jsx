

import React from 'react';
import Headphone from '../Home-page-images/headphone-2.png';

function Home_sec() {
  return (
    <>
      <h1 className="text-3xl font-extrabold dark:text-white text-center">Feature’s</h1>
      <section className="bg-sky-300 flex flex-col sm:flex-row justify-start items-center flex-wrap mt-10">

 
        <div className="b1 w-full sm:w-1/2 flex justify-center mb-8 sm:mb-0">
          <img src={Headphone} alt="Headphones" className="max-w-full h-auto" />
        </div>

        <div className="b2 w-full  flex flex-col mt-8 sm:mt-0 sm:w-1/3 sm:self-center">

          <h1 className="text-2xl font-extrabold dark:text-white mb-4 text-center sm:text-left">
            Amazing Feature’s
          </h1>

          <div className="b2a mb-4 w-full text-center sm:text-left">
            <p className='text-lg font-semibold'>Touch Controls</p>
            <p className='text-gray-500 text-sm'>Some headphones have touch-sensitive surfaces for controlling playback.</p>
          </div>

          <div className="b2a mb-4 w-full text-center sm:text-left">
            <p className='text-lg font-semibold'>Noise Cancellation</p>
            <p className='text-gray-500 text-sm'>Enjoy your music without distractions from the outside world.</p>
          </div>

          <div className="b2a mb-4 w-full text-center sm:text-left">
            <p className='text-lg font-semibold'>Long Battery Life</p>
            <p className='text-gray-500 text-sm'>Enjoy hours of music without needing to recharge.</p>
          </div>

        </div>
      </section>
    </>
  );
}

export default Home_sec;
