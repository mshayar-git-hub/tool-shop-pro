import React,{useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { removeToken } from '../../utils/Auth';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';

const DashSidebar = () => {
    const { clearCart } = useContext(CartContext);
    const { setIsLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        removeToken();
        clearCart();
        setIsLoggedIn(false);
        setUser(null);
        navigate('/login');
    }


    return (
        <>
                        {/* <!-- Sidebar --> */}
                        <div className="col-lg-3 col-xl-2">
                            <div className="sidebar">
                                <Link to='/dashboard' className="active">
                                    <i className="bi bi-speedometer2"></i>
                                    Dashboard
                                </Link>

                                <Link to='/dashboard/profile'>
                                    <i className="bi bi-person"></i>
                                    My Profile
                                </Link>

                                <Link to='/dashboard/products'>
                                    <i className="bi bi-box-seam"></i>
                                    Products
                                </Link>

                                <Link to='/dashboard/orders'>
                                    <i className="bi bi-bag-check"></i>
                                    Orders
                                </Link>

                                <Link to='/dashboard/users'>
                                    <i className="bi bi-people"></i>
                                    Users
                                </Link>

                                <hr/>

                                    <Link onClick={handleLogout} className="logout">
                                        <i className="bi bi-box-arrow-right"></i>
                                        Logout
                                    </Link>
                            </div>
                        </div>

                        {/* <!-- Content --> */}
        </>
    )
}
export default DashSidebar
