import './Header.css'

import { motion, useScroll } from 'framer-motion'

export default function Header() {

  const { scrollY } = useScroll()

  return (
    <motion.div className="header-container">

      <div>
        <div className="header-crop">
          <motion.div className="header">
            {"Clár".split("").map((letter, i) => {
              return (
                <motion.div
                key={i}
                initial={{y: 350}}
                animate={{y: 0, transition: {duration: 1, delay: 0.05 * i, ease: [.2,0,0,1]}}}
                exit={{y: 350, transition: {duration: 1, delay: 0.05 * i, ease: [.2,0,0,1]}}}
                >
                  <motion.div
                  style={{y: scrollY}}
                  >
                    {letter}
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        <div className="header-crop">
          <div className="header">
            {"Tillekens".split("").map((letter, i) => {
              return (
                <motion.div
                key={i}
                initial={{y: 350}}
                animate={{y: 0, transition: {duration: 1, delay: 0.05 * i + 0.2, ease: [.2,0,0,.99]}}}
                exit={{y: 350, transition: {duration: 1, delay: 0.05 * i, ease: [.2,0,0,1]}}}
                >
                  <motion.div style={{y: scrollY }}>{letter}</motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="sub-header-crop">
        <motion.div className="sub-header"
        initial={{y: 70}}
        animate={{y: 0, transition: {duration: 1, delay: 0.5, ease: [.2,0,0,1]}}}
        exit={{y: 70, transition: {duration: 1, delay: 0.5, ease: [.2,0,0,1]}}}
        >
          {"Writer, Content Designer, Creative Strategist".split(" ").map((word, i) => {
            return (
              <motion.div
              key={i}
              initial={{y: 170}}
              animate={{y: 0, transition: {duration: 1, delay: 0.1 * i + 1, ease: [.2,0,0,.99]}}}
              >
                <motion.div style={{y: scrollY}}>{word}&nbsp;</motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

    </motion.div>
  )
}
