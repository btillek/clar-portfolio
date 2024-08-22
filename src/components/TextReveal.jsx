import './TextReveal.css'
import { motion } from 'framer-motion'

export default function TextReveal({ children }) {
  return (
    <>
      <motion.div style={{overflow: "hidden", display: "inline-block"}}>
        <motion.div
        className="work-text"
        style={{display: "inline-block"}}
        initial={{y: 35}}
        whileInView={{y: 0, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
        viewport={{once: true}}
        >
          {children}
        </motion.div>
      </motion.div>
    </>
  )
}
