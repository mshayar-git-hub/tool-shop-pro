import React from 'react'

const OrderHistory = () => {
    return (
        <>
            <div class="container py-5">

                <div class="card shadow-sm border-0 rounded-4">

                    <div class="card-header bg-white border-0 py-4">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h3 class="fw-bold mb-1">My Orders</h3>
                                <p class="text-muted mb-0">View all your previous orders.</p>
                            </div>

                            <span class="badge bg-dark px-3 py-2 rounded-pill">
                                Total Orders : 4
                            </span>
                        </div>
                    </div>

                    <div class="card-body">

                        {/* <!-- Order 1 --> */}
                        <div class="order-card56">

                            <div class="row align-items-center">

                                <div class="col-lg-3">
                                    <small class="text-muted">Order ID</small>
                                    <h6 class="fw-bold mb-0">#ORD-1001</h6>
                                </div>

                                <div class="col-lg-2">
                                    <small class="text-muted">Amount</small>
                                    <h6 class="fw-bold text-success">$120.00</h6>
                                </div>

                                <div class="col-lg-3">
                                    <small class="text-muted">Status</small><br />
                                    <span class="badge bg-success px-3 py-2 rounded-pill">
                                        Delivered
                                    </span>
                                </div>

                                <div class="col-lg-4 text-lg-end mt-3 mt-lg-0">
                                    <a href="#" class="btn btn-dark rounded-pill px-4">
                                        View Details
                                    </a>
                                </div>

                            </div>

                        </div>


                        {/* <!-- Order 2 --> */}
                        <div class="order-card56">

                            <div class="row align-items-center">

                                <div class="col-lg-3">
                                    <small class="text-muted">Order ID</small>
                                    <h6 class="fw-bold mb-0">#ORD-1002</h6>
                                </div>

                                <div class="col-lg-2">
                                    <small class="text-muted">Amount</small>
                                    <h6 class="fw-bold text-success">$85.50</h6>
                                </div>

                                <div class="col-lg-3">
                                    <small class="text-muted">Status</small><br />
                                    <span class="badge bg-warning text-dark px-3 py-2 rounded-pill">
                                        Processing
                                    </span>
                                </div>

                                <div class="col-lg-4 text-lg-end mt-3 mt-lg-0">
                                    <a href="#" class="btn btn-dark rounded-pill px-4">
                                        View Details
                                    </a>
                                </div>

                            </div>

                        </div>


                        {/* <!-- Order 3 --> */}
                        <div class="order-card56">

                            <div class="row align-items-center">

                                <div class="col-lg-3">
                                    <small class="text-muted">Order ID</small>
                                    <h6 class="fw-bold mb-0">#ORD-1003</h6>
                                </div>

                                <div class="col-lg-2">
                                    <small class="text-muted">Amount</small>
                                    <h6 class="fw-bold text-success">$245.00</h6>
                                </div>

                                <div class="col-lg-3">
                                    <small class="text-muted">Status</small><br />
                                    <span class="badge bg-danger px-3 py-2 rounded-pill">
                                        Cancelled
                                    </span>
                                </div>

                                <div class="col-lg-4 text-lg-end mt-3 mt-lg-0">
                                    <a href="#" class="btn btn-dark rounded-pill px-4">
                                        View Details
                                    </a>
                                </div>

                            </div>

                        </div>


                        {/* <!-- Order 4 --> */}
                        <div class="order-card56">

                            <div class="row align-items-center">

                                <div class="col-lg-3">
                                    <small class="text-muted">Order ID</small>
                                    <h6 class="fw-bold mb-0">#ORD-1004</h6>
                                </div>

                                <div class="col-lg-2">
                                    <small class="text-muted">Amount</small>
                                    <h6 class="fw-bold text-success">$62.00</h6>
                                </div>

                                <div class="col-lg-3">
                                    <small class="text-muted">Status</small><br />
                                    <span class="badge bg-primary px-3 py-2 rounded-pill">
                                        Shipped
                                    </span>
                                </div>

                                <div class="col-lg-4 text-lg-end mt-3 mt-lg-0">
                                    <a href="#" class="btn btn-dark rounded-pill px-4">
                                        View Details
                                    </a>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default OrderHistory
