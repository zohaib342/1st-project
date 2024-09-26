
import React from 'react';
import Pic from '../assets/login.png';
import About2 from './About-2';
import About3 from './About-3';
import Footer  from './Footer'

function About() {
    return (
        <>
            <section className='about '>
                <div className="about-a flex flex-col md:flex-row justify-center items-center gap-6 lg:px-6">
                    
                 
                    <div className="about-b order-1 md:order-2 w-full md:w-2/3 lg:w-1/2">
                        <img src={Pic} alt="Mobile Accessories Store" className='w-full h-auto object-cover' />
                    </div>

                
                    <div className="about-a1 order-2 md:order-1 w-full md:w-1/2 lg:w-1/3 mx-auto text-center md:text-left">
                        <h1 className='text-3xl md:text-4xl font-bold'>
                            Open a Mobile Accessories Store Online
                        </h1>
                        <p className='text-xl md:text-2xl mt-4'>
                            Best Tips to Start an Online Business
                        </p>
                        <button className='btn bg-red-500 text-white pl-4 pr-4 pt-2 pb-2 mt-4'>
                            Shop Now
                        </button>
                    </div>
                </div>
                <About2/>
                <About3/>
                <Footer/>

            </section>

        </>
    );
}

export default About;
