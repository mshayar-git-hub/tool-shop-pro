import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import api from './api/api';


const SingleProduct = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(
        () => {
            api.get(`products/${id}/`)
                .then((response) => {
                    setProduct(response.data);
                })
                .catch((error) => {
                    console.log("error");
                })
        }, [id]
    );


    return (
        <>
            <section className="product-details py-5">
                <div className="container">
                    <div className="row g-5">
                        {/* 
<!-- ======================================
        PRODUCT GALLERY
======================================= --> */}
                        <div className="col-lg-6">
                            <div className="product-gallery">
                                <div className="main-image">
                                    <img
                                        id="mainProductImage"
                                        src={product.image}
                                        className="img-fluid"
                                        alt={product.product_name} />
                                    <span className="zoom-badge">
                                        <i className="bi bi-zoom-in"></i>
                                        Zoom
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* 
<!-- ======================================
        PRODUCT INFORMATION
======================================= --> */}
                        <div className="col-lg-6">
                            <div className="product-detail-info">
                                {/* <span className="product-brand">
                                    Bosch Professional
                                </span> */}

                                <h1>{product.product_name}</h1>
                                <div className="product-rating">
                                    ★★★★★
                                    {/* <span>

                                        (126 Reviews)

                                    </span> */}
                                </div>
                                <div className="price-wrapper">
                                    <h2>{product.price}</h2>
                                    {/* <del>
                                        $229
                                    </del> */}
                                    {/* <span className="save">
                                        Save 20%
                                    </span> */}
                                </div>
                                <p className="product-short-desc">{product.description}</p>
                                <div className="product-meta">
                                    <div>
                                        {/* <strong>
                                            SKU
                                        </strong>
                                        <span>
                                            DRL-4589
                                        </span> */}
                                    </div>
                                    <div>
                                        <strong>Category: {product.category?.cat_name}</strong>
                                        {/* <span>
                                            Power Tools
                                        </span> */}
                                    </div>

                                    {/* <div>
                                        <strong>
                                            Brand
                                        </strong>
                                        <span>
                                            Bosch
                                        </span>
                                    </div> */}

                                    <div>
                                        <strong> Availability </strong>

                                        <span className="text-success">In Stock</span>
                                    </div>
                                </div>
                                {/* <!-- Quantity --> */}
                                <div className="quantity-wrapper">
                                    <label> Quantity </label>
                                    <div className="quantity-box">
                                        <button className="qty-minus">- </button>
                                        <input
                                            type="text"
                                            value="1"
                                            readOnly />
                                        <button className="qty-plus"> +</button>
                                    </div>
                                </div>
                                {/* <!-- Buttons --> */}
                                <div className="product-buttons">
                                    <a href="#"  className="btn btn-shop btn-lg"><i className="bi bi-cart-plus"></i>Add To Cart</a>
                                    <a href="#" className="btn btn-warning btn-lg"> Buy Now</a>
                                </div>
                                <div className="secondary-buttons">
                                    <button>
                                        <i className="bi bi-heart"></i>Wishlist</button>
                                    <button>
                                        <i className="bi bi-arrow-left-right"></i>Compare
                                    </button>

                                    <button>
                                        <i className="bi bi-share"></i>Share
                                    </button>
                                </div>

                                {/* <!-- Delivery --> */}
                                <div className="delivery-box">
                                    <div>
                                        <i className="bi bi-shield-check"></i> 100% Original Product
                                    </div>
                                    <div>
                                        <i className="bi bi-truck"></i> Fast Delivery
                                    </div>

                                    <div>
                                        <i className="bi bi-arrow-repeat"></i>Easy Returns
                                    </div>

                                    <div>
                                        <i className="bi bi-credit-card"></i>Secure Payment
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default SingleProduct
