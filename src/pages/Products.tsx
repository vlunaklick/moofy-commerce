import { useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { ItemsContext } from '../context/ItemsContext'
import Main from '../components/layouts/Main'
import Sections from '../components/layouts/Sections'
import ButtonProduct from '../components/sites/product/ButtonProduct'
import StockProduct from '../components/sites/product/StockProduct'
import { Product } from '../types/products'
import ProductsGrid from '../components/sites/ProductsGrid'

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

  const item = items.find(item => item.id === Number(id)) || items[0]

  const handleAdd = (item: Product) => {
    console.log(item.stock)
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

  const handleGoBack = () => {
    navigate(-1)
  }

  const addDot = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  return (
    <Main>
      <div className="md:max-w-[750px] mx-auto flex flex-col gap-6 w-full">
        <Sections>
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-zinc-800">Product</h1>
            <button
              onClick={() => handleGoBack()}
              className="text-xs text-emerald-500"
            >
              Go back -{'>'}
            </button>
          </div>
          <div className="flex flex-col md:flex-row justify-start gap-3">
            <div className="bg-zinc-300 p-4 py-6 rounded-lg flex justify-center h-[400px] relative">
              <p className="absolute bottom-3 font-medium text-zinc-900 bg-zinc-100 rounded-lg p-1 px-3">
                ${addDot(item?.price)}
              </p>
              <img
                className={'object-contain h-full w-full'}
                src={item?.image}
                alt={item?.title}
              />
            </div>
            <div className="flex flex-col md:w-[500px] justify-between gap-3">
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xl text-zinc-800">
                  {item?.title}
                </h2>
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
              products={items}
              limit={3}
              responsive={1}
              use={true}
            />
          </div>
        </Sections>
      </div>
    </Main>
  )
}

export default Products
