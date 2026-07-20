import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { AuthContext } from '../context/AuthContext'
import api from './api/api'


const Checkout = (props) => {

    const { clearCart } = useContext(CartContext)
    const {address,getAddress} = useContext(AuthContext)
    const navigate = useNavigate();
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    const { total, cartItems } = useContext(CartContext);

    const [form, setForm] = useState({
        address_id:'1',
        payment_method: "COD",
        delivery_method:"",
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        setMessage("Loading")
        try {
            const res = await api.post('orders/create/', form);
            setLoading(false)
            setMessage("Order Placed Successfully")
            clearCart();
            setTimeout(() => {
                navigate("/");
            }, 3000); 
        } catch (error) {
            console.log(error.response.data);
            console.log(error)
            console.log(error.response)
            setLoading(false)
            setMessage(error.response?.data?.error || "something went wrong")
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <section className="py-5">
                    <div className="container">
                        <div className="text-center mb-5">
                            <h1 className="fw-bold">Checkout</h1>
                            <p className="text-muted">Complete your purchase securely.</p>
                        </div>
                    </div>
                </section>

                <section className="pb-5">
                    <div className="container">
                        <div className="row g-4">
                            {/* <!-- LEFT SIDE --> */}
                            <div className="col-lg-8">
                                {/* <!-- Contact Information -->
                                <div className="card shadow-sm border-0 rounded-4 mb-4">
                                    <div className="card-body p-4">
                                        <h4 className="fw-bold mb-4">Contact Information</h4>

                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label className="form-label">Full Name</label>
                                                <input type="text" name="name" placeholder='ABC..' value={form.name} onChange={handleChange} required className="form-control" />
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label">Phone Number</label>
                                                <input type="text" name="phone" placeholder='+965123.....' value={form.phone} onChange={handleChange} required className="form-control" />
                                            </div>

                                            <div className="col-12">
                                                <label className="form-label">Email Address</label>
                                                <input type="email" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                {/* <!-- Shipping Address --> */}

                                <div className="card shadow-sm border-0 rounded-4 mb-4">
                                    <div className="card-body p-4">
                                        <h4 className="fw-bold mb-4">Shipping Address</h4>
                                        <div className="col-12">
                                            <label className="form-label">Select Address</label>
                                            <select
                                                name="address_id"
                                                value={form.address_id}
                                                onChange={handleChange}
                                                className="form-select"
                                                required
                                            >
                                                <option value="">-- Select Address --</option>

                                                {address.map((addr) => (
                                                    <option key={addr.id} value={addr.id}>
                                                        {`${addr.country}, ${addr.area}, Block/Street ${addr.block_street}, Building/Floor ${addr.building_floor}`}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Delivery Method --> */}

                                <div className="card shadow-sm border-0 rounded-4 mb-4">
                                    <div className="card-body p-4">

                                        <h4 className="fw-bold mb-4">Delivery Method</h4>

                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="border rounded-4 p-4 h-100">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" readOnly name="delivery_method" value='standard' onChange={handleChange} checked={form.delivery_method === 'standard'}/>

                                                        <label className="form-check-label w-100">

                                                            <i className="bi bi-truck fs-2 text-primary"></i>
                                                            <h5 className="mt-3 mb-1">Standard Delivery</h5>
                                                            <p className="text-muted mb-2"> Delivery in 2–4 Days</p>
                                                            <strong>FREE</strong>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="border rounded-4 p-4 h-100">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" readOnly name="delivery_method" value='express' onChange={handleChange} checked={form.delivery_method === 'express'}/>
                                                        <label className="form-check-label w-100">
                                                            <i className="bi bi-lightning-charge fs-2 text-warning"></i>
                                                            <h5 className="mt-3 mb-1">Express Delivery</h5>
                                                            <p className="text-muted mb-2"> Next Day Delivery</p>
                                                            <strong>$10</strong>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Payment Method --> */}

                                <div className="card shadow-sm border-0 rounded-4 mb-4">
                                    <div className="card-body p-4">
                                        <h4 className="fw-bold mb-4"> Payment Method</h4>

                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="border rounded-4 p-4">
                                                    <div className="form-check">

                                                        <input className="form-check-input" type="radio" name="payment_method" value='online' onChange={handleChange} checked={form.payment_method === 'ONLINE'} />

                                                        <label className="form-check-label" value="Online">
                                                            <i className="bi bi-credit-card fs-2 text-primary"></i>
                                                            <h5 className="mt-3">Credit / Debit Card</h5>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="border rounded-4 p-4">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="payment_method" value='cod' onChange={handleChange} checked={form.payment_method === 'COD'} />
                                                        <label className="form-check-label" value='COD'>
                                                            <i className="bi bi-cash-stack fs-2 text-success"></i>
                                                            <h5 className="mt-3">Cash on Delivery</h5>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- RIGHT SIDE --> */}

                            <div className="col-lg-4">
                                <div className="card shadow-sm border-0 rounded-4 sticky-top" style={{top :'90px'}}>
                                    <div className="card-body p-4">
                                        <h4 className="fw-bold mb-4"> Order Summary</h4>

                                        {/* <!-- Product 1 --> */}
                                        {cartItems.map((item) => (

                                        <div className="d-flex align-items-center mb-3" key={item.id}>

                                            <img src={item.product_image} width="70" height="70" className="rounded-3 object-fit-cover"
                                                alt={item.product_name} />

                                            <div className="ms-3 flex-grow-1">
                                                <h6 className="mb-1">{item.product_name} </h6>
                                                <small className="text-muted">Qty : {item.quantity}</small>
                                            </div>
                                            <strong>{item.product_price}</strong>
                                        </div>
                                        ))}
                                        <hr />
                                        
                                        {/* <!-- Coupon --> */}

                                        <label className="form-label fw-semibold">
                                            Coupon Code
                                        </label>

                                        <div className="input-group mb-4">
                                            <input type="text" className="form-control" placeholder="Enter coupon" />
                                            <button className="btn btn-outline-primary">Apply</button>
                                        </div>

                                        {/* <!-- Price Details --> */}

                                        <div className="d-flex justify-content-between mb-2">
                                            <span>Subtotal</span>
                                            <span>{total}</span>
                                        </div>

                                        <div className="d-flex justify-content-between mb-2">
                                            <span>Shipping</span>
                                            <span>FREE</span>
                                        </div>

                                        <div className="d-flex justify-content-between mb-2 text-success">
                                            <span>Discount</span>
                                            <span>- $0</span>
                                        </div>

                                        <div className="d-flex justify-content-between mb-2">
                                            <span>Tax</span>
                                            <span>{props.tax}</span>
                                        </div>

                                        <hr />

                                        <div className="d-flex justify-content-between fw-bold fs-5">
                                            <span>Total</span>
                                            <span className="text-primary">
                                                {total + props.tax}
                                            </span>
                                        </div>

                                        {/* <!-- Secure Checkout --> */}
                                        <div className="bg-light rounded-4 p-3 my-4">
                                            <div className="d-flex align-items-center">
                                                <i className="bi bi-shield-lock-fill text-success fs-3"></i>
                                                <div className="ms-3">
                                                    <strong>
                                                        Secure Checkout
                                                    </strong>
                                                    <p className="text-muted small mb-0">
                                                        Your payment is encrypted and protected.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- Place Order --> */}

                                        <button className="btn btn-primary w-100 py-3 fw-semibold rounded-3" disabled={loading}>
                                            <i className="bi bi-bag-check me-2"></i>
                                            {loading ? "Placing Order..." : "Place Order"}
                                        </button>
                                        {message && (
                                            <div className="alert alert-success mt-3">
                                                {message}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </>
    )
}

export default Checkout
