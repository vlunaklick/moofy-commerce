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
        'absolute right-2 top-2 p-2 px-3 rounded-xl text-xs font-semibold' +
        ' ' +
        classes[stock === 0 ? 'red' : stock === 1 ? 'yellow' : 'green']
      }
    >
      {stock === 0 ? 'Out of stock' : stock === 1 ? 'Last stock' : 'In stock'}
    </div>
  )
}

export default StockProduct
