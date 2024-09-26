

import React from 'react'
import Double from '../product-img/double.png'
import Iphone1 from '../product-img/iphone-1.png'
import Iphone2 from '../product-img/iphone-2.png'
import Iphone3 from '../product-img/iphone-3.png'


function Product3() {
    return (
        <>
            <div className="text text-left ml-2 my-8">
                <h1 className="text-2xl md:text-3xl font-bold">Shop product by</h1>
            </div>

            <div className="product-c bg-sky-300 w-11/12 md:w-4/5 m-auto rounded-lg flex flex-col md:flex-row items-center justify-between  ">
           
                <div className="img flex justify-center w-full md:w-1/2 md:mb-0">
                    <img src={Double} alt="Product Image" width={450} className=" h-auto" />
                </div>

                <div className="product-ca w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-2xl md:text-4xl font-bold mb-4">Define Yourself, Be Different</h1>
                    <p className="text-base md:text-lg mb-6">
                        These have large ear cups that encompass the ears, providing good sound isolation and often better sound quality.
                    </p>
                    <button className="btn bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-all duration-300">
                        Shop Now
                    </button>
                </div>
            </div>



            <div className="text text-left ml-2 my-8">
                <h1 className="text-2xl md:text-3xl font-bold">New Arrivel</h1>
            </div>

<div className="product-d flex gap-6 my-8 overflow-x-auto no-scrollbar justify-center flex-wrap">
           
                <div className="productda min-w-[250px] sm:w-1/4 lg:w-1/5 bg-white p-4 rounded-lg shadow-lg">
                    <img src={Iphone1} alt="Product" className="m-auto h-40 object-contain mb-4" />
                    <h1 className="text-lg font-bold mb-2">James Smith</h1>
                    <p className="mb-4">Headphones come with a variety of features.</p>
                    <div className="flex items-center justify-between">
                        <h1 className="text-lg font-bold text-red-500">$49</h1>
                        <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Add to Cart
                            </span>
                        </button>
                    </div>
                </div>

          
                <div className="productda min-w-[250px] sm:w-1/4 lg:w-1/5 bg-white p-4 rounded-lg shadow-lg">
                    <img src={Iphone2} alt="Product" className="m-auto h-40 object-contain mb-4" />
                    <h1 className="text-lg font-bold mb-2">James Smith</h1>
                    <p className="mb-4">Headphones come with a variety of features.</p>
                    <div className="flex items-center justify-between">
                        <h1 className="text-lg font-bold text-red-500">$49</h1>
                        <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Add to Cart
                            </span>
                        </button>
                    </div>
                </div>

 
                <div className="productda min-w-[250px] sm:w-1/4 lg:w-1/5 bg-white p-4 rounded-lg shadow-lg">
                    <img src={Iphone3} alt="Product" className="m-auto h-40 object-contain mb-4" />
                    <h1 className="text-lg font-bold mb-2">James Smith</h1>
                    <p className="mb-4">Headphones come with a variety of features.</p>
                    <div className="flex items-center justify-between">
                        <h1 className="text-lg font-bold text-red-500">$49</h1>
                        <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Add to Cart
                            </span>
                        </button>
                    </div>
                </div>

                <div className="productda min-w-[250px] sm:w-1/4 lg:w-1/5 bg-white p-4 rounded-lg shadow-lg">
                    <img src={Iphone1} alt="Product" className="m-auto h-40 object-contain mb-4" />
                    <h1 className="text-lg font-bold mb-2">James Smith</h1>
                    <p className="mb-4">Headphones come with a variety of features.</p>
                    <div className="flex items-center justify-between">
                        <h1 className="text-lg font-bold text-red-500">$49</h1>
                        <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Add to Cart
                            </span>
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Product3
