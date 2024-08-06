import './ImageReveal.css'

import { motion } from 'framer-motion'

export default function ImageReveal({ image }) {
  return (
    <motion.div className="work-img-container"
    initial={{y: 150}}
    whileInView={{y: 0, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
    viewport={{ once: true, amount: 0.5 }}
    >
      <motion.img src={image} alt="" className="work-img"
      initial={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"}}
      whileInView={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: {duration: 1, delay: 0.5, ease: [0.5, 0, 0, 1]}}}
      viewport={{once: true}}
      />
    </motion.div>
  )
}
