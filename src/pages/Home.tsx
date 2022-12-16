import HeaderTitle from '../components/app/HeaderTitle'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className="md:max-w-[750px] mx-auto">
      <div className="flex flex-col gap-2">
        <div className="text-xl gap-1 font-semibold normal-case flex flex-col md:flex-row text-zinc-900">
          <h3>Make your setup</h3>
          <h3 className="capitalize md:normal-case">a palace</h3>
        </div>
        <HeaderTitle />
      </div>
    </div>
  )
}

export default Home
