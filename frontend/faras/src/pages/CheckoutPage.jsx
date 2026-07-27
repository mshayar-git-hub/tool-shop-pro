import React from 'react'
import Navbar from '../components/Navbar'
import Checkout from '../components/Checkout'
import Footer from '../components/Footer'

const CheckoutPage = () => {
  return (
    <>
      <Navbar/>
      <br/>
      <br/>
      <Checkout tax={0}/>
      <Footer/>
    </>
  )
}

export default CheckoutPage
