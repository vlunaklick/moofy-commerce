import { Link } from 'react-router-dom'

import { Product } from '../../../types/products'

import { ArrowLeft } from '../../icons/ArrowLeft'
import { ArrowRight } from '../../icons/ArrowRight'

type Props = {
  products: Product[]
  page: number
  category?: string
  specific?: string
}

const PaginationShop = ({ products, page, category, specific }: Props) => {
  let calcPages = Math.ceil(products.length / 6)

  return (
    <div className="flex items-center w-full gap-6 justify-center mt-4">
      <Link
        aria-label="Previous page"
        className={page === 1 ? 'cursor-default' : 'cursor-pointer'}
        to={
          page === 1
            ? `/shop/${page}${category ? `/${category}` : ''}${
                specific ? `/${specific}` : ''
              }`
            : `/shop/${page - 1}${category ? `/${category}` : ''}${
                specific ? `/${specific}` : ''
              }`
        }
      >
        <ArrowLeft
          className={
            'h-6 w-6 ' +
            (page === 1
              ? 'fill-zinc-200'
              : 'fill-zinc-700 hover:fill-zinc-800 cursor-pointer')
          }
        />
      </Link>
      <div className="cursor-pointer p-2 rounded-full bg-zinc-200 h-7 aspect-square flex items-center justify-center">
        <p>{page || page === 1}</p>
      </div>
      <Link
        aria-label="Next page"
        className={page === calcPages ? 'cursor-default' : 'cursor-pointer'}
        to={
          page === calcPages
            ? `/shop/${page}${category ? `/${category}` : ''}${
                specific ? `/${specific}` : ''
              }`
            : `/shop/${page + 1}${category ? `/${category}` : ''}${
                specific ? `/${specific}` : ''
              }`
        }
      >
        <ArrowRight
          className={
            'h-6 w-6 ' +
            (page === calcPages
              ? 'fill-zinc-200'
              : 'fill-zinc-700 hover:fill-zinc-800 cursor-pointer')
          }
        />
      </Link>
    </div>
  )
}

export default PaginationShop
