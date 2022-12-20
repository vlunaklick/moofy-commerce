import { useState, useRef, useEffect } from 'react'

export const useMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleOpen = () => {
    setIsOpen(prevState => !prevState)
  }

  const close = () => {
    setIsOpen(false)
  }

  const handleClickOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      close()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  return { isOpen, handleOpen, close, ref }
}
