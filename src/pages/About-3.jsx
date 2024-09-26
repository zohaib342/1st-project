
import React from 'react';
import Girl from '../assets/girl.jpg'
import Img from '../assets/download.png'
import Person from '../assets/person.jpeg'


function About3() {
  return (
    <><div className='bg-blue-300 pb-11'>
  
      <div className="text text-center w-full md:w-2/4 lg:w-1/3 mx-auto mb-8 pt-6  ">
        <p className='text-red-500 text-lg md:text-xl'>Why Choose Us</p>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mt-2'>
          Benefits of Online Buying Service with Us
        </h1>
      </div>

      <div className="about-c grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  lg:px-12 ">
    
        <div className="about-ca bg-blue-300 p-6 rounded-lg shadow-md ">
          <p className='font-bold text-lg mb-2'>Choose Teaching</p>
          <p className='text-sm'>
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

        <div className="about-ca bg-blue-300 p-6 rounded-lg shadow-md ">
          <p className='font-bold text-lg mb-2'>Fast Delivery</p>
          <p className='text-sm'>
            Get your products delivered quickly and reliably with our professional shipping services.
          </p>
        </div>

    
        <div className="about-ca bg-blue-300 p-6 rounded-lg shadow-md ">
          <p className='font-bold text-lg mb-2'>Affordable Pricing</p>
          <p className='text-sm'>
            Our prices are competitive and tailored to suit the needs of every customer.
          </p>
        </div>

 
        <div className="about-ca bg-blue-300 p-6 rounded-lg shadow-md ">
          <p className='font-bold text-lg mb-2'>24/7 Support</p>
          <p className='text-sm'>
            Our customer support team is available around the clock to assist you with any inquiries.
          </p>
        </div>
      </div>


    <div className="about-d flex  flex-col  md:flex-row  md:gap-24 mt-10 md:mt-20  md:ml-16 ">
      <div className="about-da flex  ">
        <img src={Girl} alt="Customer Service" className="w-full md:w-3/4 lg:w-1/2 object-cover" />
      </div>


      <div className="about-db w-full md:w-1/2 lg:w-2/6 ">
        <p className='text-red-500'>Customer your product with us</p>
        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold mt-4'>
          Personalized Professional Online Buying on Your Schedule
        </h1>
        <p className='mt-4'>
          Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <button className='btn bg-red-500 text-white pl-4 pr-4 pt-2 pb-2 mt-6'>
          Get Started
        </button>
      </div>
    </div>

    </div>

<div className="about-d flex flex-col md:flex-row gap-16 md:gap-24 mt-10 md:mt-20 mx-4 md:ml-16 justify-between p-0">
      
     
      <div className="about-da order-1 md:order-2 flex  justify-center md:w-1/2">
        <img src={Img} alt="Customer Service" className="w-full md:w-3/4 lg:w-1/2 object-cover" />
      </div>

      <div className="about-db order-2 md:order-1 w-full md:w-1/2 lg:w-2/6 mx-auto md:mx-0">
        <p className='text-red-500'>Customer your product with us</p>
        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold mt-4'>
          Personalized Professional Online Buying on Your Schedule
        </h1>
        <p className='mt-4'>
          Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <button className='btn bg-red-500 text-white pl-4 pr-4 pt-2 pb-2 mt-6'>
          Get Started
        </button>
      </div>
    </div>

<div className="about-e text-center w-full md:w-2/6 m-auto mt-8 px-4">
      <p className='text-red-500 font-bold'>Our Testimonial</p>
      <h1 className='text-xl md:text-2xl font-bold mt-2'>What our users say about us</h1>
      <img src={Person} alt="Testimonial Author" className='w-16 h-16 m-auto mt-2' />
      
      <p className='font-semibold mt-2'>Xi Jinping</p>
      <p className='text-sm'>President of China</p>
      <p className='text-sm mt-2'>
        Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </p>
    </div>

    </>
  );
}

export default About3;
