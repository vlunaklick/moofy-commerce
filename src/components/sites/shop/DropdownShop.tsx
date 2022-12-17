import { useContext } from 'react'
import { ItemsContext } from '../../../context/ItemsContext'
import { Link } from 'react-router-dom'

import { useMenu } from '../../../hooks/useMenu'

import { BsFilter } from 'react-icons/bs'

type Props = {}

const DropdownShop = (props: Props) => {
  const { items } = useContext(ItemsContext)

  const categoryPrimary: string[] = []

  items.forEach(item => {
    if (!categoryPrimary.includes(item.category[0])) {
      categoryPrimary.push(item.category[0])
    }
  })

  const { isOpen, handleOpen, close } = useMenu()
  return (
    <div className="flex items-center px-2 bg-zinc-100 text-zinc-700 lg:py-0 py-3 flex-col">
      <div className="flex lg:hidden w-full">
        <button
          className="flex items-center justify-center w-full h-full"
          onClick={handleOpen}
        >
          <BsFilter className="text-2xl" />
        </button>
      </div>
      {isOpen &&
        categoryPrimary.map((category, index) => (
          <Link to={`/shop/1/${category}`} key={index}>
            <button
              className="w-full h-full p-3 text-left"
              onClick={() => close()}
            >
              {removeAndCapitalize(category)}
            </button>
          </Link>
        ))}
    </div>
  )
}

export default DropdownShop

function removeAndCapitalize(str: string) {
  return str.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
}
