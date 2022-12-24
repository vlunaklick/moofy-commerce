import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type Props = {
  children?: React.ReactNode
}

const Sections = ({ children }: Props) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto flex flex-col gap-2 w-full h-full"
    >
      {children}
    </motion.div>
  )
}

export default Sections
