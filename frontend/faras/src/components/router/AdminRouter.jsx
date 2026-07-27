import React , {useState, useContext, useEffect} from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

const AdminRouter = () => {


    const {loadUser , isSuperUser , isLoggedIn , isStaff } = useContext(AuthContext);

    useEffect(()=>{
        loadUser();
    },[])

    if(!isLoggedIn){
        return <Navigate to='/login' replace/>;
    }

    if (!isSuperUser && !isStaff ){
        return <Navigate to='/' replace/>;
    }


  return <Outlet/>;
}

export default AdminRouter
