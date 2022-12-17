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
  const { items, categorys } = useContext(ItemsContext)
  const navigate = useNavigate()

  const { pagination, category } = useParams()

  let numberPage

  useEffect(() => {
    let calcPages = Math.ceil(items.length / 6)
    if (
      isNaN(Number(pagination)) ||
      Number(pagination) > calcPages ||
      Number(pagination) < 1
    ) {
      return navigate('/error')
    }
    if (category !== undefined && !categorys.includes(category)) {
      return navigate(`/error`)
    }
  }, [])

  if (pagination) {
    numberPage = parseInt(pagination)
  } else {
    numberPage = 1
  }

  let itemsCategory = items

  if (category) {
    itemsCategory = items.filter(item => item.category.includes(category))
  }

  let itemsFiltered = itemsCategory

  if (pagination) {
    const itemsPerPage = 6
    const page = parseInt(pagination)
    itemsFiltered = itemsFiltered.slice(
      itemsPerPage * (page - 1),
      itemsPerPage * page
    )
  } else {
    itemsFiltered = itemsFiltered.slice(0, 6)
  }

  return (
    <Main>
      <div className="md:max-w-[750px] mx-auto flex flex-col gap-6 w-full">
        <Sections>
          <HeaderShop />
          <ProductsGrid products={itemsFiltered} />
          <PaginationShop
            products={itemsCategory}
            page={numberPage}
            category={category}
          />
        </Sections>
      </div>
    </Main>
  )
}

export default Shop
