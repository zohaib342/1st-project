

import React from 'react';
import Iphone from '../product-img/iphone.png';
import Laptop from '../product-img/laptop.png';
import Speaker from '../product-img/speaker.jpeg';
import Tablet from '../product-img/tablet.png';
import Head from '../product-img/headphone.png';
import Product2 from './Product-2';
import Product3 from '../pages/product-3'
import Product4 from '../pages/product-4'
import Product5 from '../pages/product-5'




function Product() {
  return (
    <div className="section p-6  ">
      <div className=" product-text text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-300 mb-2">Category</h1>
        <h2 className="text-2xl font-bold text-red-500">Can we help you pick a headphone?</h2>
      </div>

      <div className="product-a flex justify-around flex-wrap cards">
        <div className="product-a1 w-full sm:w-1/3 md:w-1/5 text-center bg-white p-4 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 mb-4">
          <img src={Iphone} alt="iPhone" className="w-3/4 h-40 mx-auto object-contain" />
          <p className="mt-2 font-semibold">iPhone</p>
        </div>

        <div className="product-a1 w-full sm:w-1/3 md:w-1/5 text-center bg-white p-4 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 mb-4">
          <img src={Laptop} alt="Laptop" className="w-3/4 h-40 mx-auto object-contain" />
          <p className="mt-2 font-semibold">Laptop</p>
        </div>

        <div className="product-a1 w-full sm:w-1/3 md:w-1/5 text-center bg-white p-4 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 mb-4">
          <img src={Speaker} alt="Speaker" className="w-3/4 h-40 mx-auto object-contain" />
          <p className="mt-2 font-semibold">Speaker</p>
        </div>

        <div className="product-a1 w-full sm:w-1/3 md:w-1/5 text-center bg-white p-4 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 mb-4">
          <img src={Tablet} alt="Tablet" className="w-3/4 h-40 mx-auto object-contain" />
          <p className="mt-2 font-semibold">Tablet</p>
        </div>

        <div className="product-a1 w-full sm:w-1/3 md:w-1/5 text-center bg-white p-4 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 mb-4">
          <img src={Head} alt="Headphones" className="w-3/4 h-40 mx-auto object-contain" />
          <p className="mt-2 font-semibold">Headphones</p>
        </div>
      </div>
<Product4/>

      <Product2/>
      <Product3/>
      <Product5/>

    </div>
  );
}

export default Product;
