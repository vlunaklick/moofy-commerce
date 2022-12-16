import { useMenu } from '../../hooks/useMenu'

import { CgMenu, CgShoppingCart } from 'react-icons/cg'

type Props = {}

function Nav({}: Props) {
  const { isOpen, handleOpen, close } = useMenu()

  return (
    <nav className="w-full py-4 flex flex-col md:flex-row md:justify-between md:items-center relative">
      <div className="flex justify-between">
        <h1 className="font-bold text-4xl text-zinc-900">
          Moo
          <span className="text-emerald-500">fy</span>
        </h1>
        <div>
          <CgMenu
            onClick={() => handleOpen()}
            className={`md:hidden text-4xl text-zinc-900 cursor-pointer transition-transform ${
              isOpen ? 'transform rotate-90' : ''
            }`}
          />
        </div>
      </div>
      <div>
        <ul className="hidden md:flex gap-24 text-zinc-900 font-medium">
          <li className="cursor-pointer group">
            About
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-zinc-900"></span>
          </li>
          <li className="cursor-pointer group">
            Shop
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-zinc-900"></span>
          </li>
          <li className="cursor-pointer">
            <CgShoppingCart className="inline-block text-2xl" />
          </li>
        </ul>
      </div>
      {isOpen && (
        <ul className="flex flex-col md:hidden text-lg text-center absolute bg-zinc-50 w-full top-full ">
          <li
            className="p-3 cursor-pointer border-zinc-50 border-8"
            onClick={() => handleOpen()}
          >
            About
          </li>
          <li
            className="p-3 cursor-pointer border-zinc-50 border-8"
            onClick={() => handleOpen()}
          >
            Shop
          </li>
          <li
            className="p-3 cursor-pointer border-zinc-50 border-8"
            onClick={() => handleOpen()}
          >
            <CgShoppingCart className="inline-block text-2xl" />
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Nav
