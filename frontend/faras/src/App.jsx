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

          

        </Routes>
      </Router>
    </>
  )
}

export default App
