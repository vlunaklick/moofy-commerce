import { ProductsBought } from '../types/productsBought'
import { Product } from '../types/products'

export const initialCartState = {
  items: [] as ProductsBought[],
  total: 0,
  itemsCount: 0,
}

interface CartState {
  items: ProductsBought[]
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
  RESET_CART: 'RESET_CART',
}

export const cartReducer = (state: CartState, action: CartAction) => {
  const { type, payload } = action

  switch (type) {
    case CART_ACTIONS.ADD_ITEM: {
      const itemIndex = state.items.findIndex(item => item.id === payload.id)

      if (itemIndex === -1) {
        return {
          ...state,
          items: [...state.items, { ...payload, quantity: 1 }],
          total: state.total + payload.price,
          itemsCount: state.itemsCount + 1,
        }
      }

      const itemToUpdate = state.items[itemIndex]

      return {
        ...state,
        items: state.items.map(item =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        total: state.total + itemToUpdate.price,
        itemsCount: state.itemsCount + 1,
      }
    }

    case CART_ACTIONS.REMOVE_ITEM: {
      const itemIndex = state.items.findIndex(item => item.id === payload.id)

      if (itemIndex === -1) {
        return state
      }

      const itemToUpdate = state.items[itemIndex]

      if (itemToUpdate.quantity > 1) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
          total: state.total - itemToUpdate.price,
          itemsCount: state.itemsCount - 1,
        }
      }

      return {
        ...state,
        items: state.items.filter(item => item.id !== payload.id),
        total: state.total - itemToUpdate.price,
        itemsCount: state.itemsCount - 1,
      }
    }

    case CART_ACTIONS.RESET_CART: {
      return initialCartState
    }

    default: {
      return state
    }
  }
}
