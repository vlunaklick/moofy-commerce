import { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { ItemsContext } from '../context/Items'
import { useCart } from '../context/Cart'
import { Product } from '../types/products'
import parseMoney from '../utils/parseMoney'

import Sections from '../components/layouts/Sections'
import ButtonProduct from '../components/sites/product/ButtonProduct'
import StockProduct from '../components/sites/product/StockProduct'
import ProductsGrid from '../components/sites/ProductsGrid'
import GoBack from '../components/app/GoBack'

const Products = () => {
  const navigate = useNavigate()

  const { cartItems, addToCart, removeFromCart } = useCart()

  const { items, removeStock, addStock } = useContext(ItemsContext)

  const { id } = useParams()

  const [filteredItems, setFilteredItems] = useState<Product[]>([])

  useEffect(() => {
    if (
      id !== undefined &&
      isNaN(Number(id)) &&
      !items.map(item => item.id).includes(Number(id))
    ) {
      return navigate(`/not-found`)
    }
  }, [])

  const item = items.find(item => item.id === Number(id)) || items[0]

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

  const handleGoBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    const filtered = items.filter(item => item.id !== Number(id))
    const mixed = filtered.sort(() => Math.random() - 0.5)
    setFilteredItems(mixed)
  }, [id])

  return (
    <>
      <Sections>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-zinc-800">Product</h1>
          <GoBack onClick={handleGoBack} />
        </div>
        <div className="flex flex-col md:flex-row justify-start gap-3">
          <div className="bg-zinc-300 p-4 py-6 rounded-lg flex justify-center h-[400px] relative md:w-[374px]">
            <p className="absolute bottom-3 font-medium text-zinc-900 bg-zinc-100 rounded-lg p-1 px-3">
              ${parseMoney(item?.price)}
            </p>
            <img
              decoding="async"
              loading="lazy"
              className={'object-contain h-full w-full'}
              src={item?.image}
              alt={item?.title}
            />
          </div>
          <div className="flex flex-col md:w-[500px] justify-between gap-3">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-xl text-zinc-800">{item?.title}</h2>
              <StockProduct stock={item?.stock} />
              <p className="text-xs text-zinc-500">{item?.description}</p>
            </div>
            <div className="flex gap-2 mx-auto mt-2 md:mx-0">
              <ButtonProduct
                item={item}
                text={'Add to cart'}
                onClick={handleAdd}
                stock={item?.stock}
              />
              <ButtonProduct
                item={item}
                variant="outline"
                text="Remove"
                onClick={handleRemove}
                stock={item?.stock}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <h2 className="text-3xl font-bold text-zinc-800">Other products</h2>
          <ProductsGrid
            products={filteredItems}
            limit={3}
            responsive={1}
            use={true}
          />
        </div>
      </Sections>
    </>
  )
}

export default Products
