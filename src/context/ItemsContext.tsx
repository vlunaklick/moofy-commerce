import { useState, createContext, useEffect } from 'react'

import { Product } from '../types/products'
import { ProductsBought } from '../types/productsBought'

const PRODUCTS = [
  {
    id: 1,
    title: 'GeForce 1050Ti GAMING X 4GB GDDR5',
    brand: 'Nvidia',
    image:
      'https://xtremegames.com.ar/wp-content/uploads/2022/02/product_7_20180411113751_5acd830f900d9.png',
    price: 53900,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    category: ['video-cards'],
    stock: 10,
    rating: 5,
    sold: 3,
  },
  {
    id: 2,
    title: 'Corsair T3 RUSH - Grey Edition - Gaming Chair',
    brand: 'Corsair',
    image:
      'https://img1.wsimg.com/isteam/ip/23fa9c27-3ad2-4099-a13a-f6ae803e79aa/ols/t3_rush_gray_white_fabric.png',
    price: 34999,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    category: ['peripherals', 'chairs'],
    stock: 3,
    rating: 4.2,
    sold: 2,
  },
  {
    id: 3,
    title: 'Razer Viper Mini - Ambidextrous Gaming Mouse WIRELESS',
    brand: 'Razer',
    image:
      'https://assets.razerzone.com/eeimages/support/products/1634/vipermini.png',
    price: 19999,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    category: ['peripherals', 'mouses'],
    stock: 5,
    rating: 4.5,
    sold: 1,
  },
  {
    id: 4,
    title: 'Logitech G213 Prodigy RGB Gaming Keyboard',
    brand: 'Logitech',
    image:
      'https://computelweb.com/wp-content/uploads/2021/02/g213-gallery-1.png',
    price: 19999,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    category: ['peripherals', 'keyboards'],
    stock: 5,
    rating: 4.5,
    sold: 1,
  },
  {
    id: 5,
    title: 'Logitech Brio 4K Pro Webcam',
    brand: 'Logitech',
    image:
      'https://resource.logitech.com/content/dam/logitech/en/products/webcams/brio/gallery/brio-gallery-2.png',
    price: 5999.9,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    category: ['peripherals'],
    stock: 5,
    rating: 4.7,
    sold: 1,
  },
  {
    id: 6,
    title: 'Logitech G Pro X Gaming Headset',
    brand: 'Logitech',
    image:
      'https://logitechar.vtexassets.com/arquivos/ids/157168-800-800?v=637064270447600000&width=800&height=800&aspect=true',
    price: 19999,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    category: ['peripherals', 'microphones'],
    stock: 5,
    rating: 4.5,
    sold: 1,
  },
  {
    id: 7,
    title: 'Blue Yeti Microphone Blue voice',
    brand: 'Logitech',
    image:
      'https://i.pinimg.com/originals/73/6a/7a/736a7afaf1b198259b95bbb5c3df529a.png',
    price: 19999,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    category: ['peripherals', 'microphones'],
    stock: 5,
    rating: 4.5,
    sold: 1,
  },
  {
    id: 8,
    title: 'HyperX Cloud Stinger Core - Gaming Headset',
    brand: 'HyperX',
    image:
      'https://logg.api.cygnus.market/static/Host/Global/logg/3d75d4c7fbb4429584b07afaa2defcba.png',
    price: 19999,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    category: ['peripherals', 'microphones'],
    stock: 5,
    rating: 4.5,
    sold: 1,
  },
  {
    id: 9,
    title: 'HyperX Cloud Stinger Core - Gaming Headset',
    brand: 'HyperX',
    image:
      'https://static.swappa.com/media/product/hyperx-quadcast/hyperx-quadcast-01.png',
    price: 19999,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    category: ['peripherals', 'microphones'],
    stock: 5,
    rating: 4.5,
    sold: 1,
  },
]

export const ItemsContext = createContext<{
  items: Product[]
  cart: ProductsBought[]
  categorys: string[]
  addCart?: (item: Product) => void
  removeCart?: (item: Product) => void
  clearCart?: () => void
  addStock?: (id: number) => void
  removeStock?: (id: number) => void
  restartStock?: () => void
}>({
  items: [],
  cart: [],
  categorys: [],
})

export const ItemProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<Product[]>(PRODUCTS)
  const [cart, setCart] = useState<ProductsBought[]>([])
  const [categorys, setCategorys] = useState<string[]>([])

  useEffect(() => {
    const categoryPrimary: string[] = []

    items.forEach(item => {
      if (!categoryPrimary.includes(item.category[0])) {
        categoryPrimary.push(item.category[0])
      }
    })
    setCategorys(categoryPrimary)
  }, [items])

  const addStock = (id: number) => {
    const newItem = items.map(item =>
      item.id === id ? { ...item, stock: item.stock + 1 } : item
    )
    setItems(newItem)
    localStorage.setItem('items', JSON.stringify(newItem))
  }

  const removeStock = (id: number) => {
    const newItem = items.map(item =>
      item.id === id ? { ...item, stock: item.stock - 1 } : item
    )
    setItems(newItem)
    localStorage.setItem('items', JSON.stringify(newItem))
  }

  const restartStock = () => {
    setItems(PRODUCTS)
    localStorage.setItem('items', JSON.stringify(PRODUCTS))
  }

  const addCart = (item: Product) => {
    const itemInCart = cart.find(cartItem => cartItem.id === item.id)
    if (itemInCart && itemInCart.quantity < item.stock) {
      setCart(
        cart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      )
    } else {
      setCart([...cart, { ...item, quantity: 1 }])
    }
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  const removeCart = (item: Product) => {
    const itemInCart = cart.find(cartItem => cartItem.id === item.id)
    if (itemInCart == undefined) return
    if (itemInCart.quantity === 1) {
      setCart(cart.filter(cartItem => cartItem.id !== item.id))
    } else {
      setCart(
        cart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      )
    }
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  const clearCart = () => {
    setCart([])
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  useEffect(() => {
    const cart = localStorage.getItem('cart')
    if (cart) {
      setCart(JSON.parse(cart))
    }
  }, [])

  return (
    <ItemsContext.Provider
      value={{
        items,
        addStock,
        removeStock,
        restartStock,
        cart,
        addCart,
        removeCart,
        clearCart,
        categorys,
      }}
    >
      {children}
    </ItemsContext.Provider>
  )
}
