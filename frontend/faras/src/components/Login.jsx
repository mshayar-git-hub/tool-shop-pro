import React, { useState , useContext} from 'react' 
import { useNavigate } from 'react-router-dom';
import api from './api/api'
import { saveToken } from '../utils/Auth';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const [msg, setMsg] = useState();
    const { fetchCart } = useContext(CartContext);
    const {loadUser} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [form, setForm] = useState({
        username: "",
        password: ""
    })
    const navigate = useNavigate();

    const handleChange = (e) =>{
        setForm({...form,[e.target.name] : e.target.value });
    }
    
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const res = await api.post('token/',form)
            saveToken(res.data);
            await loadUser();
            await fetchCart();
            setMsg("Login Successfull. Redirecting...")
            setTimeout(()=>{
                navigate("/")
            },1000);
        }catch(error){
            setMsg("An error occured.Try again.")
        }
    }


    return (
        <>
                <section className="signup-section py-5">
                    <div className="container">
                        <div className="row justify-content-center align-items-center min-vh-100">
                            <div className="col-lg-5 col-md-8">
                                <div className="card border-0 shadow rounded-4">
                                    <div className="card-body p-5">
                                        <div className="text-center mb-4">
                                            <img src="images/logo.png" alt="Logo" width="80" />
                                            <h2 className="fw-bold mt-3">Welcome Back</h2>

                                            <p className="text-muted mb-0">Login to continue shopping.</p>
                                        </div>
                                        {/* <!-- Form --> */}
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label className="form-label fw-semibold">Username</label>

                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <i className="bi bi-person"></i>
                                                    </span>

                                                    <input
                                                        type="text"
                                                        name='username'
                                                        value={form.username}
                                                        onChange={handleChange}
                                                        className="form-control"
                                                        placeholder="Enter your username"
                                                        required />
                                                </div>
                                            </div>

                                            {/* <!-- Password --> */}
                                            <div className="mb-3">
                                                <label className="form-label fw-semibold">Password</label>

                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <i className="bi bi-lock"></i>
                                                    </span>

                                                    <input
                                                        type={showPassword?"text":"password"}
                                                        className="form-control"
                                                        name='password'
                                                        value={form.password}
                                                        onChange={handleChange}
                                                        id="password"
                                                        placeholder="Enter your password"
                                                        required />

                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-secondary"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                    >
                                                        <i className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="remember" />
                                                    <label
                                                        className="form-check-label" htmlFor="remember">Remember Me</label>
                                                </div>
                                                <a href="forgot-password.html" className="text-decoration-none">
                                                    Forgot Password?
                                                </a>

                                            </div>

                                            {/* <!-- Button --> */}
                                            <div className="d-grid">
                                                <button
                                                    type="submit"
                                                    className="btn btn-warning btn-lg fw-semibold">
                                                    Login
                                                </button>
                                                {msg && <p className='text-danger'>{msg}</p> }

                                            </div>
                                            <hr className="my-4" />
                                            <div className="text-center text-muted mb-4">
                                                <span>OR</span>
                                            </div>
                                            <div className="d-grid gap-3">
                                                <button type="button" className="btn btn-outline-dark">
                                                    <i className="bi bi-google me-2"></i>
                                                    Continue with Google
                                                </button>

                                                <button type="button" className="btn btn-outline-primary">
                                                    <i className="bi bi-facebook me-2"></i>
                                                    Continue with Facebook
                                                </button>
                                            </div>
                                        </form>

                                        <p className="text-center mt-4 mb-0">Don't have an account?
                                            <a href="signup.html" className="text-decoration-none fw-semibold">Sign Up</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Bootstrap JS --> */}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>
        
        </>
    )
}

export default Login
