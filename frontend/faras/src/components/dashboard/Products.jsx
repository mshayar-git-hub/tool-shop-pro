import React,{useContext, useEffect } from 'react'
import { DashContext } from '../../context/DashContext'
import { Link } from 'react-router-dom';

const Products = () => {
    const {product,getProduct , category , getCategory } = useContext(DashContext);

    useEffect(()=>{
        getProduct();
        getCategory();
    },[]);
  return (
    <>
    
      <div className="col-lg-9 col-xl-10">

                    <div className="content-box">

                        {/* <!-- Header --> */}

                        <div className="d-flex justify-content-between align-items-center mb-4">

                            <h2 className="mb-0">Products</h2>

                            <Link to='/dashboard/products/add' className="btn btn-primary">
                                <i className="bi bi-plus-circle"></i>
                                Add Product
                            </Link>

                        </div>

                        {/* <!-- Filters --> */}

                        <div className="row g-3 mb-4">

                            <div className="col-lg-6">

                                <input type="text" className="form-control" placeholder="Search product..."/>

                            </div>

                            
                            <div className="col-lg-3">

                                <select className="form-select">

                                    <option>All Categories</option>
                                    {category.map((category) =>(
                                    <option>{category.cat_name} </option>
                                    ))}
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
                                    {product.map((product)=>(
                                    <tr>

                                        <td>{product.id} </td>

                                            <td>
                                                <img
                                                    src={product.image}
                                                    className="product-img_D"
                                                    alt={product.product_name}
                                                />
                                            </td>

                                        <td>{product?.product_name} </td>

                                        <td>{product.category.cat_name} </td>

                                        <td>${product.price}</td>

                                            <td>
                                                {product.in_stock ? (
                                                    <span className="badge bg-success">
                                                        In Stock
                                                    </span>
                                                ) : (
                                                    <span className="badge bg-danger">
                                                        Out of Stock
                                                    </span>
                                                )}

                                            </td>

                                            <td>
                                                {product.trending ? (
                                                    <span className="badge bg-primary">
                                                        Trending
                                                    </span>
                                                ) : (
                                                    <span className="badge bg-secondary">
                                                        No
                                                    </span>
                                                )}

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
                                   ))}

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
