import HeaderHome from '../components/sites/home/HeaderHome'
import Sections from '../components/layouts/Sections'
import TitleHome from '../components/sites/home/TitleHome'
import Button from '../components/Button'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className="md:max-w-[750px] mx-auto flex flex-col gap-4">
      <Sections>
        <div className="text-xl gap-1 font-semibold normal-case flex flex-col md:flex-row text-zinc-900 md:text-2xl">
          <h3>Make your setup</h3>
          <h3 className="capitalize md:normal-case">a palace</h3>
        </div>
        <HeaderHome
          image="https://xtremegames.com.ar/wp-content/uploads/2022/02/product_7_20180411113751_5acd830f900d9.png"
          message="Order now ->"
          topText="Best seller"
          title="GeForce 1050Ti"
        />
      </Sections>
      <Sections>
        <TitleHome title="Our products" message="See more" />
        <Button center={true} variant={'emerald'} text={'Shop now'} />
      </Sections>
      <Sections>
        <TitleHome title="Microphones" />
        <HeaderHome
          image="https://www.audio-technica.com/es-es/media/catalog/product/cache/8dd197211b5cade13ef7fc9815610330/a/t/at2020_01a.png"
          title="Improve your audio quality"
          message="Navigate there ->"
        />
        <Button center={true} variant={'emerald'} text={'See more'} />
      </Sections>
    </div>
  )
}

export default Home
