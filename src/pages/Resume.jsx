import '../components/Resume.css'

import { RESUME } from '../resume-data'
import { motion } from 'framer-motion'

export default function Resume() {
  return (
    <>
      <motion.div className="resume-container"
      initial={{x: -window.innerWidth}}
      animate={{x: 0, transition: {duration: 1, delay: 0, ease: [.2,0,0,1]}}}
      exit={{x: -window.innerWidth, transition: {duration: 1, ease: [.5,0,0,.5]}}}
      >

        {RESUME.map((section, j) => {
          return (
            <div className="resume-section">

              <motion.div className="resume-item"
              initial={{x: -window.innerWidth}}
              animate={{x: 0, transition: {duration: 1, delay: 0.2 * j, ease: [.2,0,0,1]}}}
              exit={{x: -window.innerWidth, transition: {duration: 1, delay: 0.2 * j, ease: [.5,0,0,.5]}}}
              >
                <div className="resume-header">
                  {section.category}
                </div>
              </motion.div>

                {
                  section.items.map((item, i) => {
                    return (
                      <motion.div className="resume-item"
                      initial={{x: -window.innerWidth}}
                      animate={{x: 0, transition: {duration: 1, delay: 0.2 * i, ease: [.2,0,0,1]}}}
                      exit={{x: -window.innerWidth, transition: {duration: 1, delay: 0.2 * i, ease: [.5,0,0,.5]}}}
                      >
                          <div className="resume-place">{item.place}</div>
                          <div className="resume-year">{item.year}</div>
                        <div className="resume-what">{item.what}</div>
                      </motion.div>
                    )
                  })
                }

            </div>
          )
        })}
      </motion.div>
    </>
  )
}
