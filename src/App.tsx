import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Error from './pages/Error'
import Categorys from './pages/Categorys'

import Main from './components/layouts/Main'

const App = () => {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Navigate to={'/shop/1'} replace />} />
        <Route path="/shop/:pagination" element={<Shop />} />
        <Route path="/shop/:pagination/:category" element={<Categorys />} />
        <Route
          path="/shop/:pagination/:category/:specific"
          element={<Shop />}
        />
        <Route path="/products/:category/:id" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Main>
  )
}

export default App
