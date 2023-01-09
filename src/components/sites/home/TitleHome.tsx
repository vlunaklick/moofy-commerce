import { Link } from 'react-router-dom'

type Props = {
  title?: string
  message?: string
  link?: string
}

const TitleHome = ({ title = 'title', message, link = '/' }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-2xl font-semibold text-zinc-800 md:text-3xl">
        {title}
      </h3>
      {message && (
        <Link
          aria-label={message}
          to={link}
          className="text-xs cursor-pointer text-emerald-400 md:text-base"
        >
          {message}
        </Link>
      )}
    </div>
  )
}

export default TitleHome
