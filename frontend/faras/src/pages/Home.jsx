import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import CatCard from '../components/CatCard'
import TrendPro from '../components/TrendPro'
import Advertise from '../components/Advertise'
import WhyFaras from '../components/WhyFaras'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <CatCard/>
      <TrendPro/>
      <Advertise/>
      <WhyFaras/>
      <Footer/>
    </>
  )
}

export default Home
