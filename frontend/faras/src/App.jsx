import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import SingleProductPage from './pages/SingleProductPage';
import CheckoutPage from './pages/CheckoutPage';

import PrivateRouter from './components/router/PrivateRouter'
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import Main from './components/dashboard/Main';
import Profile from './components/dashboard/Profile';
import Products from './components/dashboard/Products';
import Orders from './components/dashboard/Orders';
import Users from './components/dashboard/Users';
import Pro_AddPro from './components/dashboard/Pro_AddPro';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home/>} />
          <Route
            path='/products'
            element={<ProductPage/>} />

            

            <Route
            path='/products/:id'
            element={<SingleProductPage/>} />

          <Route element={<PrivateRouter />}>
            <Route
              path='/cartPage/checkout'
              element={<CheckoutPage />} />

            <Route
              path='/cartPage'
              element={<CartPage />} />
          </Route>

            <Route
            path='/login'
            element={<LoginPage/>}/>

            <Route
            path='/register'
            element={<SignupPage/>}/>



{/* ..........................DASHBOARD...................... */}
          <Route element={<PrivateRouter/>}>
          <Route
            path='/dashboard'
            element={<DashboardPage />}>

            <Route index element={<Main />} />
            <Route path='profile' element={<Profile />} />
            <Route path='products' element={<Products/>}/>
            <Route path='orders' element={<Orders/>}/>
            <Route path='users' element={<Users/>}/>
            <Route path='products/add' element={<Pro_AddPro/>}/>
            <Route path='products/add/:id' element={<Pro_AddPro/>}/>
          </Route>
          </Route>

          

        </Routes>
      </Router>
    </>
  )
}

export default App
