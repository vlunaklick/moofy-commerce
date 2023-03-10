import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import parseMoney from '../../../utils/parseMoney'

import { Product } from '../../../types/products'
import ButtonProduct from '../product/ButtonProduct'

type Props = {
  item: Product
  handleAdd: (item: Product) => void
  handleRemove: (item: Product) => void
  quantity: number
}

const ProductCardShop = ({
  item,
  handleAdd,
  handleRemove,
  quantity,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
      className="flex gap-2 text-zinc-800"
    >
      <Link
        to={`/products/${item?.category[0]}/${item?.id}`}
        className="aspect-square bg-zinc-300 p-2 rounded-2xl flex items-center justify-center w-[136px] md:w-[150px]"
      >
        <img
          decoding='async'
          loading='lazy'
          className="object-contain w-full h-full"
          src={item?.image}
          alt={item?.title}
        />
      </Link>
      <div className="flex flex-col gap-1 max-w-[230px] sm:max-w-none justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="truncate text-zinc-800 font-bold">{item.title}</h1>
          <p className="font-semibold">${parseMoney(item.price)}</p>
          <p>Quantity: {quantity}</p>
        </div>
        <div className="flex gap-2">
          <ButtonProduct
            item={item}
            variant={'border'}
            text={'Add'}
            onClick={handleAdd}
            stock={item.stock}
          />
          <ButtonProduct
            item={item}
            variant={'outline'}
            text={'Remove'}
            onClick={handleRemove}
            stock={item.stock}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCardShop
