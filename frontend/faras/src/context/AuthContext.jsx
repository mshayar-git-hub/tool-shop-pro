import React , {useState, createContext , useEffect} from 'react'
import api from '../components/api/api';

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [isLoggedIn,setIsLoggedIn] = useState(!!localStorage.getItem('access_token'));
    const [user, setUser ] = useState(null);
    const [isSuperUser, setIsSuperUser] = useState(null);
    const [isStaff, setIsStaff]= useState([]);
    const [loading, setLoading] = useState(false);
    const [address,setAddress] = useState([]);

    const loadUser = async () =>{
        try{
            const res = await api.get('/user');
            setUser(res.data);
            setIsSuperUser(Boolean(res.data.is_superuser));
            setIsStaff(Boolean(res.data.is_staff));
            setIsLoggedIn(true);
            console.log('yesss');
        }catch (error) {
            setUser(null);
            setIsSuperUser(false);
            setIsLoggedIn(false);
        }
    }

    const updateUser = async(userData) =>{
        setLoading(true);
        try{
            const res = await api.patch('/user/',userData)
            setUser(res.data);
        }catch(error){
            console.log("error-> ",error);
        }finally{
            setLoading(false)
        }
    }

    const getAddress = async() => {
        try{
            const res = await api.get("/address");
            setAddress(res.data);
        }catch(error){
            console.log("error= ",error)
        }
    }

    const postAddress = async(AddressData)=>{
        try{
            const res = await api.post("/address/", AddressData);
            getAddress();
        }catch(error){
            console.log("error= ",error)
        }
    }

    const editAddress = async(id, AddressData) =>{
        try{
            const res = await api.patch(`/address/${id}/`, AddressData);
            getAddress();
        }catch(error){
            console.log("error= ",error)
        }
    }

    const deleteAddress = async(id)=>{
        try{
            const res = await api.delete(`/address/${id}/`)
            getAddress();
        }catch(error){
            console.log("error= ",error)
        }
    }

    useEffect(()=>{
        if (localStorage.getItem("access_token")){
            loadUser();
            getAddress();
        }else{
            setLoading(false);
        }
    }, []);

    

  return (
    <>
      <AuthContext.Provider value={{isLoggedIn,
                                    setIsLoggedIn,
                                    user,
                                    setUser,
                                    isSuperUser, 
                                    isStaff, 
                                    loading, 
                                    setLoading ,
                                    loadUser,
                                    getAddress,
                                    postAddress,
                                    editAddress,
                                    deleteAddress,
                                    address, 
                                    setAddress,
                                    updateUser}}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

export {AuthContext, AuthProvider};
