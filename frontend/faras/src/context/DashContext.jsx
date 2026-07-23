import React, {createContext,useState,useContext} from 'react'
import api from "../components/api/api"
import { useParams } from 'react-router-dom';

const DashContext = createContext();
  
const DashProvider = ({children}) => {

  const [product, setProduct] = useState([]);
  const [singleProduct, setSingleProduct] = useState([]);
  const {id} = useParams();
  const [category, setCategory] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [allOrders,setAllOrders] = useState([]);

  const getProduct = async() =>{
    try{
      const res = await api.get('/products/');
      setProduct(res.data);
    }catch(error){
      console.log(error);
    }
  }

  const postProduct = async(productData)=>{
    try{
      const res = await api.post('/products/', productData)
      getProduct();
    }catch(error){
      console.log("error-->",error);
    }
  }

  const getSingleProduct = async (id)=>{
    try{
      const res = await api.get(`products/${id}/`);
      setSingleProduct(res.data);
    }catch(err){
      console.log("error: ",err);
    }
  }

  const patchSingleProduct = async(id,data)=>{
    try{
      const res = await api.patch(`/products/${id}/`, data);
      getSingleProduct(id);
    }catch(error){
      console.log("error: ",error)
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

  const getOrder = async() => {
    try{
      const res= await api.get('/orders/show');
      setAllOrders(res.data);
    }catch(err){
      console.log("error: ", err)
    }
  }

  return (
    <>
      <DashContext.Provider value={{product, setProduct, getProduct, postProduct , singleProduct , patchSingleProduct , getSingleProduct,  getCategory,category , getUsers,allUsers ,getOrder,allOrders}}>
        {children}
      </DashContext.Provider>
    </>
  )
}

export {DashContext, DashProvider}
