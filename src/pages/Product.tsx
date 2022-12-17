import { useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { ItemsContext } from '../context/ItemsContext'
import Main from '../components/layouts/Main'
import Sections from '../components/layouts/Sections'

type Props = {}

const Product = (props: Props) => {
  const navigate = useNavigate()

  const { items } = useContext(ItemsContext)

  const { id } = useParams()

  useEffect(() => {
    if (
      id !== undefined &&
      isNaN(Number(id)) &&
      !items.map(item => item.id).includes(Number(id))
    ) {
      return navigate(`/error`)
    }
  }, [])

  const item = items.find(item => item.id === Number(id))

  return (
    <Main>
      <div className="md:max-w-[750px] mx-auto flex flex-col gap-6 w-full">
        <Sections>{item && item.title}</Sections>
      </div>
    </Main>
  )
}

export default Product
