import Nav from '../app/Nav'
import Footer from '../app/Footer'

type Props = {
  children?: React.ReactNode
}

const Main = ({ children }: Props) => {
  return (
    <div className="bg-zinc-50 min-h-screen">
      <div className="container mx-auto px-5 md:px-0 min-h-screen flex flex-col">
        <Nav />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Main
