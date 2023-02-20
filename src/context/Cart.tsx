import { createContext, useContext, useReducer } from 'react'

import { Product } from '../types/products'
import { initialCartState, cartReducer, CART_ACTIONS } from '../reducers/cart'

const CartContext = createContext({
  cartItems: initialCartState.items,
  cartTotal: initialCartState.total,
  cartCount: initialCartState.itemsCount,
  addToCart: (item: Product) => {},
  removeFromCart: (item: Product) => {},
})

interface CartProviderProps {
  children: React.ReactNode
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState)

  const addToCart = (item: Product) => {
    cartDispatch({
      type: CART_ACTIONS.ADD_ITEM,
      payload: item,
    })
  }

  const removeFromCart = (item: Product) => {
    cartDispatch({
      type: CART_ACTIONS.REMOVE_ITEM,
      payload: item,
    })
  }

  return (
    <CartContext.Provider
      value={{
        cartItems: cartState.items,
        cartTotal: cartState.total,
        cartCount: cartState.itemsCount,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}

export { CartProvider, useCart }
