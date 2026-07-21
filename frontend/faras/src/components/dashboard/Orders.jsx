import React, {useState,useContext, useEffect} from 'react'
import { DashContext } from '../../context/DashContext'

const Orders = () => {

    const {getOrder,allOrders } = useContext(DashContext);

    useEffect(()=>{
        getOrder();
    },[]);

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
                                        <th>Payment method</th>
                                        <th>delivery method</th>
                                        <th>Status</th>
                                        <th>Action</th>

                                    </tr>

                                </thead>

                                {allOrders.map((order)=>(
                                    <tbody>

                                        <tr>

                                            <td>#{order.id} </td>

                                            <td>{order.username} </td>

                                            <td>{order.created_at}</td>

                                            <td>${order.total_amount} </td>

                                            <td>
                                                {order.payment_method == 'COD' ? (
                                                <span className="badge bg-success">
                                                    COD
                                                </span>
                                                ) : (
                                                    <span className="badge bg-danger">
                                                        ONLINE
                                                    </span>
                                                )}
                                                
                                            </td>

                                            <td> {order.delivery_method}</td>

                                            <td>
                                                <span className="badge bg-primary">
                                                    {order.status}
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
                                ))}

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
