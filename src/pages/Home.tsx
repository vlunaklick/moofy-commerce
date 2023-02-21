import { useContext } from 'react'

import { useItems } from '../context/Items'

import HeaderHome from '../components/sites/home/HeaderHome'
import Sections from '../components/layouts/Sections'
import TitleHome from '../components/sites/home/TitleHome'
import Button from '../components/Button'
import ProductsGrid from '../components/sites/ProductsGrid'

const Home = () => {
  const { items } = useItems()

  const bestSeller = items.reduce((prev, current) =>
    prev.sold > current.sold ? prev : current
  )

  return (
    <>
      <Sections>
        <div className="text-2xl gap-1 font-semibold normal-case flex flex-col md:flex-row text-zinc-800 md:text-3xl">
          <h2>Make your setup</h2>
          <h2 className="capitalize md:normal-case">a palace</h2>
        </div>
        <HeaderHome
          image={bestSeller.image}
          message="Order now →"
          topText="Best seller"
          title={bestSeller.title}
          link={`/products/${bestSeller.category[0]}/${bestSeller.id}`}
        />
      </Sections>
      <Sections>
        <TitleHome title="Our products" message="See more" link="/shop/1" />
        <ProductsGrid products={items} limit={6} />
        <Button
          center={true}
          variant={'emerald'}
          text={'Shop now'}
          link={'/shop/1'}
        />
      </Sections>
      <Sections>
        <TitleHome title="Microphones" />
        <HeaderHome
          image="/images/at2020-01a.webp"
          title="Improve your audio quality"
          message="See more →"
          link="/shop/1/peripherals/microphones"
        />
        <ProductsGrid
          products={items}
          limit={3}
          responsive={1}
          use={true}
          category="microphones"
        />
        <Button
          center={true}
          variant={'emerald'}
          text={'See more'}
          link={'/shop/1/peripherals/microphones'}
        />
      </Sections>
    </>
  )
}

export default Home
