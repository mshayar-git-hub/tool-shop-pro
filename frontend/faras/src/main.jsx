import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { DashProvider } from './context/DashContext.jsx'
import { SearchProvider } from './context/SearchContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <DashProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </DashProvider>
      </CartProvider>
    </AuthProvider>
  </StrictMode>,
)
