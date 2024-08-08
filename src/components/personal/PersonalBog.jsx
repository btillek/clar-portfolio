import './PersonalProject.css'
import ImgBottle from '../../assets/Screenshot 2024-07-25 at 11.35.15 AM.png'
import ImgCross from '../../assets/Screenshot 2024-07-30 at 10.50.14 AM.png'
import ImgChurch from '../../assets/Screenshot 2024-07-30 at 11.39.42 AM.png'
import { motion } from 'framer-motion'

const projectContent = [
  "I want to age like a bog body.",
  "Thousands of years of preservation, but now.",
  "Figured out a small yearly ritual.",
  "On the last day of winter I’ll dunk my head into the acidic water of Connacht.",
  "On the first day of spring I’ll return for a touch up.",
  "Won’t need tretinoin again, nor rose water.",
  "Just annual dips and daily peat spritzes.",
]

export default function PersonalBog() {
  return (
    <div className="personal-project-body">

      <motion.h2 className="personal-project-title">
        Bog
      </motion.h2>

      <div className="personal-project-middle">

        <div className="personal-project-img-container">
          <motion.img src={ImgBottle} alt="" className="personal-project-img"
          initial={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"}}
          animate={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
          exit={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
          />
          <img src={ImgCross} alt="" className="personal-project-img" style={{height: "400px"}}/>
          <img src={ImgChurch} alt="" className="personal-project-img" />
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
        </motion.div>

      </div>

      <div className="personal-project-footnote">
        <a href="https://hot-potato.news/" target="_blank" rel="noreferrer" className="personal-project-link">
        ( Published in Hot Potato )
        </a>
        <span style={{fontStyle: "italic", fontSize: "1rem", opacity: .5}}>Sept 15, 2023</span>
      </div>

    </div>
  )
}
