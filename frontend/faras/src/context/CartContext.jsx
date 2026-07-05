import React, {createContext,useState,useContext, useEffect} from 'react'
import api from "../components/api/api"

const CartContext= createContext(); 

const CartProvider = ({children}) => {
    const [cartItems,setCartItems]= useState([]);
    const [total,setTotal] = useState(0)
    const [loading,setLoading]= useState(true)

    const fetchCart = async () => {
        try {
            const response = await api.get("cart/");
            const data = Array.isArray(response.data) ? response.data[0] || {} : response.data || {};

            setCartItems(data.items || []);
            setTotal(data.total || 0);

        } catch (error) {
            console.log(error);
        }finally {
            setLoading(false);
        }
    };
    // fetch cart from backend
    useEffect(
        () => {
            fetchCart();
        }, []
    );


    // add product to cart
    const addToCart = async (product) =>{
       try {
        const productId = typeof product === 'object' ? product.id : product;
        const response = await api.post("cart/add_cart/", {
            product_id: productId,
            quantity: 1,
        });

        await fetchCart();

    } catch (error) {
        console.log("Error adding to cart:", error);
    }
    }

    // remove product from cart
    const RemoveFromCart = async (id) =>{
        try{
            const response = await api.post('cart/remove_cart/', {
                product_id : id,
            });

            await fetchCart();

        }catch(error){
            console.log("Error removing from cart:", error);
        }
    }

    //update from cart
    const UpdateCart = async (Id, quantity) => {
        if (quantity < 1) {
            await api.post("cart/update_cart/", {
                item_id: Id,
                quantity: 0,
            })};
        try {
            await api.post("cart/update_cart/", {
                item_id: Id,
                quantity: quantity,
            });

            await fetchCart();

        } catch (error) {
            console.log("Error updating cart:", error);
        }
    };

  return (
    <>
      <CartContext.Provider value={{cartItems,total, loading, addToCart,RemoveFromCart,UpdateCart}}>
        {children}
      </CartContext.Provider>
    </>
  )
}

export { CartContext, CartProvider };
