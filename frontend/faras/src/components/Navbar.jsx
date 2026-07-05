import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Navbar = () => {
    const { cartItems } = useContext(CartContext);

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
                                <a className="nav-link" href="#">About</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
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

                            <button className="btn login-btn">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
