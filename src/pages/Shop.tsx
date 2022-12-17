import { useContext, useEffect } from 'react'
import { ItemsContext } from '../context/ItemsContext'
import { useParams, useNavigate } from 'react-router-dom'

import Main from '../components/layouts/Main'
import Sections from '../components/layouts/Sections'
import ProductsGrid from '../components/sites/ProductsGrid'
import PaginationShop from '../components/sites/shop/PaginationShop'
import HeaderShop from '../components/sites/shop/HeaderShop'

type Props = {}

const Shop = (props: Props) => {
  const { items } = useContext(ItemsContext)
  const navigate = useNavigate()

  const { pagination } = useParams()

  let numberPage

  useEffect(() => {
    if (isNaN(Number(pagination))) {
      return navigate('/error')
    }
    let calcPages = Math.ceil(items.length / 6)
    if (Number(pagination) > calcPages) {
      return navigate('/error')
    }
  }, [])

  if (pagination) {
    numberPage = parseInt(pagination)
  } else {
    numberPage = 1
  }

  let itemsFiltered = items

  if (pagination) {
    const itemsPerPage = 6
    const page = parseInt(pagination)
    itemsFiltered = items.slice(itemsPerPage * (page - 1), itemsPerPage * page)
  } else {
    itemsFiltered = items.slice(0, 6)
  }

  return (
    <Main>
      <div className="md:max-w-[750px] mx-auto flex flex-col gap-6 w-full">
        <Sections>
          <HeaderShop />
          <ProductsGrid products={itemsFiltered} />
          <PaginationShop products={items} page={numberPage} />
        </Sections>
      </div>
    </Main>
  )
}

export default Shop
