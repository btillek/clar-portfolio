import './PersonalProject.css'
import ImgAshtray from '../../assets/Screenshot 2024-07-25 at 11.57.39 AM.png'
import { motion } from 'framer-motion'

export default function PersonalChocolate() {
  const projectContent = [
    "A rumor went around that I tried to poison someone once.",
    "I offered them a piece of 100% dark chocolate and they had a conniption when they ate it.",
    "Foolish of me, really, as I know building up a tolerance is necessary.",
    "70% this week, 85% next, 90% the following, and so on.",
    "Diligent training of the palate.",
    "If you don’t believe me, check the directions on the wrapping of Lindt’s EXCELLENCE bars.",
    "Just annual dips and daily peat spritzes.",
  ]

  return (
    <div className="personal-project-body">

      <motion.h2 className="personal-project-title">
        {
          "100% dark chocolate or poison".split(" ").map((word, i) => {
            return (
              <motion.div
              style={{display: "inline-block"}}
              initial={{y: 150}}
              animate={{y: 0, transition: {duration: 1, delay: 0.1 * i + .5, ease: [0.5, 0, 0, 1]}}}
              exit={{y: -150, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
              >
                {word}&nbsp;
              </motion.div>
            )
          })
        }
      </motion.h2>

      <div className="personal-project-middle">

        <div className="personal-project-img-container">
          <motion.img src={ImgAshtray} alt="" className="personal-project-img"
          style={{height: "400px"}}
          initial={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"}}
          animate={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
          exit={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
          />
        </div>

        <motion.div className="personal-project-text">

          <div className="personal-project-paragraph">
            {
              projectContent.map((line, i) => {
                return (
                  <motion.div style={{overflow: "hidden"}}>
                    <motion.span
                    initial={{y: 250}}
                    animate={{y: 0, transition: {duration: 1, delay: 0.1 * i, ease: [0.5, 0, 0, 1]}}}
                    exit={{y: -250, transition: {duration: 1, delay: 0.1 * i, ease: [0.5, 0, 0, 1]}}}
                    >
                      {line}
                    </motion.span>
                  </motion.div>
                )
              })
            }
          </div>
          <br />
          <a href="https://spectrapoets.org/100-dark-chocolate-or-poison-by-Clar-Tillekens" target="_blank" rel="noreferrer" className="personal-project-link">
            ( Published in Spectra )
          </a>
        </motion.div>

      </div>

    </div>

  )
}
