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
    price: 53900.76,
    description:
      'The NVIDIA GeForce GTX 1050 Ti is a mid-range graphics card that was released in October 2016. It is based on the Pascal architecture and uses the GP107 chip, which is manufactured using a 14nm process. The card is equipped with 768 CUDA cores and has a base clock speed of 1290 MHz, which can be boosted up to 1392 MHz. It has 4GB of GDDR5 memory and a memory clock speed of 7.00 GHz. The card has a power draw of 75 watts and requires a single 6-pin PCI-E power connector. It supports features such as Nvidia Ansel, G-Sync, and GPU Boost 3.0. The GTX 1050 Ti is capable of running most modern games at high settings and resolutions, making it a good choice for gamers on a budget.',
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
      'The Corsair T3 RUSH is a gaming chair designed for comfort and style. It features a racing-inspired design with a high backrest, comfortable padding, and adjustable lumbar support. The chair is made with a durable steel frame and has a weight capacity of up to 330 pounds. It has a 360-degree swivel base and is adjustable in height using a pneumatic lift. The T3 RUSH also has 4D adjustable armrests and a recline function that allows you to find the perfect seating position. The chair is upholstered in durable fabric and is available in multiple color options. It is suitable for long gaming sessions and office use.',
    category: ['peripherals', 'chairs'],
    stock: 1,
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
      'The Razer Viper Mini is a lightweight gaming mouse designed for fast and precise gameplay. It features an 8500 DPI optical sensor that is capable of tracking at high speeds and with high accuracy. The mouse has a total of 8 programmable buttons that can be customized using the Razer Synapse software. It has a durable drag-free cord and is equipped with Razer Chroma lighting that can be customized with 16.8 million colors. The Viper Mini is designed with a ambidextrous shape and has textured grips for added comfort and control. It weighs in at just 61 grams, making it one of the lightest gaming mice on the market. The mouse is suitable for a wide range of games and is compatible with Windows, Mac, and Linux operating systems.',
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
      'The Logitech G213 Prodigy is a gaming keyboard designed for performance and durability. It features a spill-resistant design and is built with a durable plastic casing. The keyboard has a full-size layout with a numeric keypad and customizable RGB lighting. It is equipped with a high-performance gaming key switch that provides a fast and responsive feel. The G213 also has dedicated media keys and a volume dial for easy control of audio and video playback. It is compatible with Windows and Mac operating systems and can be customized using the Logitech Gaming Software. The keyboard is suitable for both gaming and general use.',
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
      'The Logitech BRIO 4K Pro is a high-quality webcam designed for professional use. It features a 4K Ultra HD resolution and uses a high dynamic range (HDR) sensor to capture clear and detailed video. The webcam has a wide field of view and can automatically adjust to different lighting conditions. It is equipped with a 5x digital zoom and has a built-in microphone with noise cancelling technology for clear audio. The BRIO 4K Pro is compatible with Windows and Mac operating systems and has multiple connectivity options including USB-A and USB-C. It is suitable for video conferencing, streaming, and recording. The webcam can be mounted on a tripod or attached to a monitor using the included clip.',
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
      'The Logitech G Pro X is a gaming headset designed for comfort and audio quality. It features a lightweight design and has ear cups with a soft memory foam padding that conforms to the shape of your ears. The headset is equipped with a detachable boom microphone that has a noise-canceling feature for clear in-game communication. It has a flexible headband and is adjustable in height to find the perfect fit. The G Pro X is compatible with PC, Mac, and gaming consoles and has a 3.5mm audio jack for easy connectivity. It is suitable for a wide range of games and can also be used for music listening and voice chat. The headset is available in black or white color options.',
    category: ['peripherals', 'microphones'],
    stock: 0,
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
      'The Blue Yeti is a professional-grade USB microphone designed for recording and streaming. It features a tri-capsule design that allows you to choose between four different polar patterns: cardioid, omnidirectional, bidirectional, and stereo. The microphone has a built-in headphone amplifier and a volume control dial for easy monitoring. It is compatible with Windows and Mac operating systems and can be used with a wide range of recording software. The Yeti also has a durable metal construction and a stylish design. It is suitable for recording vocals, instruments, podcasts, and streaming. The microphone is available in multiple colors including black, silver, and white.',
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
      'The HyperX Cloud Stinger Core is a gaming headset designed for comfort and audio quality. It features a lightweight design and has ear cups with a soft memory foam padding that conforms to the shape of your ears. The headset is equipped with a flexible, detachable boom microphone that has noise-cancelling technology for clear in-game communication. It has a flexible headband and is adjustable in height to find the perfect fit. The Cloud Stinger Core is compatible with PC, Mac, and gaming consoles and has a 3.5mm audio jack for easy connectivity. It is suitable for a wide range of games and can also be used for music listening and voice chat. The headset is available in black or white color options.',
    category: ['peripherals', 'microphones'],
    stock: 5,
    rating: 4.5,
    sold: 1,
  },
  {
    id: 9,
    title: 'HyperX Quadcast - Gaming Microphone',
    brand: 'HyperX',
    image:
      'https://static.swappa.com/media/product/hyperx-quadcast/hyperx-quadcast-01.png',
    price: 19999,
    description:
      'The HyperX Quadcast is a professional-grade USB microphone designed for recording and streaming. It features a four-capsule design that allows you to choose between four different polar patterns: cardioid, omnidirectional, bidirectional, and stereo. The microphone has a built-in headphone amplifier and a volume control dial for easy monitoring. It is compatible with Windows and Mac operating systems and can be used with a wide range of recording software. The Quadcast also has a durable metal construction and a stylish design. It is suitable for recording vocals, instruments, podcasts, and streaming. The microphone is available in multiple colors including black, silver, and white.',
    category: ['peripherals', 'microphones'],
    stock: 5,
    rating: 4.5,
    sold: 1,
  },
  {
    id: 10,
    title: 'GeForce RTX 3080',
    brand: 'Nvidia',
    image:
      'https://www.venex.com.ar/products_images/1601906116_product_10_20200902111548_5f4f0e648ab77.png',
    price: 19999,
    description:
      'The GeForce RTX 3080 is a high-end graphics card designed for gaming. It features a Turing GPU architecture and has 8704 CUDA cores. The card has a base clock speed of 1440 MHz and a boost clock speed of 1710 MHz. It has 10GB of GDDR6X memory and a memory bandwidth of 760 GB/s. The RTX 3080 is equipped with a 320-bit memory interface and has a maximum power consumption of 320W. It is compatible with PCI Express 4.0 and has a dual-slot cooling solution. The card is suitable for 4K gaming and can also be used for video editing and rendering. The RTX 3080 is available in multiple colors including black, white, and red.',
    category: ['video-cards'],
    stock: 2,
    rating: 4.1,
    sold: 20,
  },
  {
    id: 11,
    title: 'AMD Ryzen 9 5900X',
    brand: 'AMD',
    image:
      'https://www.amd.com/system/files/2020-09/616656-amd-ryzen-9-5000-series-PIB-1260x709_0.png',
    price: 27040,
    description:
      'The AMD Ryzen 9 5900X is a high-end processor designed for gaming and content creation. It features a Zen 3 architecture and has 12 cores and 24 threads. The processor has a base clock speed of 3.7 GHz and a boost clock speed of 4.8 GHz. It has a 105W TDP and is compatible with AM4 motherboards. The 5900X is equipped with 64MB of L3 cache and has a 128-bit memory interface. It is suitable for 4K gaming and can also be used for video editing and rendering. The Ryzen 9 5900X is available in multiple colors including black, white, and red.',
    category: ['processors'],
    stock: 5,
    rating: 4,
    sold: 1,
  },
  {
    id: 12,
    title: 'Aorus Z590 Pro AX - Motherboard',
    brand: 'Gigabyte',
    image: 'https://www.venex.com.ar/products_images/1624557226_1.png',
    price: 19999,
    description:
      'The Aorus Z590 Pro AX is a high-end motherboard designed for gaming. It features an Intel Z590 chipset and has a 12+2 phase power design. The board has a 10Gbps Intel AX201 Wi-Fi 6 module and a 2.5Gbps Intel I225-V Ethernet controller. It has a total of 10 USB ports and is equipped with a 3.5mm audio jack. The motherboard has a 2.5-slot M.2 slot and a 3.5-slot PCIe x16 slot. It is compatible with Intel 11th Gen processors and has a 12-phase power design. The Aorus Z590 Pro AX is suitable for 4K gaming and can also be used for video editing and rendering. The motherboard is available in multiple colors including black, white, and red.',
    category: ['motherboards'],
    stock: 5,
    rating: 4.9,
    sold: 1,
  },
  {
    id: 13,
    title: 'Corsair Vengeance LPX 16GB (2x8GB) DDR4 3200MHz',
    brand: 'Corsair',
    image:
      'https://www.corsair.com/medias/sys_master/images/images/h12/hc6/8847631450142/-CMK16GX4M2B3200C16-Gallery-VENG-LPX-BLK-00.png',
    price: 19999,
    description:
      'The Corsair Vengeance LPX is a high-performance memory module designed for gaming. It features a 16GB capacity and has a 3200MHz clock speed. The module has a 1.35V operating voltage and is compatible with Intel and AMD motherboards. It is equipped with a heat spreader and has a 288-pin DIMM form factor. The Vengeance LPX is suitable for 4K gaming and can also be used for video editing and rendering. The memory module is available in multiple colors including black, white, and red.',
    category: ['memorys'],
    stock: 5,
    rating: 3.7,
    sold: 1,
  },
  {
    id: 14,
    title: 'I9-11900K - Processor Intel Core 11 Gen',
    brand: 'Intel',
    image:
      'https://www.sense.lk/images/uploads/product/58731_1053_INTEL-CORE-i9-11900-PROCESSOR.png',
    price: 19999,
    description:
      'The Intel Core i9-11900K is a high-end processor designed for gaming and content creation. It features a Comet Lake-S architecture and has 8 cores and 16 threads. The processor has a base clock speed of 3.5 GHz and a boost clock speed of 5.3 GHz. It has a 125W TDP and is compatible with LGA 1200 motherboards. The 11900K is equipped with 16MB of L3 cache and has a 128-bit memory interface. It is suitable for 4K gaming and can also be used for video editing and rendering. The Core i9-11900K is available in multiple colors including black, white, and red.',
    category: ['processors'],
    stock: 5,
    rating: 4.5,
    sold: 1,
  },
]

