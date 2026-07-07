import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import SingleProductPage from './pages/SingleProductPage';
import CheckoutPage from './pages/CheckoutPage';

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
            path='/cartPage'
            element={<CartPage/>} />

            <Route
            path='/products/:id'
            element={<SingleProductPage/>} />

            <Route
            path='/cartPage/checkout'
            element={<CheckoutPage/>} />

        </Routes>
      </Router>
    </>
  )
}

export default App
