import { Link } from 'react-router-dom'

import { Product } from '../../types/products'

type Props = {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="col-span-1 flex flex-col gap-1">
      <Link
        className="h-full max-h-52 md:max-h-72"
        to={`/products/${product.category[0]}/${product.id}`}
      >
        <div className="bg-zinc-300 p-4 py-6 rounded-lg flex justify-center h-full">
          <img
            className="object-contain"
            src={product.image}
            alt={product.title}
          />
        </div>
      </Link>
      <div>
        <p className="font-semibold text-xs tetx-zinc-900 truncate">
          {product.title}
        </p>
        <p className="text-inc-800 text-[11px]">${product.price}</p>
      </div>
    </div>
  )
}

export default ProductCard
