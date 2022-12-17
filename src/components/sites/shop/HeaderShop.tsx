import DropdownShop from './DropdownShop'

type Props = {}

const HeaderShop = (props: Props) => {
  return (
    <div className="flex flex-col">
      <div className="relative h-full">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <h1 className="text-5xl font-bold md:text-6xl text-zinc-50 absolute">
            Moo
            <span className="text-emerald-500">fy</span>
          </h1>
        </div>

        <div className="h-40 md:h-48">
          <img
            src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="object-cover w-full h-full rounded-t-lg"
          />
        </div>
      </div>
      <DropdownShop />
    </div>
  )
}

export default HeaderShop
