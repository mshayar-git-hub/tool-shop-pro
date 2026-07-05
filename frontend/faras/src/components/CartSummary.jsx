import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'


const CartSummary = (props) => {

    const { total, cartItems, RemoveFromCart, addToCart , UpdateCart } = useContext(CartContext);

    return (
        <>
            <section>
                {/* <!-- Summary --> */}
                    <div className="cart-summary">
                        <h4>Order Summary</h4>
                        <hr />

                        <div className="free-shipping-box">
                            <p className="mb-2">🎉 Spend <strong>₹800</strong> more to get<span className="text-success">FREE Delivery</span></p>

                            <div className="progress">
                                <div className="progress-bar" style={{ width: "72 %" }}>
                                </div>
                            </div>
                        </div>
                        <hr />

                        <div className="d-flex justify-content-between">
                            <span>Subtotal</span>
                            <span>{total} </span>
                        </div>

                        <div className="d-flex justify-content-between">
                            <span>Shipping</span>
                            <span className="text-success">FREE </span>
                        </div>

                        <div className="d-flex justify-content-between">
                            <span>Tax</span>
                            <span>{props.tax}</span>
                        </div>
                        <hr />

                        <div className="d-flex justify-content-between fw-bold">
                            <span>Total</span>
                            <span>₹{total + props.tax} </span>
                        </div>

                        <div className="saving-box mt-4">
                            <i className="bi bi-piggy-bank-fill"></i>
                            You saved
                            <strong className="text-success">₹1,250</strong>
                            on this order.
                        </div>

                        <button className="btn btn-warning w-100 mt-4">
                            Proceed To Checkout
                        </button>

                        <div className="secure-checkout mt-4">
                            <h6>Why Shop With Us?</h6>

                            <ul>
                                <li>
                                    <i className="bi bi-check-circle-fill"></i>
                                    Secure Payments
                                </li>

                                <li>
                                    <i className="bi bi-check-circle-fill"></i>
                                    Easy Returns
                                </li>

                                <li>
                                    <i className="bi bi-check-circle-fill"></i>
                                    Fast Delivery
                                </li>

                                <li>
                                    <i className="bi bi-check-circle-fill"></i>
                                    Genuine Products
                                </li>
                            </ul>
                        </div>

                        <Link to='/' className="btn btn-outline-dark w-100 mt-3">Continue Shopping</Link>

                        <div className="payment-icons text-center mt-4">
                            <img src="images/payment.png" className="img-fluid" />
                        </div>
                    </div>
            </section >
        </>
    )
}

export default CartSummary
