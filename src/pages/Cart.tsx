import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import { ItemsContext } from '../context/ItemsContext'
import { Product } from '../types/products'
import parseMoney from '../utils/parseMoney'

import ProductCardShop from '../components/sites/cart/ProductCardShop'
import Sections from '../components/layouts/Sections'
import ButtonCart from '../components/sites/cart/ButtonCart'
import GoBack from '../components/app/GoBack'

const Cart = () => {
  const navigate = useNavigate()

  const {
    items,
    addCart,
    removeCart,
    removeStock,
    addStock,
    cart,
    clearCart,
    restartStock,
  } = useContext(ItemsContext)

  const handleGoBack = () => {
    navigate(-1)
  }

  const handleAdd = (item: Product) => {
    if (item.stock > 0) {
      addCart(item)
      removeStock(item.id)
    }
  }

  const handleRemove = (item: Product) => {
    const itemFound = cart.find(ite => ite.id === item.id)
    if (itemFound) {
      removeCart(itemFound)
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

        {cart.length > 0 && (
          <>
            <AnimatePresence>
              {cart.map(item => {
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
                <p className="text-xl font-bold">
                  $
                  {parseMoney(
                    cart.reduce((acc, item) => {
                      return acc + item.price * item.quantity
                    }, 0)
                  )}
                </p>
              </div>
              <p className="text-xs text-zinc-400">
                Taxes and shipping not included.
              </p>
            </div>
            <ButtonCart onClick={handleCheckout} text={'Checkout'} />
          </>
        )}
        {cart.length === 0 && (
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
