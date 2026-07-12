import React from 'react'

const Orders = () => {
  return (
    <>
      <div className="col-lg-9 col-xl-10">

                    <div className="content-box">

                        {/* <!-- Header --> */}

                        <div className="d-flex justify-content-between align-items-center mb-4">

                            <h2 className="mb-0">Orders</h2>

                            <button className="btn btn-primary">
                                <i className="bi bi-download"></i>
                                Export Orders
                            </button>

                        </div>

                        {/* <!-- Filters --> */}

                        <div className="row g-3 mb-4">

                            <div className="col-lg-6">

                                <input type="text" className="form-control" placeholder="Search Order ID or Customer"/>

                            </div>

                            <div className="col-lg-3">

                                <select className="form-select">

                                    <option>All Orders</option>
                                    <option>Pending</option>
                                    <option>Processing</option>
                                    <option>Shipped</option>
                                    <option>Delivered</option>
                                    <option>Cancelled</option>

                                </select>

                            </div>

                            <div className="col-lg-3">

                                <button className="btn btn-outline-primary w-100">
                                    Filter
                                </button>

                            </div>

                        </div>

                        {/* <!-- Orders Table --> */}

                        <div className="table-responsive">

                            <table className="table table-hover align-middle">

                                <thead>

                                    <tr>

                                        <th>Order ID</th>
                                        <th>Customer</th>
                                        <th>Date</th>
                                        <th>Total</th>
                                        <th>Payment</th>
                                        <th>Status</th>
                                        <th>Actions</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    <tr>

                                        <td>#ORD1001</td>

                                        <td>John Smith</td>

                                        <td>12 Jul 2026</td>

                                        <td>$245</td>

                                        <td>
                                            <span className="badge bg-success">
                                                Paid
                                            </span>
                                        </td>

                                        <td>
                                            <span className="badge bg-primary">
                                                Processing
                                            </span>
                                        </td>

                                        <td>

                                            <button className="btn btn-sm btn-info">
                                                <i className="bi bi-eye"></i>
                                            </button>

                                            <button className="btn btn-sm btn-warning">
                                                <i className="bi bi-pencil-square"></i>
                                            </button>

                                        </td>

                                    </tr>

                                    <tr>

                                        <td>#ORD1002</td>

                                        <td>Emma Watson</td>

                                        <td>11 Jul 2026</td>

                                        <td>$90</td>

                                        <td>
                                            <span className="badge bg-success">
                                                Paid
                                            </span>
                                        </td>

                                        <td>
                                            <span className="badge bg-success">
                                                Delivered
                                            </span>
                                        </td>

                                        <td>

                                            <button className="btn btn-sm btn-info">
                                                <i className="bi bi-eye"></i>
                                            </button>

                                            <button className="btn btn-sm btn-warning">
                                                <i className="bi bi-pencil-square"></i>
                                            </button>

                                        </td>

                                    </tr>

                                    <tr>

                                        <td>#ORD1003</td>

                                        <td>David Lee</td>

                                        <td>10 Jul 2026</td>

                                        <td>$420</td>

                                        <td>
                                            <span className="badge bg-danger">
                                                Unpaid
                                            </span>
                                        </td>

                                        <td>
                                            <span className="badge bg-warning text-dark">
                                                Pending
                                            </span>
                                        </td>

                                        <td>

                                            <button className="btn btn-sm btn-info">
                                                <i className="bi bi-eye"></i>
                                            </button>

                                            <button className="btn btn-sm btn-warning">
                                                <i className="bi bi-pencil-square"></i>
                                            </button>

                                        </td>

                                    </tr>

                                </tbody>

                            </table>

                        </div>

                        {/* <!-- Pagination --> */}

                        <nav className="mt-4">

                            <ul className="pagination justify-content-end">

                                <li className="page-item disabled">
                                    <a className="page-link">Previous</a>
                                </li>

                                <li className="page-item active">
                                    <a className="page-link">1</a>
                                </li>

                                <li className="page-item">
                                    <a className="page-link">2</a>
                                </li>

                                <li className="page-item">
                                    <a className="page-link">Next</a>
                                </li>

                            </ul>

                        </nav>

                    </div>

                </div>
    </>
  )
}

export default Orders
