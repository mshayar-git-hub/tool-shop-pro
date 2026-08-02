import React, { useState, useContext, useEffect } from 'react'
import { DashContext } from '../../context/DashContext'
import { useParams } from 'react-router-dom'
import { useNavigate , Link } from 'react-router-dom'

const Ord_Edit = () => {

    const { id } = useParams();
    const { getSingleOrder, singleOrder, patchSingleOrder } = useContext(DashContext);
    const [status,setStatus]=useState("");
    const navigate = useNavigate();


    const handleSubmit= async(e)=>{
        e.preventDefault();

        await patchSingleOrder(id, {status});
        alert("ordered changes successfully!");
        navigate("/dashboard/orders");
    }


    useEffect(()=>{
        getSingleOrder(id);
    },[id])

    useEffect(() => {
        if (singleOrder?.status) {
            setStatus(singleOrder.status);
        }
    }, [singleOrder]);




    return (
        <>
        <div className="col-lg-9 col-xl-10">
        {singleOrder && (
            <div className="container py-4 edit_order_23">

                {/* <!-- Header --> */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h2 className="fw-bold mb-1">Edit Order</h2>
                        <p className="text-muted mb-0">Update order status.</p>
                    </div>

                    <Link className="btn btn-outline-secondary" to='/dashboard/orders'>
                        <i className="bi bi-arrow-left"></i>
                        Back
                    </Link>
                </div>

                <div className="card shadow-sm border-0 edit_order_card_23">

                    <div className="card-header bg-primary text-white">
                        <h5 className="mb-0">
                            <i className="bi bi-pencil-square"></i>
                            Order Information
                        </h5>
                    </div>

                    <div className="card-body">

                        <form onSubmit={handleSubmit}>

                            <div className="row">

                                {/* <!-- Order ID --> */}
                                <div className="col-md-6 mb-3">
                                    <label className="form-label fw-semibold">
                                        Order ID
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={singleOrder.id}
                                        disabled
                                    />
                                </div>

                                {/* <!-- Username --> */}
                                <div className="col-md-6 mb-3">
                                    <label className="form-label fw-semibold">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={singleOrder.username}
                                        disabled
                                    />
                                </div>

                                {/* <!-- Payment --> */}
                                <div className="col-md-6 mb-3">
                                    <label className="form-label fw-semibold">
                                        Payment Method
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={singleOrder.payment_method}
                                        disabled
                                    />
                                </div>

                                {/* <!-- Delivery --> */}
                                <div className="col-md-6 mb-3">
                                    <label className="form-label fw-semibold">
                                        Delivery Method
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={singleOrder.delivery_method}
                                        disabled
                                    />
                                </div>

                                {/* <!-- Total --> */}
                                <div className="col-md-6 mb-3">
                                    <label className="form-label fw-semibold">
                                        Total Amount
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={singleOrder.total_amount}
                                        disabled
                                    />
                                </div>

                                {/* <!-- Total Items --> */}
                                <div className="col-md-6 mb-3">
                                    <label className="form-label fw-semibold">
                                        Items Ordered
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={singleOrder?.items?.length}
                                        disabled
                                    />
                                </div>

                                {/* <!-- Editable Status --> */}
                                <div className="col-md-12 mb-4">
                                    <label className="form-label fw-semibold">
                                        Order Status
                                    </label>

                                    <select 
                                        className="form-select"
                                        value={status}
                                        onChange={(e)=> setStatus(e.target.value)}
                                    >
                                        <option value='pending' >Pending</option>
                                        <option value='delivered'>Delivered</option>
                                        <option value='cancelled'>Cancelled</option>
                                    </select>
                                </div>

                            </div>

                            <div className="d-flex justify-content-end gap-2">

                                <Link
                                    type="button"
                                    to='/dashboard/orders'
                                    className="btn btn-outline-secondary"
                                >
                                    Cancel
                                </Link>

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    <i className="bi bi-check-circle me-1"></i>
                                    Update Order
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            </div>
            )}
            </div>
        </>
    )
}

export default Ord_Edit
