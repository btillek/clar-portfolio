import { motion } from "framer-motion"

export default function TransitionSwipe() {
  return (
    <motion.div
    initial={{y: 0}}
    animate={{y: -window.innerHeight, transition: {duration: .5, delay: .7, ease: [.5,0,0,1]}}}
    exit={{y: 0, transition: {duration: .5, ease: [.5,0,0,1]}}}
    >
      <motion.div
      style={{position: "fixed", top: 0, left: 0, height: "100vh", width: "100vw", backgroundColor: "black", zIndex: 50}}
      initial={{y: window.innerWidth}}
      animate={{y: 0, transition: {duration: .5, ease: [.5,0,0,1]}}}
      exit={{y: -window.innerHeight, transition: {duration: .5, delay: .7, ease: [.5,0,0,1]}}}
      />
    </motion.div>
  )
}
