
import React from 'react';
import LoginPic from '../assets/login.png'; 

function Login() {
  return (
    <section className="flex justify-center items-center min-h-screen bg-white">
      <div className="flex flex-col md:flex-row w-full sm:w-4/5 lg:w-3/5 bg-white rounded-lg shadow-lg">

        <div className="flex flex-col p-10 sm:p-12 w-full md:w-3/4 lg:w-2/3 gap-8">
       
          <div className="flex justify-center gap-10 w-full mb-5">
            <h1 className="text-2xl font-bold text-red-500 cursor-pointer hover:text-red-700">Login</h1>
            <h1 className="text-2xl font-bold text-gray-400 cursor-pointer hover:text-gray-600">Signup</h1>
          </div>

    
          <form className="w-full">
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 bg-gray-50"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
              <input
                type="password"
                id="password"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 bg-gray-50"
                required
              />
            </div>

             
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                />
                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">Remember me</label>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-6 py-3 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Submit
              </button>
            </div>
          </form>
        </div>

    
        <div className="flex justify-center items-center w-full p-10 md:p-0">
          <img
            src={LoginPic}
            alt="Login"
            style={{ width: '500px', height: 'auto' }} 
            className="object-contain" 
          />
        </div>
      </div>
    </section>
  );
}

export default Login;
