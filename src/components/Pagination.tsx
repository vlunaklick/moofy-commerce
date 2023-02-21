import Link from './Link'

import { ArrowLeft } from './icons/ArrowLeft'
import { ArrowRight } from './icons/ArrowRight'

interface PaginationProps {
  currentPage: number
  isNextPageAvailable: boolean
  isPreviousPageAvailable: boolean
  getPageUrl: (page: number) => string
}

export function Pagination({
  currentPage,
  isNextPageAvailable,
  isPreviousPageAvailable,
  getPageUrl,
}: PaginationProps) {
  const isAvaible = (value: boolean) => {
    if (value) {
      return 'fill-zinc-700 hover:fill-zinc-800 cursor-pointer'
    } else {
      return 'fill-zinc-200'
    }
  }

  console.log
  return (
    <div className="flex items-center w-full gap-6 justify-center mt-4">
      <Link
        aria-label="Previous page"
        className={
          isPreviousPageAvailable ? 'cursor-pointer' : 'cursor-default'
        }
        to={getPageUrl(currentPage - 1)}
        disabled={!isPreviousPageAvailable}
      >
        <ArrowLeft
          className={'h-6 w-6 ' + isAvaible(isPreviousPageAvailable)}
        />
      </Link>
      <div className="cursor-pointer p-2 rounded-full bg-zinc-200 h-7 aspect-square flex items-center justify-center">
        <p>{currentPage}</p>
      </div>
      <Link
        aria-label="Next page"
        className={isNextPageAvailable ? 'cursor-pointer' : 'cursor-default'}
        to={getPageUrl(currentPage + 1)}
        disabled={!isNextPageAvailable}
      >
        <ArrowRight className={'h-6 w-6 ' + isAvaible(isNextPageAvailable)} />
      </Link>
    </div>
  )
}
