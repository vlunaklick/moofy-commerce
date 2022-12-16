import HeaderHome from '../components/sites/home/HeaderHome'
import Sections from '../components/layouts/Sections'
import TitleHome from '../components/sites/home/TitleHome'
import Button from '../components/Button'
import ProductsGrid from '../components/sites/ProductsGrid'
import Main from '../components/layouts/Main'

type Props = {}

const Home = (props: Props) => {
  const bestSeller = PRODUCTS.reduce((prev, current) =>
    prev.sold > current.sold ? prev : current
  )

  return (
    <Main>
      <div className="md:max-w-[750px] mx-auto flex flex-col gap-6">
        <Sections>
          <div className="text-xl gap-1 font-semibold normal-case flex flex-col md:flex-row text-zinc-800 md:text-3xl">
            <h3>Make your setup</h3>
            <h3 className="capitalize md:normal-case">a palace</h3>
          </div>
          <HeaderHome
            image={bestSeller.image}
            message="Order now ->"
            topText="Best seller"
            title={bestSeller.title}
          />
        </Sections>
        <Sections>
          <TitleHome title="Our products" message="See more" />
          <ProductsGrid products={PRODUCTS} limit={6} />
          <Button center={true} variant={'emerald'} text={'Shop now'} />
        </Sections>
        <Sections>
          <TitleHome title="Microphones" />
          <HeaderHome
            image="https://www.audio-technica.com/es-es/media/catalog/product/cache/8dd197211b5cade13ef7fc9815610330/a/t/at2020_01a.png"
            title="Improve your audio quality"
            message="Navigate there ->"
          />
          <ProductsGrid products={PRODUCTS} limit={6} category="microphones" />
          <Button center={true} variant={'emerald'} text={'See more'} />
        </Sections>
      </div>
    </Main>
  )
}

export default Home

const PRODUCTS = [
  {
    id: 1,
    title: 'GeForce 1050Ti GAMING X 4GB GDDR5',
    brand: 'Nvidia',
    image:
      'https://xtremegames.com.ar/wp-content/uploads/2022/02/product_7_20180411113751_5acd830f900d9.png',
    price: 53900,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    category: ['video-cards'],
    stock: 10,
    rating: 5,
    sold: 3,
  },
  {
    id: 2,
    title: 'Corsair T3 RUSH - Grey Edition - Gaming Chair',
    brand: 'Corsair',
    image:
      'https://img1.wsimg.com/isteam/ip/23fa9c27-3ad2-4099-a13a-f6ae803e79aa/ols/t3_rush_gray_white_fabric.png',
    price: 34999,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    category: ['peripherals', 'chairs'],
    stock: 3,
    rating: 4.2,
    sold: 2,
  },
  {
    id: 3,
    title: 'Razer Viper Mini - Ambidextrous Gaming Mouse WIRELESS',
    brand: 'Razer',
    image:
      'https://assets.razerzone.com/eeimages/support/products/1634/vipermini.png',
    price: 19999,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    category: ['peripherals', 'mouses'],
    stock: 5,
    rating: 4.5,
    sold: 1,
  },
  {
    id: 4,
    title: 'Logitech G213 Prodigy RGB Gaming Keyboard',
    brand: 'Logitech',
    image:
      'https://computelweb.com/wp-content/uploads/2021/02/g213-gallery-1.png',
    price: 19999,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    category: ['peripherals', 'keyboards'],
    stock: 5,
    rating: 4.5,
    sold: 1,
  },
  {
    id: 5,
    title: 'Logitech Brio 4K Pro Webcam',
    brand: 'Logitech',
    image:
      'https://resource.logitech.com/content/dam/logitech/en/products/webcams/brio/gallery/brio-gallery-2.png',
    price: 5999.9,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    category: ['peripherals'],
    stock: 5,
    rating: 4.7,
    sold: 1,
  },
  {
    id: 6,
    title: 'Logitech G Pro X Gaming Headset',
    brand: 'Logitech',
    image:
      'https://logitechar.vtexassets.com/arquivos/ids/157168-800-800?v=637064270447600000&width=800&height=800&aspect=true',
    price: 19999,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    category: ['peripherals', 'microphones'],
    stock: 5,
    rating: 4.5,
    sold: 1,
  },
  {
    id: 7,
    title: 'Blue Yeti Microphone Blue voice',
    brand: 'Logitech',
    image:
      'https://i.pinimg.com/originals/73/6a/7a/736a7afaf1b198259b95bbb5c3df529a.png',
    price: 19999,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    category: ['peripherals', 'microphones'],
    stock: 5,
    rating: 4.5,
    sold: 1,
  },
  {
    id: 8,
    title: 'HyperX Cloud Stinger Core - Gaming Headset',
    brand: 'HyperX',
    image:
      'https://logg.api.cygnus.market/static/Host/Global/logg/3d75d4c7fbb4429584b07afaa2defcba.png',
    price: 19999,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    category: ['peripherals', 'microphones'],
    stock: 5,
    rating: 4.5,
    sold: 1,
  },
  {
    id: 9,
    title: 'HyperX Cloud Stinger Core - Gaming Headset',
    brand: 'HyperX',
    image:
      'https://static.swappa.com/media/product/hyperx-quadcast/hyperx-quadcast-01.png',
    price: 19999,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    category: ['peripherals', 'microphones'],
    stock: 5,
    rating: 4.5,
    sold: 1,
  },
]
