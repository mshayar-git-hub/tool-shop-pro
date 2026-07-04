import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

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

        </Routes>
      </Router>
    </>
  )
}

export default App
