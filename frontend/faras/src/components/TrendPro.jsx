import React, { useState ,useEffect , useContext} from 'react'
import api from './api/api'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const TrendPro = () => {
    const [trePro , setTrePro ]=useState([])
    const {addToCart} = useContext(CartContext)

    useEffect(() => {
        api.get("products/")
            .then((response) => {
                const trendingProducts = response.data.filter(
                    (product) => product.trending
                );

                setTrePro(trendingProducts);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

  return (
    <>
      <section className="trending-products py-5">
    <div className="container">
        <div className="section-title d-flex justify-content-between align-items-center flex-wrap mb-5">
            <div>
                <span className="mini-title">
                    Trending Collection
                </span>
                <h2>
                    Best Selling
                    <span className="gradient-text">
                        Products
                    </span>
                </h2>

                <p>
                    Premium quality products trusted by professionals.
                </p>
            </div>

            <Link to='/products' className="btn btn-shop">
                View All
                <i className="bi bi-arrow-right"></i>
            </Link>
        </div>


        <div className="row g-4">
            {/* <!-- Product --> */}
            {
                trePro.map((product)=>(
            <div className="col-lg-3 col-md-6 col-6">
                <div className="product-card">
        
                    <button className="wishlist">
                        <i className="bi bi-heart"></i>
                    </button>

                    <div className="product-image">
                        <img src={product.image}
                             className="img-fluid"
                             alt={product.product_name} />
                    </div>

                    <div className="product-info">
                        {/* <small>
                            Bosch
                        </small> */}
                        <Link to={`/products/${product.id}`} key={product.id}>
                        <h5>{product.product_name} </h5>

                        {/* <div className="rating">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                            <span>
                                (124)
                            </span>
                        </div> */}

                        <div className="price">
                            <h4>{product.price} </h4>

                            {/* <del>
                                $239
                            </del> */}
                        </div>
                        </Link>
                        <button className="btn add-cart" onClick={()=> addToCart(product)}>
                            <i className="bi bi-cart-plus"></i> Add To Cart
                        </button>
                    </div>
                </div>
            </div>
            ))
            }


        </div>
    </div>
</section>
    </>
  )
}

export default TrendPro
