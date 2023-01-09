import { Link } from 'react-router-dom'

const classes = {
  solid:
    'bg-zinc-200 text-zinc-800 border border-zinc-200 hover:bg-zinc-300 hover:border-zinc-300',
  emerald:
    'bg-emerald-200 text-emerald-900 border border-emerald-200 hover:bg-emerald-300 hover:border-emerald-300',
}

type Props = {
  variant?: 'solid' | 'emerald'
  text?: string
  full?: boolean
  center?: boolean
  link?: string
}

const Button = ({
  variant = 'solid',
  text = 'button',
  full = false,
  center = false,
  link,
}: Props) => {
  if (link) {
    return (
      <Link
        to={link}
        className={
          'rounded-2xl font-semibold py-2 px-5 cursor-pointer capitalize transition-colors ' +
          (full ? 'w-full text-center ' : 'w-fit ') +
          ' ' +
          (center ? 'mx-auto' : '')
        }
      >
        <button
          arial-label={text}
          className={
            'rounded-2xl font-semibold py-2 px-5 cursor-pointer capitalize transition-colors ' +
            (full ? 'w-full text-center ' : 'w-fit ') +
            classes[variant] +
            ' ' +
            (center ? 'mx-auto' : '')
          }
        >
          {text}
        </button>
      </Link>
    )
  }

  return (
    <button
      aria-label={text}
      className={
        'rounded-2xl font-semibold py-2 px-5 cursor-pointer capitalize transition-colors ' +
        (full ? 'w-full text-center ' : 'w-fit ') +
        classes[variant] +
        ' ' +
        (center ? 'mx-auto' : '')
      }
    >
      {text}
    </button>
  )
}

export default Button
