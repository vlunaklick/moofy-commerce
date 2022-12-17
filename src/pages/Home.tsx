import { useContext } from 'react'
import { ItemsContext } from '../context/ItemsContext'

import HeaderHome from '../components/sites/home/HeaderHome'
import Sections from '../components/layouts/Sections'
import TitleHome from '../components/sites/home/TitleHome'
import Button from '../components/Button'
import ProductsGrid from '../components/sites/ProductsGrid'
import Main from '../components/layouts/Main'

type Props = {}

const Home = (props: Props) => {
  const { items } = useContext(ItemsContext)

  const bestSeller = items.reduce((prev, current) =>
    prev.sold > current.sold ? prev : current
  )

  return (
    <Main>
      <div className="md:max-w-[750px] mx-auto flex flex-col gap-6">
        <Sections>
          <div className="text-2xl gap-1 font-semibold normal-case flex flex-col md:flex-row text-zinc-800 md:text-3xl">
            <h3>Make your setup</h3>
            <h3 className="capitalize md:normal-case">a palace</h3>
          </div>
          <HeaderHome
            image={bestSeller.image}
            message="Order now ->"
            topText="Best seller"
            title={bestSeller.title}
            link={`/products/${bestSeller.category[0]}/${bestSeller.id}`}
          />
        </Sections>
        <Sections>
          <TitleHome title="Our products" message="See more" link="/products" />
          <ProductsGrid products={items} limit={6} />
          <Button center={true} variant={'emerald'} text={'Shop now'} />
        </Sections>
        <Sections>
          <TitleHome title="Microphones" />
          <HeaderHome
            image="https://www.audio-technica.com/es-es/media/catalog/product/cache/8dd197211b5cade13ef7fc9815610330/a/t/at2020_01a.png"
            title="Improve your audio quality"
            message="Navigate there ->"
            link="/products"
          />
          <ProductsGrid products={items} limit={6} category="microphones" />
          <Button center={true} variant={'emerald'} text={'See more'} />
        </Sections>
      </div>
    </Main>
  )
}

export default Home
