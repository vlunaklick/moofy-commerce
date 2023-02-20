import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css'

import { ItemProvider } from './context/Items'
import { CartProvider } from './context/Cart'

import App from './App'
import ScrollToTop from './helpers/ScrollToTop'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ItemProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <App />
        </Router>
      </CartProvider>
    </ItemProvider>
  </React.StrictMode>
)
