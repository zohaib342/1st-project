
import React from 'react'
import Music from '../assets/music.jpg'

function Home3() {
    return (
        <div className="home3 p-10  flex flex-col md:flex-row items-center justify-between">

            <div className="home3a w-full md:w-2/5 mb-6 md:mb-0">
                <h1 className='text-2xl font-bold text-red-500 mb-3'>Comment level</h1>
                <h1 className='text-4xl md:text-5xl font-bold mt-2 mb-5'>
                    A new style in your Ear
                </h1>

                <div className='card grid grid-cols-1 sm:grid-cols-2 gap-4  mt-5'>
                    <div className="home3-cards bg-blue-300 text-center p-5 rounded-lg">
                        <h1 className='text-4xl font-bold text-red-500'>4M</h1>
                        <h1 className='text-3xl font-semibold'>Users</h1>
                    </div>

                    <div className="home3-cards bg-blue-300 text-center p-5 rounded-lg">
                        <h1 className='text-4xl font-bold text-red-500'>153k</h1>
                        <h1 className='text-3xl font-semibold'>Purchaser</h1>
                    </div>

                    <div className="home3-cards bg-blue-300 text-center p-5 rounded-lg">
                        <h1 className='text-4xl font-bold text-red-500'>53k</h1>
                        <h1 className='text-3xl font-semibold'>Gallery</h1>
                    </div>

                    <div className="home3-cards bg-blue-300 text-center p-5 rounded-lg">
                        <h1 className='text-4xl font-bold text-red-500'>2M+</h1>
                        <h1 className='text-3xl font-semibold'> Feedback
                        </h1>
                    </div>
                </div>
            </div>

    
            <div className="home3b w-full md:w-3/5 flex justify-center">
                <img src={Music} alt="Music" className="max-w-full h-auto" />
            </div>
        </div>
    )
}

export default Home3
