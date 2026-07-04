import React from 'react'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'
import Sidebar from '../components/Sidebar'
import WhyFaras from '../components/WhyFaras'
import Footer from '../components/Footer'

const ProductPage = () => {
  return (
    <>
        <Navbar/>
        <div className="container mt-4">
            <div className="row">
                <Sidebar />
                <ProductList />

            </div>
        </div>
        <WhyFaras/>
        <Footer/>
    </>
  );
}

export default ProductPage
