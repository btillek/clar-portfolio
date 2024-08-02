import './PersonalProject.css'
import ImgAshtray from '../../assets/Screenshot 2024-07-25 at 11.57.39 AM.png'
import { motion } from 'framer-motion'

export default function PersonalChocolate() {
  return (
    <motion.div className="personal-project-body">

      <div className="personal-project-left">

        <motion.div className="personal-project-img-container"
        initial={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"}}
        animate={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
        exit={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
        >
          <img src={ImgAshtray} alt="" className="personal-project-img" />
        </motion.div>

      </div>

      <motion.div className="personal-project-text"
      style={{backgroundColor: "black", color: "white"}}
      initial={{y: -window.innerHeight}}
      animate={{y: 0, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
      exit={{y: -window.innerHeight, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
      >
        <motion.h2 className="personal-project-title">
          100% dark <br /> chocolate <br />or poison
        </motion.h2>
        <div className="personal-project-paragraph">
          <span className="personal-project-line">A rumor went around that I tried to poison someone once.</span>
          <span className="personal-project-line">I offered them a piece of 100% dark chocolate and they had a conniption when they ate it.</span>
          <span className="personal-project-line">Foolish of me, really, as I know building up a tolerance is necessary.</span>
          <span className="personal-project-line">70% this week, 85% next, 90% the following, and so on.</span>
          <span className="personal-project-line">Diligent training of the palate.</span>
          <span className="personal-project-line">If you don’t believe me, check the directions on the wrapping of Lindt’s EXCELLENCE bars.</span>
          <span className="personal-project-line">Just annual dips and daily peat spritzes.</span>
        </div>

        <a href="https://spectrapoets.org/100-dark-chocolate-or-poison-by-Clar-Tillekens" target="_blank" rel="noreferrer" className="personal-project-link"
        style={{color: "white"}}>
          ( Published in Spectra )
        </a>
      </motion.div>
    </motion.div>
  )
}
