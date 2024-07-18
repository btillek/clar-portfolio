import './Header.css'
import Portrait from '../assets/Portrait.png'

import { motion, useScroll, useTransform } from 'framer-motion'

export default function Header() {

  const { scrollY } = useScroll()
  const size = useTransform(scrollY, [0, window.innerHeight * 0.75], [1, 0.09])

  return (
    <div className="header-container" >

      <motion.div
      // style={{position: "fixed", scale: size, originX: 0, originY: 0}}
      >
        <div className="header-crop">
          <div className="header">
            {"Clár".split("").map((letter, i) => {
              return (
                <motion.div
                key={i}
                initial={{y: 270}}
                animate={{y: 0, transition: {duration: 1, delay: 0.05 * i, ease: [.2,0,0,.99]}}}
                >
                  <motion.div
                  style={{y: scrollY }}
                  >
                    {letter}
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="header-crop">
          <div className="header">
            {"Tillekens".split("").map((letter, i) => {
              return (
                <motion.div
                key={i}
                initial={{y: 270}}
                animate={{y: 0, transition: {duration: 1, delay: 0.05 * i + 0.2, ease: [.2,0,0,.99]}}}
                >
                  <motion.div style={{y: scrollY }}>{letter}</motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>

      <div className="sub-header-crop">
        <motion.div className="sub-header"
        initial={{y: 70}}
        animate={{y: 0, transition: {duration: 1, delay: 0.5, ease: [.2,0,0,.99]}}}
        >
          {"Writer, Content Designer, Creative Strategist".split(" ").map((word, i) => {
            return (
              <motion.div
              key={i}
              style={{marginRight: "14px"}}
              initial={{y: 170}}
              animate={{y: 0, transition: {duration: 1, delay: 0.1 * i + 1, ease: [.2,0,0,.99]}}}
              >
                <motion.div style={{y: scrollY}}>{word}</motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* <div className="sub-header-crop">
        <motion.div className="sub-header"
        initial={{y: 170}}
        animate={{y: 0, transition: {duration: 1, delay: 0.8, ease: [.2,0,0,.99]}}}
        >
          <motion.div style={{position: "fixed", bottom: "24px", fontSize: "2rem"}}>↓</motion.div>
        </motion.div>
      </div> */}


      {/* <motion.div className="img-container"
        initial={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"}}
        animate={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: {duration: 1, delay: 1, ease: [.75,0,0,.99]}}}
        style={{clipPath: `polygon(0 0, ${num}% 0, 100% 100%, 0 100%)`}}
        >
        <img src={Portrait} alt="Portrait" />
      </motion.div> */}


        {/* <motion.div className="img-container"
        style={{top: mousePos.y + 20, left: mousePos.x + 20, originX: 0, originY: 0}}
        initial={{clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)"}}
        animate={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: {duration: 1, ease: [.75,0,0,.99]}}}
        >
        <img src={Portrait} alt="Portrait" />
        </motion.div> */}


    </div>
  )
}
