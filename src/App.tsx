import Button from './components/Button'
import Footer from './components/app/Footer'
import Nav from './components/app/Nav'

function App() {
  return (
    <div className="bg-zinc-50 min-h-screen">
      <div className="container mx-auto px-5 md:px-0 ">
        <Nav />
        <Button variant="emerald" />
        <Footer />
      </div>
    </div>
  )
}

export default App
