import { useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { ItemsContext } from '../context/ItemsContext'
import Main from '../components/layouts/Main'
import Sections from '../components/layouts/Sections'
import ButtonProduct from '../components/sites/product/ButtonProduct'
import StockProduct from '../components/sites/product/StockProduct'
import { Product } from '../types/products'

type Props = {}

const Products = (props: Props) => {
  const navigate = useNavigate()

  const { items, addCart, removeCart, removeStock, addStock, cart } =
    useContext(ItemsContext)

  const { id } = useParams()

  useEffect(() => {
    if (
      id !== undefined &&
      isNaN(Number(id)) &&
      !items.map(item => item.id).includes(Number(id))
    ) {
      return navigate(`/error`)
    }
  }, [])

  const item = items.find(item => item.id === Number(id))

  const handleAdd = (item: Product) => {
    if (item.stock > 0) {
      addCart(item)
      removeStock(item.id)
    }
  }

  const handleRemove = (item: Product) => {
    const itemFound = cart.find(item => item.id === Number(id))
    if (itemFound) {
      removeCart(itemFound)
      addStock(itemFound.id)
    }
  }

  return (
    <Main>
      <div className="md:max-w-[750px] mx-auto flex flex-col gap-6 w-full">
        <Sections>
          <div className="bg-zinc-300 p-4 py-6 rounded-lg flex justify-center h-full relative">
            <StockProduct stock={item?.stock} />
            <img src={item?.image} alt={item?.title} />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-bold text-xl text-zinc-800">{item?.title}</h2>
            <p className="text-xs text-zinc-500">{item?.description}</p>
          </div>
          <div className="flex gap-2 mx-auto mt-2">
            <ButtonProduct
              item={item}
              text={'Add to cart'}
              onClick={handleAdd}
            />
            <ButtonProduct
              item={item}
              variant="danger"
              text="Remove"
              onClick={handleRemove}
            />
          </div>
        </Sections>
      </div>
    </Main>
  )
}

export default Products
