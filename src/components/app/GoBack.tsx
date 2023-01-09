interface Props {
  onClick?: () => void
}

const GoBack = ({ onClick }: Props) => {
  return (
    <button
      aria-label="Go back"
      onClick={onClick}
      className="text-xs text-emerald-500"
    >
      Go back -{'>'}
    </button>
  )
}

export default GoBack
