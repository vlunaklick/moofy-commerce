type Props = {
  onClick: () => void
  text?: string
}

const ButtonCart = ({ onClick, text }: Props) => {
  return (
    <button
      onClick={onClick}
      className="text-center bg-zinc-700 text-zinc-100 border border-zinc-700 hover:bg-zinc-800 hover:border-zinc-50 rounded-xl font-semibold py-2 px-5 cursor-pointer capitalize transition-colors"
    >
      {text}
    </button>
  )
}

export default ButtonCart
