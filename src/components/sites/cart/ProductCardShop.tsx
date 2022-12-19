import { Product } from '../../../types/products'
import { ProductsBought } from '../../../types/productsBought'
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
  const addDot = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  return (
    <div className="flex gap-2 text-zinc-800">
      <div className="aspect-square bg-zinc-300 p-2 rounded-2xl flex items-center justify-center max-w-[150px]">
        <img
          className="object-contain w-full h-full aspect-square"
          src={item?.image}
          alt={item?.title}
        />
      </div>
      <div className="flex flex-col gap-1 max-w-[230px] md:max-w-none justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="truncate text-zinc-800 font-bold">{item.title}</h1>
          <p className="font-semibold">${addDot(item.price)}</p>
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
    </div>
  )
}

export default ProductCardShop