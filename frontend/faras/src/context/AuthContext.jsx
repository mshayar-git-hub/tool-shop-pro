import React , {useState, createContext , useEffect} from 'react'
import api from '../components/api/api';

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [isLoggedIn,setIsLoggedIn] = useState(!!localStorage.getItem('access_token'));
    const [user, setUser ] = useState(null);
    const [isSuperUser, setIsSuperUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const loadUser = async () =>{
        setLoading(true);
        try{
            const res = await api.get('/user');
            setUser(res.data);
            setIsSuperUser(Boolean(res.data.is_superuser));
            setIsLoggedIn(true);
            console.log('yesss');
        }catch (error) {
            setUser(null);
            setIsSuperUser(false);
            setIsLoggedIn(false);
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        if (localStorage.getItem("access_token")){
            loadUser();
        }else{
            setLoading(false);
        }
    }, []);

  return (
    <>
      <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn,user,isSuperUser,loading,loadUser}}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

export {AuthContext, AuthProvider};
