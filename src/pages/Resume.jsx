import '../components/Resume.css'
import TransitionSwipe from '../components/TransitionSwipe'

import { RESUME } from '../resume-data'
import { motion } from 'framer-motion'

export default function Resume() {
  return (
    <>
      {/* <TransitionSwipe /> */}
      <motion.div className="resume-container"
      initial={{x: -window.innerWidth}}
      animate={{x: 0, transition: {duration: 1, delay: 1, ease: [.2,0,0,1]}}}
      exit={{x: -window.innerWidth, transition: {duration: 1, ease: [.5,0,0,.5]}}}
      >
        {/* <div style={{fontSize: "2rem", transform: "skew(-15deg)", marginBottom: "48px"}}>RESUME</div> */}

        {RESUME.map((section, j) => {
          return (
            <div className="resume-section">

              <motion.div className="resume-item"
              style={{width: "10vw", position: "relative", top: "7px"}}
              initial={{x: -window.innerWidth}}
              animate={{x: 0, transition: {duration: 1, delay: 0.5 * j, ease: [.2,0,0,1]}}}
              exit={{x: -window.innerWidth, transition: {duration: 1, delay: 0.2 * j, ease: [.5,0,0,.5]}}}
              >
                <div className="resume-header">
                  {section.category}
                </div>
              </motion.div>

              <div>
              {
                section.items.map((item, i) => {
                  return (
                    <motion.div className="resume-item"
                    initial={{x: -window.innerWidth}}
                    animate={{x: 0, transition: {duration: 1, delay: 0.2 * i + j, ease: [.2,0,0,1]}}}
                    exit={{x: -window.innerWidth, transition: {duration: 1, delay: 0.2 * i, ease: [.5,0,0,.5]}}}
                    style={item.place === null ? {border: "none"} : null}
                    >
                      <motion.div
                      initial={{y: 150, opacity: 0}}
                      whileInView={{y: 0, opacity: 1, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
                      viewport={{once: true}}
                      >
                          <div className="resume-place">{item.place}</div>
                          <div className="resume-year">{item.year}</div>
                          <div className="resume-what">{item.what}</div>
                      </motion.div>
                    </motion.div>
                  )
                })
              }
              </div>

            </div>
          )
        })}
      </motion.div>
    </>
  )
}
