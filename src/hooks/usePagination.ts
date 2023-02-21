import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const ITEMS_PER_PAGE = 6

export const usePagination = (items: any[]) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchParams, setSearchParams] = useSearchParams()

  const maxPage = Math.ceil(items.length / ITEMS_PER_PAGE)

  useEffect(() => {
    const page = Number(searchParams.get('page'))

    if (page) {
      setCurrentPage(page)
    }
    // si la pagina es mayor a la cantidad de paginas llevar a la pagina error
    if (page > maxPage) {
      setCurrentPage(maxPage)
    }
  }, [searchParams, maxPage])

  const currentItems = items.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const goToPage = (page: number) => {
    setSearchParams({ page: page.toString() })
  }

  const getPageUrl = (page: number) => {
    return `?page=${page}`
  }

  const isNextPageAvailable = currentPage < maxPage

  const isPreviousPageAvailable = currentPage - 1 > 0

  return {
    currentItems,
    currentPage,
    goToPage,
    isNextPageAvailable,
    isPreviousPageAvailable,
    getPageUrl,
  }
}
