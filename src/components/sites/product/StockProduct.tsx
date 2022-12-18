const classes = {
  green: 'bg-green-200 text-green-900 border border-green-200',
  red: 'bg-red-200 text-red-900 border border-red-200',
  yellow: 'bg-yellow-200 text-yellow-900 border border-yellow-200',
}

type Props = {
  stock?: number
}

const StockProduct = ({ stock }: Props) => {
  return (
    <div
      className={
        'right-2 w-max p-1 px-2 rounded-xl text-xs font-semibold' +
        ' ' +
        classes[stock === 0 ? 'red' : stock && stock < 3 ? 'yellow' : 'green']
      }
    >
      {stock === 0
        ? 'Out of stock'
        : stock && stock < 3
        ? 'Low stock'
        : 'In stock'}
    </div>
  )
}

export default StockProduct
