import React from 'react'
import Navbar from '../components/Navbar'
import Cart from '../components/Cart'
import CartSummary from '../components/CartSummary'
import Footer from '../components/Footer'

const CartPage = () => {
    return (
        <>
            <Navbar />
            <br/>
            <br/>
            <section className="cart-page py-5">
                <div className="container">
                    <div className="row g-4">

                        <div className="col-lg-8">
                            <Cart />
                        </div>

                        <div className="col-lg-4">
                            <CartSummary tax={100} />
                        </div>

                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default CartPage
