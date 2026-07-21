import React,{useContext,useEffect} from 'react'
import { DashContext } from '../../context/DashContext';
import { Link } from 'react-router-dom'

const Main = () => {

    const {product,getProduct,getUsers,allUsers, getOrder,allOrders} = useContext(DashContext);



    useEffect(()=>{
        getProduct();
        getUsers();
        getOrder();
    },[]);

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
                                    <h3>{product.length} </h3>
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
                                    <h3>{allOrders.length} </h3>
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
                                    <h3>$0</h3>
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
                                    <h3>{allUsers.length} </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="table-section mt-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="mb-0">Recent Orders</h4>
                            <Link to='/dashboard/orders' className="btn btn-primary btn-sm">
                                View All
                            </Link>
                        </div>

                        <div className="table-responsive">
                            <table className="table align-middle">
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
                                {allOrders.slice(0,3).map((order)=>(
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
