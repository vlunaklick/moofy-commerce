import { Product } from '../../types/products'
import ProductCard from './ProductCard'

type Props = {
  products: Product[]
  limit?: number
  category?: string
}

const ProductsGrid = ({ products, limit, category }: Props) => {
  let finalProducts = products || []

  if (category) {
    finalProducts = finalProducts.filter(product =>
      product.category.includes(category)
    )
  }

  if (limit) {
    finalProducts = finalProducts.slice(0, limit)
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {finalProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductsGrid
