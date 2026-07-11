import React,{useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { removeToken } from '../utils/Auth'

const Navbar = () => {
    const { cartItems , clearCart } = useContext(CartContext);
    const navigate = useNavigate()
    
    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem("access_token")
    )
    const handleLogout=()=>{
        removeToken();
        clearCart();
        setIsLoggedIn(false);
        navigate('/login');
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
                <div className="container">
                    <Link className="navbar-brand" to='/'>
                        <span className="logo-build">BUILD</span>
                        <span className="logo-verse">VERSE</span>
                    </Link>
                    <button className="navbar-toggler shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#menu">

                        <i className="bi bi-list"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to='/'>Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Categories</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Brands</a>
                            </li>

                            <li className="nav-item">
                                <button className="nav-link" href="#" onClick={() => {
                                    document.getElementById("about")?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }}>About</button>
                            </li>

                            <li className="nav-item">
                                <button className="nav-link" href="#" onClick={() => {
                                    document.getElementById("contact")?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }}>Contact</button>
                            </li>
                        </ul>

                        <div className="nav-actions d-flex align-items-center">

                            <button className="icon-btn">
                                <i className="bi bi-search"></i>
                            </button>

                            <button className="icon-btn">
                                <i className="bi bi-heart"></i>
                            </button>

                            <Link to='/cartPage' className="icon-btn">
                                <i className="bi bi-cart3"></i>
                                    ({cartItems? cartItems.length : 0 })
                            </Link>

                            {!isLoggedIn ? (
                                <>
                                    <Link className="btn btn-login" to="/login">
                                        Login
                                    </Link>

                                    <Link className="btn btn-signup" to="/register">
                                        Sign Up
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <button className="btn btn-logout" onClick={handleLogout} >
                                        Logout
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
