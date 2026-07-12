import React from 'react'

const Products = () => {
  return (
    <>
      <div className="col-lg-9 col-xl-10">

                    <div className="content-box">

                        {/* <!-- Header --> */}

                        <div className="d-flex justify-content-between align-items-center mb-4">

                            <h2 className="mb-0">Products</h2>

                            <button className="btn btn-primary">
                                <i className="bi bi-plus-circle"></i>
                                Add Product
                            </button>

                        </div>

                        {/* <!-- Filters --> */}

                        <div className="row g-3 mb-4">

                            <div className="col-lg-6">

                                <input type="text" className="form-control" placeholder="Search product..."/>

                            </div>

                            <div className="col-lg-3">

                                <select className="form-select">

                                    <option>All Categories</option>
                                    <option>Cement</option>
                                    <option>Steel</option>
                                    <option>Bricks</option>
                                    <option>Tiles</option>
                                    <option>Paint</option>
                                    <option>Electrical</option>
                                    <option>Plumbing</option>

                                </select>

                            </div>

                            <div className="col-lg-3">

                                <button className="btn btn-outline-primary w-100">
                                    Filter
                                </button>

                            </div>

                        </div>

                        {/* <!-- Products Table --> */}

                        <div className="table-responsive">

                            <table className="table table-hover align-middle">

                                <thead>

                                    <tr>

                                        <th>ID</th>
                                        <th>Image</th>
                                        <th>Product</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th>Stock</th>
                                        <th>Status</th>
                                        <th>Actions</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    <tr>

                                        <td>1</td>

                                        <td>
                                            <img src="images/products/product1.jpg" className="product-img"/>
                                        </td>

                                        <td>UltraTech Cement</td>

                                        <td>Cement</td>

                                        <td>$12</td>

                                        <td>150</td>

                                        <td>
                                            <span className="badge bg-success">
                                                In Stock
                                            </span>
                                        </td>

                                        <td>

                                            <button className="btn btn-sm btn-info">
                                                <i className="bi bi-eye"></i>
                                            </button>

                                            <button className="btn btn-sm btn-warning">
                                                <i className="bi bi-pencil"></i>
                                            </button>

                                            <button className="btn btn-sm btn-danger">
                                                <i className="bi bi-trash"></i>
                                            </button>

                                        </td>

                                    </tr>

                                    <tr>

                                        <td>2</td>

                                        <td>
                                            <img src="images/products/product2.jpg" className="product-img"/>
                                        </td>

                                        <td>Red Clay Bricks</td>

                                        <td>Bricks</td>

                                        <td>$8</td>

                                        <td>0</td>

                                        <td>
                                            <span className="badge bg-danger">
                                                Out of Stock
                                            </span>
                                        </td>

                                        <td>

                                            <button className="btn btn-sm btn-info">
                                                <i className="bi bi-eye"></i>
                                            </button>

                                            <button className="btn btn-sm btn-warning">
                                                <i className="bi bi-pencil"></i>
                                            </button>

                                            <button className="btn btn-sm btn-danger">
                                                <i className="bi bi-trash"></i>
                                            </button>

                                        </td>

                                    </tr>

                                    <tr>

                                        <td>3</td>

                                        <td>
                                            <img src="images/products/product3.jpg" className="product-img"/>
                                        </td>

                                        <td>Wall Paint</td>

                                        <td>Paint</td>

                                        <td>$18</td>

                                        <td>35</td>

                                        <td>
                                            <span className="badge bg-success">
                                                In Stock
                                            </span>
                                        </td>

                                        <td>

                                            <button className="btn btn-sm btn-info">
                                                <i className="bi bi-eye"></i>
                                            </button>

                                            <button className="btn btn-sm btn-warning">
                                                <i className="bi bi-pencil"></i>
                                            </button>

                                            <button className="btn btn-sm btn-danger">
                                                <i className="bi bi-trash"></i>
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
                                    <a className="page-link">3</a>
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

export default Products
