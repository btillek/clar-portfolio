import './PersonalProject.css'
import ImgBottle from '../../assets/Screenshot 2024-07-25 at 11.35.15 AM.png'
import ImgCross from '../../assets/Screenshot 2024-07-30 at 10.50.14 AM.png'
import ImgChurch from '../../assets/Screenshot 2024-07-30 at 11.39.42 AM.png'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

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
  const imgRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"]
  })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 70])

  return (
    <div className="personal-project-body">

      <div className="personal-project-middle">

        <motion.div className="personal-project-text" style={{marginLeft: "196px"}}>
          <motion.h2 className="personal-project-title" style={{marginLeft: 0}}>
          {
            "Bog".split("").map((letter, i) => {
              return (
                <motion.div
                style={{display: "inline-block"}}
                initial={{y: 150}}
                animate={{y: 0, transition: {duration: 1, delay: 0.1 * i + .5, ease: [0.5, 0, 0, 1]}}}
                exit={{y: -150, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
                >
                  {letter}
                </motion.div>
              )
            })
          }
          &nbsp;

        </motion.h2>
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
          <a href="https://hot-potato.news/" target="_blank" rel="noreferrer" className="personal-project-link">
            ( Published in Hot Potato )
          </a>
        </motion.div>

        <div className="personal-project-img-container" ref={imgRef}>
          <motion.img src={ImgBottle} alt="" className="personal-project-img"
          style={{marginTop: "-48px", y: y1}}
          initial={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"}}
          animate={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
          exit={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
          />
          <motion.img src={ImgCross} alt="" className="personal-project-img" style={{height: "400px", y: y2}}/>
          <motion.img src={ImgChurch} alt="" className="personal-project-img" style={{y: y3}}/>
        </div>

      </div>

    </div>
  )
}
