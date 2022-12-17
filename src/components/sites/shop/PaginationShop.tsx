import { Link } from 'react-router-dom'

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { Product } from '../../../types/products'

type Props = {
  products: Product[]
  page: number
  category: string
}

const PaginationShop = ({ products, page, category }: Props) => {
  let calcPages = Math.ceil(products.length / 6)

  return (
    <div className="flex items-center w-full gap-6 justify-center mt-4">
      <Link
        to={
          page === 1
            ? `/shop/${page}${category ? `/${category}` : ''}`
            : `/shop/${page - 1}${category ? `/${category}` : ''}`
        }
      >
        <MdKeyboardArrowLeft
          className={
            'text-2xl ' +
            (page === 1
              ? 'text-zinc-200'
              : 'text-zinc-700 hover:text-zinc-800 cursor-pointer')
          }
        />
      </Link>
      <div className="cursor-pointer p-2 rounded-full bg-zinc-200 h-7 aspect-square flex items-center justify-center">
        <p>{page || page === 1}</p>
      </div>
      <Link
        to={
          page === calcPages
            ? `/shop/${page}${category ? `/${category}` : ''}`
            : `/shop/${page + 1}${category ? `/${category}` : ''}`
        }
      >
        <MdKeyboardArrowRight
          className={
            'text-2xl ' +
            (page === calcPages
              ? 'text-zinc-200'
              : 'text-zinc-700 hover:text-zinc-800 cursor-pointer')
          }
        />
      </Link>
    </div>
  )
}

export default PaginationShop
