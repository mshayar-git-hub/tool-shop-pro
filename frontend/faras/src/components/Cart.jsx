import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
  const { cartItems, RemoveFromCart, addToCart,UpdateCart } = useContext(CartContext);


  const cartLength = cartItems?.length || 0;

  return (
    <>
      {/* <!-- Cart --> */}

      {cartLength === 0 ? (
        <div className="container text-center py-5">
          <h2>Your Cart is Empty</h2>
        </div>
      ) : (
        <section>
        {/* Cart Items */ }
        
        <div className="cart-box">
          <h3 className="mb-4">Shopping Cart</h3>

          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="row align-items-center">

                <div className="col-md-2">
                  <img
                    src={item.product_image}
                    className="img-fluid"
                    alt={item.product_name}
                  />
                </div>

                <div className="col-md-3">
                  <h6>{item.product_name}</h6>
                </div>

                <div className="col-md-2">
                  ₹{item.product_price}
                </div>

                <div className="col-md-3">
                  <div className="quantity-box">
                    <button onClick={() => UpdateCart(item.id, item.quantity - 1)}>
                      -
                    </button>

                    <input
                      type="text"
                      value={item.quantity}
                      readOnly
                    />

                    <button onClick={() => UpdateCart(item.id, item.quantity + 1)}>
                      +
                    </button>
                  </div>
                </div>

                <div className="col-md-1">
                  ₹{item.product_price * item.quantity}
                </div>

                <div className="col-md-1">
                  <button
                    className="btn btn-link"
                    onClick={() => RemoveFromCart(item.product)}
                  >
                    <i className="bi bi-trash-fill"></i>
                  </button>
                </div>

              </div>
            </div>
          ))}

          <hr className="my-4" />

          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Coupon Code"
                />

                <button className="btn btn-primary">
                  Apply Coupon
                </button>
              </div>
            </div>

            <div className="col-md-4 text-md-end mt-3 mt-md-0">
              <a
                href="products.html"
                className="btn btn-outline-primary"
              >
                Continue Shopping
              </a>
            </div>
          </div>

        </div> {/* cart-box */}
    </section>
      )}
    </>
  )
}

export default Cart
