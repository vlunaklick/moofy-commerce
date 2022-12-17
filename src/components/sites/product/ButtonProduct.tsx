import { Product } from '../../../types/products'

const classes = {
  border:
    'bg-emerald-200 text-emerald-800 border border-emerald-200 hover:bg-emerald-300 hover:border-emerald-300',
  danger:
    'bg-red-200 text-red-900 border border-red-200 hover:bg-red-300 hover:border-red-300',
}

type Props = {
  item?: Product
  onClick?: (item: Product) => void
  text?: string
  variant?: 'border' | 'danger'
}

const ButtonProduct = ({
  item,
  onClick = () => {},
  text = 'Button',
  variant = 'border',
}: Props) => {
  const handleClick = () => {
    if (item) {
      onClick(item)
    }
  }

  return (
    <button
      onClick={handleClick}
      className={
        classes[variant] +
        ' ' +
        'rounded-2xl font-semibold py-2 px-5 cursor-pointer capitalize transition-colors'
      }
    >
      {text}
    </button>
  )
}

export default ButtonProduct
