import { Link } from 'react-router-dom'
import { CgMenu, CgShoppingCart } from 'react-icons/cg'
import { useContext } from 'react'

import { ItemsContext } from '../../context/ItemsContext'
import { useMenu } from '../../hooks/useMenu'

function Nav() {
  const { cart } = useContext(ItemsContext)

  const { isOpen, handleOpen, close, ref } = useMenu()

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <nav
      ref={ref}
      className="w-full py-4 flex flex-col md:flex-row md:justify-between md:items-center relative"
    >
      <div className="flex justify-between">
        <Link to="/">
          <h1 className="font-bold text-4xl text-zinc-900">
            Moo
            <span className="text-emerald-500">fy</span>
          </h1>
        </Link>
        <div>
          <CgMenu
            onClick={() => handleOpen()}
            className={`md:hidden text-4xl text-zinc-900 cursor-pointer transition-transform ${
              isOpen ? 'transform -rotate-90' : ''
            }`}
          />
        </div>
      </div>
      <ul className="hidden md:flex gap-24 text-zinc-900 font-medium">
        <li className="cursor-pointer group">
          <Link to={'/about'}>
            About
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-zinc-900"></span>
          </Link>
        </li>
        <li className="cursor-pointer group">
          <Link to={'/shop/1'}>
            Shop
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-zinc-900"></span>
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to={'/cart'} className="flex justify-between w-full relative">
            <CgShoppingCart className="inline-block text-2xl" />
            <span className="text-[8px] w-4 rounded-full bg-zinc-500 text-white aspect-square flex items-center justify-center absolute -right-[5px] -top-1">
              {totalItems}
            </span>
          </Link>
        </li>
      </ul>
      {isOpen && (
        <ul className="flex flex-col md:hidden text-lg text-center absolute bg-zinc-50 w-full top-full z-50 ">
          <Link to={'/about'}>
            <li className="p-3 cursor-pointer" onClick={() => close()}>
              About
            </li>
          </Link>
          <Link to={'/shop/1'}>
            <li
              className="p-3 cursor-pointer border-zinc-100 border-t-2"
              onClick={() => close()}
            >
              Shop
            </li>
          </Link>
          <Link to={'/cart'}>
            <li
              className="p-3 cursor-pointer border-zinc-100 border-t-2 flex items-center gap-1 w-full justify-center"
              onClick={() => close()}
            >
              <CgShoppingCart className="inline-block text-2xl" />
              <span className="text-[9px] w-5 h-5 rounded-full bg-zinc-500 text-white aspect-square flex items-center justify-center">
                {totalItems}
              </span>
            </li>
          </Link>
        </ul>
      )}
    </nav>
  )
}

export default Nav
