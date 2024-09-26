

import React from 'react';
import Headphones from '../Home-page-images/headphones.png';
import Home_sec from './Home-sec';
import Footer from './Footer';
import Home3 from './Home-3';

function Home() {
  return (
    <main>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-5  md:py-8 gap-10">
          
          {/* Image Section */}
          <div className="flex justify-center md:justify-start w-full md:w-1/2 bg-sky-200 rounded-r-full p-5">
            <img
              className="object-cover object-center rounded w-full max-w-xs md:max-w-lg lg:max-w-full"
              alt="hero"
              src={Headphones}
              style={{ maxHeight: '500px', height: 'auto' }} 
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 lg:pl-24 md:pl-16">
            <p className="text-red-600">In the spotlight</p>
            <h1 className="title-font sm:text-2xl md:text-3xl text-3xl mb-4 font-bold text-gray-900">
              Your sound best for your life
            </h1>
            <div className="flex w-full justify-center md:justify-start">
              <p className="text-sm md:text-base w-full md:w-2/4">
                These have large ear cups that encompass the ears, providing good sound isolation
                and often better sound quality.
              </p>
            </div>

            {/* Button */}
            <div className="flex mt-4">
              <button className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Shop now
              </button>
            </div>
          </div>
        </div>
      </section>

      <Home_sec />
      <Home3/>
      <Footer />
    </main>
  );
}

export default Home;
