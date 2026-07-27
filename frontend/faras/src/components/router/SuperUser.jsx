import React , {useContext, useEffect} from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

const SuperUser = () => {


    const {loadUser , isSuperUser , isLoggedIn } = useContext(AuthContext);

    useEffect(()=>{
        loadUser();
    },[])

    if(!isLoggedIn){
        return <Navigate to='/login' replace/>;
    }

    if (!isSuperUser ){
        return <Navigate to='/dashboard' replace/>;
    }


  return <Outlet/>;
}

export default SuperUser
