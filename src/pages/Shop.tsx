import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { useItems } from '../context/Items'

import ProductsGrid from '../components/sites/ProductsGrid'
import PaginationShop from '../components/sites/shop/PaginationShop'
import HeaderShop from '../components/sites/shop/HeaderShop'

const Shop = () => {
  const { items } = useItems()
  const navigate = useNavigate()

  const { pagination } = useParams()

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
  }, [pagination])

  if (pagination) {
    numberPage = parseInt(pagination)
  } else {
    numberPage = 1
  }

  let itemsFiltered = items

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
    <>
      <div className="flex flex-col justify-between h-full gap-3">
        <div className="flex flex-col gap-3">
          <HeaderShop />
          <ProductsGrid products={itemsFiltered} />
        </div>
        <PaginationShop products={items} page={numberPage} />
      </div>
    </>
  )
}

export default Shop
