type Props = {
  onClick: () => void
  text?: string
}

const ButtonCart = ({ onClick, text }: Props) => {
  return (
    <button
      aria-label={text}
      onClick={onClick}
      className="text-center bg-zinc-200 text-zinc-700 border border-zinc-200 hover:bg-zinc-300 hover:border-zinc-300 rounded-xl font-semibold py-2 px-5 cursor-pointer capitalize transition-colors"
    >
      {text}
    </button>
  )
}

export default ButtonCart
