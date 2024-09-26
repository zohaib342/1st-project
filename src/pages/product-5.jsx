
import React from 'react';
import Ear from '../product-img/earbud-2.png';
import Watch from '../product-img/watch.png';


function Product5() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-center mt-16">
      
        <div className="w-full md:w-[35%] lg:w-[30%] h-[300px] flex border rounded-lg shadow-lg overflow-hidden bg-sky-300">
          <div className="w-1/2">
            <img src={Ear} alt="Card Image" className="h-full object-cover" />
          </div>
          <div className="w-1/2 p-4 flex flex-col justify-center">
            <h2 className="text-lg sm:text-xl font-bold mb-2">Awesome Airpods</h2>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              These have large ear cups that encompass the ears, providing good sound.
            </p>
            <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Shop now
            </button>
          </div>
        </div>

      
        <div className="w-full md:w-[65%] lg:w-[40%] h-[300px] flex border rounded-lg shadow-lg overflow-hidden bg-sky-300">
          <div className="w-1/2">
            <img src={Watch} alt="Card Image" className="h-full object-cover" />
          </div>
          <div className=" p-4 flex flex-col justify-center">
            <h2 className="text-4xl sm:text-4xl font-bold mb-2">Smart
            Watches</h2>
          
            <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product5;
