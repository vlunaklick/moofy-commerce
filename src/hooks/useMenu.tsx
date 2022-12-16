import { useState } from 'react'

export const useMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(prevState => !prevState)
  }

  const close = () => {
    setIsOpen(false)
  }

  return { isOpen, handleOpen, close }
}
