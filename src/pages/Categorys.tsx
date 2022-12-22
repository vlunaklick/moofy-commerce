import { useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { ItemsContext } from '../context/ItemsContext'

import ProductsGrid from '../components/sites/ProductsGrid'
import PaginationShop from '../components/sites/shop/PaginationShop'
import HeaderShop from '../components/sites/shop/HeaderShop'

const Categorys = () => {
  const { items, categorys } = useContext(ItemsContext)
  const navigate = useNavigate()

  const { pagination, category, specific } = useParams()

  let numberPage

  useEffect(() => {
    let calcPages = Math.ceil(items.length / 6)
    if (
      isNaN(Number(pagination)) ||
      Number(pagination) > calcPages ||
      Number(pagination) < 1
    ) {
      return navigate('/error')
    } else if (category && !categorys.includes(category)) {
      return navigate('/error', { replace: true })
    }
  }, [pagination, category, specific])

  if (pagination) {
    numberPage = parseInt(pagination)
  } else {
    numberPage = 1
  }

  let itemsCategory = items

  if (category) {
    itemsCategory = items.filter(item => item.category.includes(category))
  }

  let categorysOn: string[] = []

  useEffect(() => {
    itemsCategory.forEach(item => {
      item.category.forEach(category => {
        if (!categorysOn.includes(category)) {
          categorysOn.push(category)
        }
      })
    })
  }, [])

  if (specific) {
    itemsCategory = itemsCategory.filter(item =>
      item.category.includes(specific)
    )
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
    <>
      <div className="flex flex-col justify-between h-full gap-3">
        <div className="flex flex-col gap-3">
          <HeaderShop />
          <ProductsGrid products={itemsFiltered} />
        </div>
        <PaginationShop
          products={itemsCategory}
          page={numberPage}
          category={category}
          specific={specific}
        />
      </div>
    </>
  )
}

export default Categorys
