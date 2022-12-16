import Footer from './components/app/Footer'
import Nav from './components/app/Nav'
import Home from './pages/Home'

function App() {
  return (
    <div className="bg-zinc-50 min-h-screen">
      <div className="container mx-auto px-5 md:px-0 ">
        <Nav />
        <Home />
        <Footer />
      </div>
    </div>
  )
}

export default App
