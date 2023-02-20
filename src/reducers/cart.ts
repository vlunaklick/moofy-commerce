import { Product, ProductPurchased } from '../types/products'

export const initialCartState =
  {
    items: [] as ProductPurchased[],
    total: 0,
    itemsCount: 0,
  } || JSON.parse(localStorage.getItem('cart') || '{}')

const emptyCartState = {
  items: [] as ProductPurchased[],
  total: 0,
  itemsCount: 0,
}

interface CartState {
  items: ProductPurchased[]
  total: number
  itemsCount: number
}

interface CartAction {
  type: string
  payload: Product
}

export const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_CART: 'CLEAR_CART',
}

const saveCartToLocalStorage = (cart: CartState) => {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export const cartReducer = (state: CartState, action: CartAction) => {
  const { type, payload } = action

  switch (type) {
    case CART_ACTIONS.ADD_ITEM: {
      const itemIndex = state.items.findIndex(item => item.id === payload.id)

      if (itemIndex === -1) {
        const newState = {
          ...state,
          items: [...state.items, { ...payload, quantity: 1 }],
          total: state.total + payload.price,
          itemsCount: state.itemsCount + 1,
        }

        saveCartToLocalStorage(newState)

        return newState
      }

      const itemToUpdate = state.items[itemIndex]

      const newState = {
        ...state,
        items: state.items.map(item =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        total: state.total + itemToUpdate.price,
        itemsCount: state.itemsCount + 1,
      }

      saveCartToLocalStorage(newState)

      return newState
    }

    case CART_ACTIONS.REMOVE_ITEM: {
      const itemIndex = state.items.findIndex(item => item.id === payload.id)

      if (itemIndex === -1) {
        return state
      }

      const itemToUpdate = state.items[itemIndex]

      if (itemToUpdate.quantity > 1) {
        const newState = {
          ...state,
          items: state.items.map(item =>
            item.id === payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
          total: state.total - itemToUpdate.price,
          itemsCount: state.itemsCount - 1,
        }

        saveCartToLocalStorage(newState)

        return newState
      }

      const newState = {
        ...state,
        items: state.items.filter(item => item.id !== payload.id),
        total: state.total - itemToUpdate.price,
        itemsCount: state.itemsCount - 1,
      }

      saveCartToLocalStorage(newState)

      return newState
    }

    case CART_ACTIONS.CLEAR_CART: {
      saveCartToLocalStorage(emptyCartState)
      return emptyCartState
    }

    default: {
      return state
    }
  }
}
