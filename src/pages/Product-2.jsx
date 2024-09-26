
import React from 'react'
import Camera from '../product-img/Camera.png'
import Ear from '../product-img/erabuds.png'
import Lcd from '../product-img/led.png'
import Laptop from '../product-img/laptop-2.png'
import Speaker from '../product-img/headphone.png'
import Tablet from '../product-img/tablet-2.png'
import Usb from '../product-img/usb.png'
import Acc from '../product-img/accersories.png'

function Product2() {
    return (
        <>
            <div className="product-text text-center my-8">
                <h1 className="text-red-500 text-3xl font-bold">Top Rated Products</h1>
            </div>

            <div className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center px-4">
        
                {[
                    { img: Camera, name: 'GM-2345 Closed Back Camera', price: '$299' },
                    { img: Ear, name: 'GM-2345 clossed back wireless Headphones', price: '$99' },
                    { img: Lcd, name: 'LED 4k smart TV expo White/Gray/Black', price: '$499' },
                    { img: Laptop, name: 'Laptop 4k smart TV expo White/Gray/Black', price: '$899' },
                    { img: Speaker, name: 'GM-2345 clossed back wireless Headphones', price: '$199' },
                    { img: Tablet, name: 'Mobile 4k smart TV expo White/Gray/Black', price: '$399' },
                    { img: Usb, name: 'Accessories for mobile phone used USB', price: '$29' },
                    { img: Acc, name: 'Mobile phone accessories', price: '$49' },
                ].map((product, index) => (
                    <div key={index} className="product-card w-full max-w-xs bg-white p-4 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
                        <div className="rate-text flex justify-between mb-2">
                            <p className="text-gray-700">Top Rated</p>
                            <p className="text-red-500">&#9829;</p>
                        </div>
                        <img src={product.img} alt={product.name} className="w-full h-40 object-contain mb-4" />
                        <p className="text-xl font-semibold">{product.name}</p>
                        <p className="text-xl text-red-500 font-bold">{product.price}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Product2

