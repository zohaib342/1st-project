
import React from 'react';
import Camera from '../product-img/camera-2.png';
import Tablet from '../product-img/tablet-2.png';

function Product4() {
  return (
    <>
      <div className="flex flex-wrap space-y-4 md:space-y-0 md:space-x-4 w-full justify-center mt-16 mb-10">

        <div className="flex w-full md:w-2/5 h-96 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="w-1/2">
            <img src={Camera} alt="Card Image" className="w-full h-full object-cover" />
          </div>
          <div className="w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2">25% off</h2>
            <p className="text-gray-700 text-xl font-semibold">Catch hottest deals in the Cameras category</p>
            <button className="bg-red-500 text-white py-1.5 px-3 rounded mt-4">
              Shop now
            </button>
          </div>
        </div>

        <div className="flex w-full md:w-2/5 h-96 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="w-1/2">
            <img src={Tablet} alt="Card Image" className="w-full h-full object-cover" />
          </div>
          <div className="w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2">25% off</h2>
            <p className="text-gray-700 text-xl font-bold">Tablets, smartphones, and more.</p>
            <button className="bg-white border-2 border-red-500 text-red-500 py-1.5 px-3 rounded mt-4">
              $799
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product4;



