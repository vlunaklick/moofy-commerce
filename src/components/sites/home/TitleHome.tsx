type Props = {
  title?: string
  message?: string
}

const TitleHome = ({ title = 'title', message }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-2xl font-semibold text-zinc-800 md:text-3xl">
        {title}
      </h3>
      {message && (
        <p className="text-xs cursor-pointer text-emerald-400 md:text-base">
          {message}
        </p>
      )}
    </div>
  )
}

export default TitleHome
