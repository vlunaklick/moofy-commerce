import React from 'react'

type Props = {
  children?: React.ReactNode
}

const Sections = ({ children }: Props) => {
  return <div className="flex flex-col gap-2">{children}</div>
}

export default Sections
