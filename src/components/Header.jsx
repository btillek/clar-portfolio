import './Header.css'
import Portrait from '../assets/Portrait.png'

import { motion, useScroll, useTransform } from 'framer-motion'

export default function Header() {

  const { scrollY } = useScroll()

  const scale = useTransform(scrollY, [0, window.innerHeight / 2], [1, 1.8])
  const headerScale = useTransform(scrollY, [0, window.innerWidth / 4], [1, 0.2])
  const underlineScale = useTransform(scrollY, [window.innerWidth / 8, window.innerWidth / 4], ["0%", "100%"])

  return (
    <motion.div className="header-container">

      <motion.div style={{scale: headerScale, position: "fixed", top: "24px", originX: 0, originY: 0}}>
        <motion.div className="header">
          {"Clár".split("").map((letter, i) => {
            return (
              <motion.div
              key={i}
              initial={{y: 350}}
              animate={{y: 0, transition: {duration: 1, delay: 0.05 * i, ease: [.2,0,0,1]}}}
              exit={{y: 350, transition: {duration: 1, delay: 0.05 * i, ease: [.2,0,0,1]}}}
              >
                {/* <motion.div style={{y: scrollY}}> */}
                  {letter}
                {/* </motion.div> */}
              </motion.div>
            )
          })}
        </motion.div>

        <div className="header" style={{flexDirection: "column"}}>
          <div style={{display: "flex"}}>
            {"Tillekens".split("").map((letter, i) => {
              return (
                <motion.div
                key={i}
                initial={{y: 350}}
                animate={{y: 0, transition: {duration: 1, delay: 0.05 * i + 0.2, ease: [.2,0,0,.99]}}}
                exit={{y: 350, transition: {duration: 1, delay: 0.05 * i, ease: [.2,0,0,1]}}}
                >
                  {/* <motion.div style={{y: scrollY }}> */}
                    {letter}
                  {/* </motion.div> */}
                </motion.div>
              )
            })}
            </div>
            <motion.div style={{width: underlineScale, backgroundColor: "black", height: 15, marginTop: "24px"}}
            // variants={{hover: {width: "100%"}}}
            />
        </div>
      </motion.div>

      {/* <div className="sub-header-crop">
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
      </div> */}

      <motion.div style={{height: "300px", position: "fixed", bottom: "24px", left: "24px", scale, originX: 0, originY: 1}}>
        <motion.img src={Portrait} alt="" style={{height: "100%", objectFit: "contain"}}
         initial={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"}}
         animate={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: {duration: 1.5, delay: 1.5, ease: [0.5, 0, 0, 1]}}}
         exit={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", transition: {duration: 1.5, ease: [0.5, 0, 0, 1]}}}
         />
      </motion.div>

    </motion.div>
  )
}
