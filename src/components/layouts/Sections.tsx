type Props = {
  children?: React.ReactNode
}

const Sections = ({ children }: Props) => {
  return (
    <div className="mx-auto flex flex-col gap-2 w-full h-full">{children}</div>
  )
}

export default Sections
