import React, {createContext,useState,useContext} from 'react'
import api from "../components/api/api"

const DashContext = createContext();
  
const DashProvider = ({children}) => {

  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  const getProduct = async() =>{
    try{
      const res = await api.get('/products/');
      setProduct(res.data);
    }catch(error){
      console.log(error);
    }
  }

  const getCategory = async() =>{
    try{
      const res = await api.get('/categories/');
      setCategory(res.data);
    }catch(error){
      console.log(error);
    }
  }

  const getUsers = async() =>{
    try{
      const res = await api.get('/all_users/');
      setAllUsers(res.data);
    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
      <DashContext.Provider value={{product, getProduct , getCategory,category , getUsers,allUsers}}>
        {children}
      </DashContext.Provider>
    </>
  )
}

export {DashContext, DashProvider}
