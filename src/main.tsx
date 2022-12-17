import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Error from './pages/Error'
import { ItemProvider } from './context/ItemsContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/products',
    element: <Shop />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '*',
    element: <Error />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ItemProvider>
      <RouterProvider router={router} />
    </ItemProvider>
  </React.StrictMode>
)
