import React from 'react'
import ReactDOM from 'react-dom/client'
import { ItemProvider } from './context/ItemsContext'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css'

import App from './App'
import ScrollToTop from './helpers/ScrollToTop'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ItemProvider>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </ItemProvider>
  </React.StrictMode>
)
