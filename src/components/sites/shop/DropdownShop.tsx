import { Link } from 'react-router-dom'

import { useItems } from '../../../context/Items'

import { useMenu } from '../../../hooks/useMenu'

import { Filter } from '../../icons/Filter'

const DropdownShop = () => {
  const { categorys } = useItems()

  const { isOpen, handleOpen, close, ref } = useMenu()

  return (
    <div
      ref={ref}
      className="flex items-center bg-zinc-200 text-zinc-700 flex-col md:overflow-x-auto relative"
    >
      <button
        aria-label={'Filter'}
        className="flex items-center justify-center w-full h-full p-2 hover:bg-zinc-300 md:hidden"
        onClick={handleOpen}
      >
        <Filter className="h-6 w-6 md:hidden" />
        <p className="hidden md:block font-bold">Filter</p>
      </button>
      <div
        className={
          (isOpen ? '' : 'hidden ') +
          'bg-zinc-100 w-full transition-all ease-out duration-500 absolute top-full flex flex-col md:flex-row md:static md:min-w-full md:flex'
        }
      >
        {categorys.map((category, index) => (
          <Link
            className="w-full h-full text-center p-2 hover:bg-zinc-200 md:min-w-[145px] flex-1"
            to={`/shop/${category}`}
            key={index}
            onClick={() => close()}
            aria-label={category}
          >
            {removeAndCapitalize(category)}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default DropdownShop

function removeAndCapitalize(str: string) {
  return str.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
}
