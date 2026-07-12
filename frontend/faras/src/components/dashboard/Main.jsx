import React from 'react'

const Main = () => {
    return (
        <>
            <div className="col-lg-9 col-xl-10">
                <div className="content-box">
                    <h2 className="mb-4">Dashboard</h2>
                    <div className="row g-4">
                        <div className="col-md-6 col-xl-3">
                            <div className="stat-card">

                                <div className="stat-icon bg-primary">
                                    <i className="bi bi-box-seam"></i>
                                </div>

                                <div>
                                    <h5>Products</h5>
                                    <h3>120</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-3">
                            <div className="stat-card">

                                <div className="stat-icon bg-success">
                                    <i className="bi bi-cart-check"></i>
                                </div>
                                <div>
                                    <h5>Orders</h5>
                                    <h3>58</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-3">
                            <div className="stat-card">
                                <div className="stat-icon bg-warning">
                                    <i className="bi bi-currency-dollar"></i>
                                </div>
                                <div>
                                    <h5>Revenue</h5>
                                    <h3>$9,540</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-3">
                            <div className="stat-card">
                                <div className="stat-icon bg-danger">
                                    <i className="bi bi-people"></i>
                                </div>

                                <div>
                                    <h5>Users</h5>
                                    <h3>340</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="table-section mt-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="mb-0">Recent Orders</h4>
                            <button className="btn btn-primary btn-sm">
                                View All
                            </button>
                        </div>

                        <div className="table-responsive">
                            <table className="table align-middle">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Customer</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#1025</td>
                                        <td>John Smith</td>
                                        <td>$240</td>
                                        <td>
                                            <span className="badge bg-success">Delivered</span>
                                        </td>
                                        <td>10 Jul 2026</td>
                                    </tr>
                                    <tr>
                                        <td>#1024</td>
                                        <td>David Lee</td>
                                        <td>$90</td>
                                        <td>
                                            <span className="badge bg-warning text-dark">Pending</span>
                                        </td>
                                        <td>10 Jul 2026</td>
                                    </tr>
                                    <tr>
                                        <td>#1023</td>
                                        <td>Emma Watson</td>
                                        <td>$310</td>
                                        <td>
                                            <span className="badge bg-primary">Processing</span>
                                        </td>
                                        <td>09 Jul 2026</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
