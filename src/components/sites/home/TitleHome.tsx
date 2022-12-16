type Props = {
  title?: string
  message?: string
}

const TitleHome = ({ title = 'title', message }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-xl font-semibold text-zinc-900 md:text-2xl">
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
