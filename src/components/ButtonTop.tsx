import { AiOutlineArrowUp } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { useState } from 'react'

const ButtonTop = () => {
  const [view, setView] = useState(false)

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      setView(true)
    } else {
      setView(false)
    }
  })

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
        'fixed z-10 p-3 bg-zinc-100 rounded-full shadow-md bottom-10 right-10'
      }
    >
      <AiOutlineArrowUp className="text-zinc-800" />
    </motion.button>
  )
}

export default ButtonTop