export const ItemsContext = createContext<{
  items: Product[]
  cart: ProductsBought[]
  categorys: string[]
  addCart: (item: Product) => void
  removeCart: (item: Product) => void
  clearCart: () => void
  addStock: (id: number) => void
  removeStock: (id: number) => void
  restartStock: () => void
}>({
  items: [],
  cart: [],
  categorys: [],
  addCart: () => {},
  removeCart: () => {},
  clearCart: () => {},
  addStock: () => {},
  removeStock: () => {},
  restartStock: () => {},
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
  }

  const removeStock = (id: number) => {
    const newItem = items.map(item =>
      item.id === id && item.stock > 0
        ? { ...item, stock: item.stock - 1 }
        : item
    )
    setItems(newItem)
  }

  const restartStock = () => {
    setItems(PRODUCTS)
  }

  const addCart = (item: Product) => {
    const itemInCart = cart.find(cartItem => cartItem.id === item.id)
    if (itemInCart && itemInCart.quantity < itemInCart.stock) {
      setCart(
        cart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      )
    } else if (!itemInCart) {
      setCart([...cart, { ...item, quantity: 1 }])
    }
  }

  const removeCart = (item: Product) => {
    const itemInCart = cart.find(cartItem => cartItem.id === item.id)
    if (itemInCart === undefined) return
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
  }

  const clearCart = () => {
    setCart([])
  }

  useEffect(() => {
    const cart = localStorage.getItem('cart')
    if (cart) {
      setCart(JSON.parse(cart))
    }
    const items = localStorage.getItem('items')
    if (items) {
      setItems(JSON.parse(items))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

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
