import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="bg-zinc-50 w-full flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="text-lg">We haven't found this page 😵</p>
      <Link
        className="text-emerald-500 hover:text-emerald-700 transition-colors duration-300"
        to={'/'}
      >
        Back to home →
      </Link>
    </div>
  )
}

export default Error
