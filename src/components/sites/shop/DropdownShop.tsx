import { useContext, useEffect, useRef } from 'react'
import { ItemsContext } from '../../../context/ItemsContext'
import { Link } from 'react-router-dom'

import { useMenu } from '../../../hooks/useMenu'

import { BsFilter } from 'react-icons/bs'

type Props = {}

const DropdownShop = (props: Props) => {
  const { items, categorys } = useContext(ItemsContext)

  const { isOpen, handleOpen, close } = useMenu()
  const ref = useRef<HTMLDivElement>(null)

  // close the menu when the user clicks outside the menu
  const handleClickOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      close()
    }
  }

  // close the menu when the user clicks outside the menu

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="flex items-center bg-zinc-200 text-zinc-700 flex-col relative"
    >
      <div className="flex w-full">
        <button
          className="flex items-center justify-center w-full h-full p-2 hover:bg-zinc-300"
          onClick={handleOpen}
        >
          <BsFilter className="text-2xl md:hidden" />
          <p className="hidden md:block font-bold">Filter</p>
        </button>
      </div>
      <div
        className={
          'bg-zinc-100 w-full transition-all ease-out duration-500 absolute top-full' +
          ' ' +
          (isOpen ? 'h-max' : 'h-0')
        }
      >
        {isOpen &&
          categorys.map((category, index) => (
            <Link
              className="w-full h-full text-center"
              to={`/shop/1/${category}`}
              key={index}
            >
              <button
                className="w-full text-center p-2 hover:bg-zinc-200"
                onClick={() => close()}
              >
                {removeAndCapitalize(category)}
              </button>
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
