import React, { createContext, useContext, useState } from 'react'
import api from '../components/api/api';
import { DashContext } from './DashContext';

const SearchContext = createContext();

const SearchProvider = ({children}) => {

    const [search,setSearch] = useState("");
    const [searchOrder , setSearchOrder] = useState("");
    const [searchUser , setSearchUser ] = useState("");
    const {product,setProduct  , setAllOrders , setAllUsers} = useContext(DashContext);


    // search Product
    const searchProduct = async(e)=>{
        e.preventDefault();
        try{
            const res = await api.get(`/products/`,{params : {q:search}});
            setProduct(res.data);
        }catch(err){
            console.log("error: ",err);
        }
    }

    // Search order using ID and Username
    const getSearchOrder = async(e) =>{
        e.preventDefault();
        try{
            const res = await api.get('/orders/show/', {params : {q : searchOrder,},});
            setAllOrders(res.data);
        }catch(err){
            console.log("error: ",err);
        }
    }

    // search user by username and email
    const getSearchUser = async(e)=>{
        e.preventDefault();
        try{
            const res = await api.get('/all_users/',{params:{q:searchUser,},});
            setAllUsers(res.data);
        }catch(err){
            console.log("error: ",err);
        }
    }

  return (
    <>
        <SearchContext.Provider
            value={{
                search,
                setSearch,
                searchProduct,
                searchOrder,
                setSearchOrder,
                getSearchOrder,
                searchUser,
                setSearchUser,
                getSearchUser,
            }}>
                {children}
            </SearchContext.Provider>
    </>
  )
}

export {SearchContext,SearchProvider}
