import { useItems } from '../context/Items'

import ProductsGrid from '../components/sites/ProductsGrid'
import HeaderShop from '../components/sites/shop/HeaderShop'
import { Pagination } from '../components/Pagination'
import { usePagination } from '../hooks/usePagination'

const Shop = () => {
  const { items } = useItems()

  const {
    currentItems,
    currentPage,
    isNextPageAvailable,
    isPreviousPageAvailable,
    getPageUrl,
  } = usePagination(items)

  return (
    <>
      <div className="flex flex-col justify-between h-full gap-3">
        <HeaderShop />

        <ProductsGrid products={currentItems} />

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

export default Shop
