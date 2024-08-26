import './PersonalOde.css'
import ImgSwan from '../../assets/Screenshot 2024-07-25 at 11.59.47 AM.png'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function PersonalFeuer() {

  const imgRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"]
  })
  const y1 = useTransform(scrollYProgress, [0, 1], [-200, 100])

  return (
    <div className="personal-project-body">

      <div className="personal-project-middle">

        <motion.div className="personal-project-text" style={{marginLeft: "96px"}}>

          <motion.h2 className="personal-project-title" style={{marginLeft: 0}}>
            {
              "Hast du Feuer?".split(" ").map((word, i) => {
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

          <div className="personal-project-paragraph">

            <motion.div style={{overflow: "hidden"}}>
              <motion.span
              initial={{y: 250}}
              animate={{y: 0, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
              exit={{y: -250, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
              >
                A good rite of passage in Berlin is being asked “Hast du Feuer?” on Admiralbrücke. Ideally by a looker with a gleam in their eye. Yes of course you have fire. You hand over a lighter from your mini bum bag. He lights up with the heat you gave him. Calms with the flame you lent. Thanks you in a foreign accent. Maybe he’ll invite you to The Club™ or he’ll walk away down the canal and leave you tormented wondering what would’ve happened if you exchanged numbers.A good rite of passage in Berlin is being asked “Hast du Feuer?” on Admiralbrücke. Ideally by a looker with a gleam in their eye. Yes of course you have fire. You hand over a lighter from your mini bum bag. He lights up with the heat you gave him. Calms with the flame you lent. Thanks you in a foreign accent. Maybe he’ll invite you to The Club™ or he’ll walk away down the canal and leave you tormented wondering what would’ve happened if you exchanged numbers.
              </motion.span>
            </motion.div>

          </div>
          <br />
          <a href="https://spectrapoets.org/Hast-du-Feuer-by-Clar-Tillekens" target="_blank" rel="noreferrer" className="personal-project-link">
            ( Published in Spectra )
          </a>
        </motion.div>

        <div className="personal-project-img-container" ref={imgRef}>
          <motion.img src={ImgSwan} alt="" className="personal-project-img"
          style={{marginLeft: "196px", height: "400px", y: y1}}
          initial={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"}}
          animate={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
          exit={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
          />
        </div>

      </div>

    </div>
  )
}
