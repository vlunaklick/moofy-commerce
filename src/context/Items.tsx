import { useState, createContext, useEffect, useContext } from 'react'

import { Product } from '../types/products'

import { products } from '../mocks/items.json'

const ItemsContext = createContext({
  items: [] as Product[],
  categorys: [] as string[],
  addStock: (item: Product) => {},
  removeStock: (id: Product) => {},
  restartStock: () => {},
})

const ItemProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<Product[]>(products)
  const [categorys, setCategorys] = useState<string[]>([])

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  useEffect(() => {
    const newCategorys: string[] = []

    items.forEach(item => {
      if (!newCategorys.includes(item.category[0])) {
        newCategorys.push(item.category[0])
      }
    })

    setCategorys(newCategorys)
  }, [items])

  const addStock = (item: Product) => {
    const newItems = items.map(itemMap =>
      itemMap.id === item.id
        ? { ...itemMap, stock: itemMap.stock + 1 }
        : itemMap
    )

    setItems(newItems)
  }

  const removeStock = (item: Product) => {
    const newItems = items.map(itemMap =>
      itemMap.id === item.id
        ? { ...itemMap, stock: itemMap.stock - 1 }
        : itemMap
    )

    setItems(newItems)
  }

  const restartStock = () => {
    setItems(products)
  }

  return (
    <ItemsContext.Provider
      value={{
        items,
        addStock,
        removeStock,
        restartStock,
        categorys,
      }}
    >
      {children}
    </ItemsContext.Provider>
  )
}

const useItems = () => {
  const context = useContext(ItemsContext)

  if (context === undefined) {
    throw new Error('useItems must be used within a ItemProvider')
  }

  return context
}

export { ItemProvider, useItems }
