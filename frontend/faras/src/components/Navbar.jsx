import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { removeToken } from '../utils/Auth'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
    const { cartItems, clearCart } = useContext(CartContext);
    const navigate = useNavigate()
    const { setIsLoggedIn, isLoggedIn, isSuperUser } = useContext(AuthContext);

    const handleLogout = () => {
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

                        <div className="nav-actions d-flex align-items-center gap-3">

                            <button className="btn btn-link text-dark fs-5 p-0">
                                <i className="bi bi-search"></i>
                            </button>

                            <button className="btn btn-link text-dark fs-5 p-0">
                                <i className="bi bi-heart"></i>
                            </button>

                            <Link
                                to="/cartPage"
                                className="btn btn-link text-dark text-decoration-none position-relative fs-5 p-0"
                            >
                                <i className="bi bi-cart3"></i>

                                {cartItems.length > 0 && (
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {cartItems.length}
                                    </span>
                                )}
                            </Link>

                            {!isLoggedIn ? (
                                <>
                                    <Link
                                        to="/login"
                                        className="btn btn-outline-dark rounded-pill px-4"
                                    >
                                        Login
                                    </Link>

                                    <Link
                                        to="/register"
                                        className="btn btn-dark rounded-pill px-4"
                                    >
                                        Sign Up
                                    </Link>
                                </>
                            ) : (
                                <>
                                    {isSuperUser && (
                                        <Link
                                            to="/dashboard"
                                            className="btn btn-outline-warning rounded-pill"
                                        >
                                            Dashboard
                                        </Link>
                                    )}

                                    <button
                                        onClick={handleLogout}
                                        className="btn btn-outline-danger rounded-pill"
                                    >
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
