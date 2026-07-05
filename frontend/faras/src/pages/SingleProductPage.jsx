import React from 'react'
import SingleProduct from '../components/SingleProduct'
import Navbar from '../components/Navbar'
import WhyFaras from '../components/WhyFaras'
import Footer from '../components/Footer'

const SingleProductPage = () => {
  return (
    <>
        <Navbar/>
        <br/>
        <br/>
        <SingleProduct/>
        <WhyFaras/>
        <Footer/>
    </>
  )
}

export default SingleProductPage
