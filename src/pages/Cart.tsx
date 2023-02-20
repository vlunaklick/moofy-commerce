import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import { ItemsContext } from '../context/Items'
import { Product } from '../types/products'
import parseMoney from '../utils/parseMoney'

import ProductCardShop from '../components/sites/cart/ProductCardShop'
import Sections from '../components/layouts/Sections'
import ButtonCart from '../components/sites/cart/ButtonCart'
import GoBack from '../components/app/GoBack'
import { useCart } from '../context/Cart'

const Cart = () => {
  const { cartItems, cartTotal, addToCart, removeFromCart } = useCart()

  const navigate = useNavigate()

  const { items, removeStock, addStock, clearCart, restartStock } =
    useContext(ItemsContext)

  const handleGoBack = () => {
    navigate(-1)
  }

  const handleAdd = (item: Product) => {
    if (item.stock > 0) {
      addToCart(item)
      removeStock(item.id)
    }
  }

  const handleRemove = (item: Product) => {
    const itemFound = cartItems.find(ite => ite.id === item.id)

    if (itemFound) {
      removeFromCart(itemFound)
      addStock(itemFound.id)
    }
  }

  const handleCheckout = () => {
    clearCart()
    restartStock()
    navigate('/')
  }

  return (
    <>
      <Sections>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-zinc-800">Cart</h1>
          <GoBack onClick={handleGoBack} />
        </div>

        {cartItems.length > 0 && (
          <>
            <AnimatePresence>
              {cartItems.map(item => {
                let itemFound = items.find(ite => ite.id === item.id)
                if (itemFound) {
                  return (
                    <ProductCardShop
                      key={item.id}
                      item={itemFound}
                      quantity={item.quantity}
                      handleAdd={handleAdd}
                      handleRemove={handleRemove}
                    />
                  )
                }
              })}
            </AnimatePresence>
            <div className="flex flex-col">
              <div className="flex justify-between text-zinc-800">
                <p className="text-xl font-semibold">Total:</p>
                <p className="text-xl font-bold">${parseMoney(cartTotal)}</p>
              </div>
              <p className="text-xs text-zinc-400">
                Taxes and shipping not included.
              </p>
            </div>
            <ButtonCart onClick={handleCheckout} text={'Checkout'} />
          </>
        )}
        {cartItems.length === 0 && (
          <div className="flex flex-col gap-4 items-center justify-center h-full w-full">
            <h1 className="md:text-4xl text-2xl font-bold text-zinc-800">
              Your cart is empty
            </h1>
          </div>
        )}
      </Sections>
    </>
  )
}

export default Cart
