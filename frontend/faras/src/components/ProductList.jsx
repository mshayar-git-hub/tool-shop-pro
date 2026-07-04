import React, { useState, useEffect, useContext } from 'react'
import api from "./api/api";
import { CartContext } from '../context/CartContext';

const ProductList = () => {

    const [product, setProduct] = useState([]);
    const {addToCart} = useContext(CartContext)

    useEffect(
        () => {
            api.get('products/')
                .then((response) => {
                    setProduct(response.data);
                })
                .catch((error) => {
                    console.log("error");
                })
        }, []
    );



    return (
        <>
            <div className="col-lg-9">

                <div className="product-toolbar">
                    <div className="toolbar-left">

                        <h4>Power Tools</h4>

                        <p>Showing <strong>1-12</strong> of<strong>248</strong> Products</p>

                    </div>

                    <div className="toolbar-right">
                        <select className="form-select">
                            <option>Newest First</option>
                            <option>Price : Low to High</option>
                            <option>Price : High to Low</option>
                            <option>Highest Rated</option>
                            <option>Best Selling</option>
                        </select>

                        <button className="grid-btn active">
                            <i className="bi bi-grid-3x3-gap-fill"></i>
                        </button>

                        <button className="grid-btn">
                            <i className="bi bi-list"></i>
                        </button>
                    </div>
                </div>

                <div className="row g-4 mt-2">
                    {/* <!-- Product 1 --> */}
                    {
                        product.map((product) => (
                                <div className="col-xl-4 col-md-6" key={product.id}>
                                    <div className="product-card">
                                        {/* <span className="sale-badge">-20%</span> */}

                                        <button className="wishlist">
                                            <i className="bi bi-heart"></i>
                                        </button>

                                        <button className="quick-view">
                                            <i className="bi bi-eye"></i>
                                        </button>

                                        <div className="product-image">
                                            <img src={product.image} alt={product.product_name} />
                                        </div>

                                        <div className="product-info">
                                            {/* <small>
                                    Bosch
                                </small> */}

                                            <h5>{product.product_name} </h5>

                                            <div className="rating">
                                                ★★★★★
                                                <span>(124)</span>
                                            </div>

                                            <div className="price">
                                                <h4>{product.price}</h4>
                                                {/* <del>$229</del> */}
                                            </div>

                                            {/* <div className="stock in-stock">
                                    <i className="bi bi-check-circle-fill"></i>
                                    In Stock
                                </div> */}

                                            <button onClick={()=> addToCart(product) } className="btn add-cart">
                                                <i className="bi bi-cart-plus"></i>
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                        ))
                    }
                </div>
            </div>






        </>
    )
}

export default ProductList
