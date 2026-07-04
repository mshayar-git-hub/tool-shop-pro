import React, {createContext,useState,useContext} from 'react'

const CartContext= createContext(); 

const CartProvider = ({children}) => {
    const [cartItems,setCartItems]= useState([]);

    // add product to cart
    const addToCart = (product) =>{
        const existing = cartItems.find((item) => item.id === product.id);
        if (existing){
            setCartItems(
                cartItems.map((item)=>
                    item.id === product.id ? {...item,quantity:item.quantity  + 1 } : item
                )
            )
        }else{
            setCartItems([...cartItems, {...product,quantity:1}]);
        }
    }

    // remove product from cart
    const RemoveFromCart = (id) =>{
        setCartItems(cartItems.filter((item)=> item.id !== id));
    }

  return (
    <>
      <CartContext.Provider value={{cartItems,addToCart,RemoveFromCart}}>
        {children}
      </CartContext.Provider>
    </>
  )
}

export { CartContext, CartProvider };
