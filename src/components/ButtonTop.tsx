import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { ArrowUp } from './icons/ArrowUp'

const ButtonTop = () => {
  const [view, setView] = useState(false)

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setView(true)
      } else {
        setView(false)
      }
    })

    return () => {
      window.removeEventListener('scroll', () => {})
    }
  }, [])

  return (
    <motion.button
      aria-label="Scroll to top"
      onClick={handleScrollToTop}
      animate={view ? 'visible' : 'hidden'}
      variants={{
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.3,
            yoyo: Infinity,
            ease: 'easeInOut',
          },
        },
        hidden: {
          opacity: 0,
          scale: 0,
          transition: {
            duration: 0.3,
            ease: 'easeInOut',
          },
        },
      }}
      className={
        'fixed z-10 p-2 bg-zinc-100 rounded-full shadow-md bottom-10 right-10'
      }
    >
      <ArrowUp className="w-5 h-5 text-zinc-800" />
    </motion.button>
  )
}

export default ButtonTop
