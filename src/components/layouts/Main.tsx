import Nav from '../app/Nav'
import Footer from '../app/Footer'

type Props = {
  children?: React.ReactNode
}

const Main = ({ children }: Props) => {
  return (
    <div className="bg-zinc-50 min-h-screen">
      <div className="container mx-auto px-5 md:px-0 min-h-screen flex flex-col justify-between">
        <div className="flex flex-col gap-3 h-full">
          <Nav />
          <div className="md:max-w-[750px] mx-auto flex flex-col gap-6 w-full">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Main
