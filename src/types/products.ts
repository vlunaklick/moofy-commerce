export type Product = {
  id: number
  title: string
  brand: string
  image: string
  price: number
  description: string
  category: string[]
  stock: number
  rating: number
  sold: number
}

export type ProductPurchased = {
  id: number
  title: string
  brand: string
  image: string
  price: number
  description: string
  category: string[]
  stock: number
  rating: number
  sold: number
  quantity: number
}
