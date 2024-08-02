import './TextReveal.css'
import { motion } from 'framer-motion'

export default function TextReveal({ children }) {
  return (
    <>
      <motion.div className="work-text"
      initial={{y: 150, opacity: 0}}
      whileInView={{y: 0, opacity: 1, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
      viewport={{once: true}}
      >
        {children}
      </motion.div>
    </>
  )
}
