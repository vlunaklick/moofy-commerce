import Main from '../components/layouts/Main'
import Sections from '../components/layouts/Sections'

type Props = {}

const Product = (props: Props) => {
  return (
    <Main>
      <div className="md:max-w-[750px] mx-auto flex flex-col gap-6 w-full">
        <Sections>Products</Sections>
      </div>
    </Main>
  )
}

export default Product
