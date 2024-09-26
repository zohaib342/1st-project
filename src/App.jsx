
import './App.css'

import React from 'react'
// import './App.css'
// import Navvar from './Components/Navvar'
import {  BrowserRouter,Routes,Route}from "react-router-dom"
// import Product from './pages/Product'
// import Home from './pages/Home'
// import Contact from './pages/Contact'
// import ProductDetails from './pages/ProductDetails'
// import CartS from './pages/cart'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import Contact from './pages/contact'
import Login from './pages/Login'
import About from './pages/About'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          {/* <Route path='/' element={<Home/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cart' element={<CartS/>}/>
        */}
    <Route path='/' element={<Home/>}/>
    <Route path='product' element={<Product/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='login'element={<Login/>}/>
    <Route path='about'element={<About/>}/>




        



        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App