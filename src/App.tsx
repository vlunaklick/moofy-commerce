import { Routes, Route } from 'react-router-dom'

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
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/shop">
          <Route index element={<Shop />} />
          <Route path=":category" element={<Categorys />} />
          <Route path=":category/:id" element={<Products />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Main>
  )
}

export default App
