import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { useItems } from '../context/Items'
import { usePagination } from '../hooks/usePagination'

import HeaderShop from '../components/sites/shop/HeaderShop'
import ProductsGrid from '../components/sites/ProductsGrid'
import { Pagination } from '../components/Pagination'

const Categorys = () => {
  const { items, categorys } = useItems()
  const navigate = useNavigate()

  const { category } = useParams()

  useEffect(() => {
    if (
      category !== undefined &&
      !categorys.map(item => item).includes(category)
    ) {
      return navigate(`/not-found`)
    }
  }, [])

  const filteredItems = items.filter(item =>
    item.category.includes(category || '')
  )

  const {
    currentItems,
    currentPage,
    isNextPageAvailable,
    isPreviousPageAvailable,
    getPageUrl,
  } = usePagination(filteredItems)

  return (
    <>
      <div className="flex flex-col justify-between h-full gap-3">
        <div className="flex flex-col gap-3">
          <HeaderShop />
          <ProductsGrid products={currentItems} />
        </div>

        <Pagination
          currentPage={currentPage}
          getPageUrl={getPageUrl}
          isNextPageAvailable={isNextPageAvailable}
          isPreviousPageAvailable={isPreviousPageAvailable}
        />
      </div>
    </>
  )
}

export default Categorys
