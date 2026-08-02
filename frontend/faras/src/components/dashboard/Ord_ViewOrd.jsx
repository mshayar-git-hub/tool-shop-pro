import React, { useState, useContext, useEffect } from 'react'
import { DashContext } from '../../context/DashContext'
import { useParams, Link } from 'react-router-dom';


const Ord_ViewOrd = () => {

    const { getSingleOrder, singleOrder } = useContext(DashContext);
    const { id } = useParams();

    useEffect(() => {
        getSingleOrder(id);
    }, [id])


    return (
        <>
        <div className="col-lg-9 col-xl-10">
            {singleOrder && (
                <div className="container py-4 order_details_12">

                    {/* <!-- Page Title --> */}
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <h2 className="fw-bold mb-1">Order Details</h2>
                            <p className="text-muted mb-0">View complete order information.</p>
                        </div>

                        <Link className="btn btn-outline-secondary" to='/dashboard/orders'>
                            <i className="bi bi-arrow-left"></i> Back
                        </Link>
                    </div>


                    <div className="row">

                        {/* <!-- Order Information --> */}
                        <div className="col-lg-6 mb-4">
                            <div className="card shadow-sm border-0 order_card_12">
                                <div className="card-header bg-primary text-white">
                                    <h5 className="mb-0">
                                        <i className="bi bi-receipt"></i>
                                        Order Information
                                    </h5>
                                </div>

                                <div className="card-body">

                                    <div className="row mb-3">
                                        <div className="col-5 fw-semibold">Order ID</div>
                                        <div className="col-7">#{singleOrder.id} </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-5 fw-semibold">Username</div>
                                        <div className="col-7">{singleOrder.username}</div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-5 fw-semibold">Status</div>
                                        <div className="col-7">
                                            <span className="badge bg-warning text-dark">
                                                {singleOrder.status}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-5 fw-semibold">Payment Method</div>
                                        <div className="col-7">{singleOrder.payment_method} </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-5 fw-semibold">Delivery</div>
                                        <div className="col-7">{singleOrder.delivery_method} </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-5 fw-semibold">Total Amount</div>
                                        <div className="col-7 fw-bold text-success">
                                            {singleOrder.total_amount} KD
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-5 fw-semibold">Created At</div>
                                        <div className="col-7">
                                            {singleOrder.created_at}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-5 fw-semibold">Updated At</div>
                                        <div className="col-7">
                                            {singleOrder.updated_at}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                        {/* <!-- Customer Information --> */}
                        <div className="col-lg-6 mb-4">

                            <div className="card shadow-sm border-0 order_card_12">

                                <div className="card-header bg-success text-white">
                                    <h5 className="mb-0">
                                        <i className="bi bi-person-circle"></i>
                                        Customer Information
                                    </h5>
                                </div>

                                <div className="card-body">

                                    <div className="row mb-3">
                                        <div className="col-5 fw-semibold">User Profile ID</div>
                                        <div className="col-7">{singleOrder.user_profile} </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-5 fw-semibold">Address ID</div>
                                        <div className="col-7">{singleOrder.address} </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-5 fw-semibold">Address</div>
                                        <div className="col-7">building/floor: {singleOrder.building_floor}, block/street: {singleOrder.block_street}, area:{singleOrder.area}, country: {singleOrder.country} </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-5 fw-semibold">Username</div>
                                        <div className="col-7">{singleOrder.username} </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-5 fw-semibold">Items Ordered</div>
                                        <div className="col-7">
                                            {singleOrder?.items?.length} Products
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>



                    {/* <!-- Ordered Products --> */}

                    <div className="card shadow-sm border-0 mb-4 order_card_12">

                        <div className="card-header bg-dark text-white">
                            <h5 className="mb-0">
                                <i className="bi bi-cart3"></i>
                                Ordered Products
                            </h5>
                        </div>

                        <div className="card-body p-0">

                            <div className="table-responsive">

                                <table className="table table-bordered align-middle mb-0">

                                    <thead className="table-light">

                                        <tr>
                                            <th>Image</th>
                                            <th>Product</th>
                                            <th>Category</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <th>Total</th>
                                            <th>Stock</th>
                                        </tr>

                                    </thead>

                                    <tbody>
                                        {singleOrder?.items?.map((item) => (

                                            <tr>

                                                <td width="90">
                                                    <img src={`http://127.0.0.1:8000${item.product.image}`}
                                                        alt={item.product?.product_name}
                                                        className="img-fluid rounded order_img_12" />
                                                </td>

                                                <td>
                                                    <strong>{item.product?.product_name}</strong><br />
                                                    <small className="text-muted">
                                                        {item.product?.description}
                                                    </small>
                                                </td>

                                                <td>
                                                    {item.product?.category?.cat_name}
                                                </td>

                                                <td>
                                                    {item.product?.price} kd
                                                </td>

                                                <td>
                                                    {item.quantity}
                                                </td>

                                                <td className="fw-bold">
                                                    {item.price * item.quantity} KD
                                                </td>

                                                <td>
                                                    <span className="badge bg-success">
                                                        {item.product?.in_stock ? (<p>in Stock</p>) : (<p>Out of Stock</p>)}
                                                    </span>
                                                </td>

                                            </tr>

                                        ))}
                                    </tbody>


                                </table>

                            </div>

                        </div>

                    </div>



                    {/* <!-- Order Summary --> */}

                    <div className="row">

                        <div className="col-lg-5 ms-auto">

                            <div className="card shadow-sm border-0 order_card_12">

                                <div className="card-header bg-secondary text-white">
                                    <h5 className="mb-0">
                                        Order Summary
                                    </h5>
                                </div>

                                <div className="card-body">

                                    <div className="d-flex justify-content-between mb-3">
                                        <span>Products</span>
                                        <strong>{singleOrder?.items?.length} </strong>
                                    </div>

                                    <div className="d-flex justify-content-between mb-3">
                                        <span>Subtotal</span>
                                        <strong>{singleOrder.total_amount} KD</strong>
                                    </div>

                                    <div className="d-flex justify-content-between mb-3">
                                        <span>Delivery</span>
                                        <strong>{singleOrder.delivery_method} </strong>
                                    </div>

                                    <hr />

                                    <div className="d-flex justify-content-between">

                                        <h5>Total</h5>

                                        <h5 className="text-success fw-bold">
                                            {singleOrder.total_amount} KD
                                        </h5>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            )}
            </div>
        </>
    )
}

export default Ord_ViewOrd
