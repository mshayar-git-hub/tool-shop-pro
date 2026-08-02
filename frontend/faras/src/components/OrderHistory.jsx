import React,{useContext, useEffect} from 'react'
import { DashContext } from '../context/DashContext';
import { Link } from 'react-router-dom';

const OrderHistory = () => {

    const {getSingleUserOrder, singleUserOrder} = useContext(DashContext);

    useEffect(()=>{
        getSingleUserOrder();
    },[])



    return (
        <> 
        {(singleUserOrder.length >= 1 )  ? (
        
            <div className="container py-5">

                <div className="card shadow-sm border-0 rounded-4">

                    <div className="card-header bg-white border-0 py-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h3 className="fw-bold mb-1">My Orders</h3>
                                <p className="text-muted mb-0">View all your previous orders.</p>
                            </div>

                            <span className="badge bg-dark px-3 py-2 rounded-pill">
                                Total Orders : {singleUserOrder.length}
                            </span>
                        </div>
                    </div>

                    <div className="card-body">
                        {singleUserOrder.map((order) => ( 
                        <div className="order-card56">

                            <div className="row align-items-center">

                                <div className="col-lg-3">
                                    <small className="text-muted">Order ID</small>
                                    <h6 className="fw-bold mb-0">#ORD-{order.id}</h6>
                                </div>

                                <div className="col-lg-2">
                                    <small className="text-muted">Amount</small>
                                    <h6 className="fw-bold text-success">{order.total_amount} KWD </h6>
                                </div>

                                <div className="col-lg-3">
                                    
                                    <small className="text-muted">Status</small><br />
                                    {order.status == 'pending' ? (
                                        <span className="badge bg-danger px-3 py-2 rounded-pill">
                                            {order.status}
                                        </span>
                                    ):(
                                        <span className="badge bg-success px-3 py-2 rounded-pill">
                                            {order.status}
                                        </span>
                                    )}
                                    
                                </div>

                                <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
                                    <a className="btn btn-dark rounded-pill px-4">
                                        View Details
                                    </a>
                                </div>

                            </div>

                        </div>
                        ))}

                    

                    </div>

                </div>

            </div>
            ) : (
                <>
                    <br/>
                    <br/>
                    <h2 className="fw-bold">No Orders Yet</h2>
                    <p className="text-muted">
                        You haven't placed any orders yet. Start shopping to see your order history here.
                    </p>
                    <Link to='/products' className="btn btn-dark rounded-pill">
                        Start Shopping
                    </Link>
                    <br/>
                    <br/>
                </>
            )}
        </>
    )
}

export default OrderHistory
