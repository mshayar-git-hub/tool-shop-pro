import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { DashProvider } from './context/DashContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <DashProvider>
          <App />
        </DashProvider>
      </CartProvider>
    </AuthProvider>
  </StrictMode>,
)
