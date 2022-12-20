import { Product } from '../../types/products'

import ProductCard from './ProductCard'

type Props = {
  products: Product[]
  limit?: number
  category?: string
  responsive?: number
  use?: boolean
  opu?: boolean
}

const ProductsGrid = ({
  products,
  limit = 0,
  category,
  responsive = 0,
  use = false,
  opu = false,
}: Props) => {
  let finalProducts = products || []

  if (category) {
    finalProducts = finalProducts.filter(product =>
      product.category.includes(category)
    )
  }

  if (limit) {
    finalProducts = finalProducts.slice(0, limit)
  }

  let number: number = 0

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {finalProducts.map(product => {
        number++
        return (
          <ProductCard
            key={product.id}
            product={product}
            hidden={use && number > responsive + 1}
            opu={opu}
          />
        )
      })}
    </div>
  )
}

export default ProductsGrid
