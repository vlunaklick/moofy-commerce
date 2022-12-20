import { useContext } from 'react'
import { ItemsContext } from '../../../context/ItemsContext'

import { Product } from '../../../types/products'

const classes = {
  border:
    'bg-zinc-700 text-zinc-100 border border-zinc-700 hover:bg-zinc-800 hover:border-zinc-50',
  outline:
    'bg-zinc-50 text-zinc-800 border border-zinc-100 hover:bg-zinc-100 hover:border-zinc-200',
  danger:
    'bg-red-200 text-red-900 border border-red-200 hover:bg-red-300 hover:border-red-300',
  disabled:
    'bg-zinc-200 text-zinc-500 border border-zinc-200 cursor-not-allowed',
}

type Props = {
  item: Product
  onClick?: (item: Product) => void
  text?: string
  variant?: 'border' | 'danger' | 'outline'
  stock?: number
}

const ButtonProduct = ({
  item,
  onClick = (item: Product) => {},
  text = 'Button',
  variant = 'border',
  stock = 0,
}: Props) => {
  const { cart } = useContext(ItemsContext)

  const isInCart = cart.some(cartItem => cartItem.id === item.id)

  return (
    <button
      onClick={() => onClick(item)}
      className={
        classes[
          !isInCart && variant === 'outline'
            ? 'disabled'
            : stock > 0
            ? variant
            : variant === 'border'
            ? 'disabled'
            : variant
        ] +
        ' ' +
        'rounded-xl font-semibold py-2 px-5 cursor-pointer capitalize transition-colors'
      }
    >
      {text}
    </button>
  )
}

export default ButtonProduct
