import './PersonalOde.css'
import ImgAshtray from '../../assets/Screenshot 2024-07-25 at 11.57.39 AM.png'
import { motion } from 'framer-motion'

export default function PersonalChocolate() {
  return (
    <motion.div className="personal-body"
    >
      <motion.div className="project-paragraph"
      initial={{y: -window.innerHeight}}
      animate={{y: 0, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
      exit={{y: -window.innerHeight, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
      >
        <p>A rumor went around that I tried to poison someone once.</p>
        <p>I offered them a piece of 100% dark chocolate and they had a conniption when they ate it.</p>
        <p>Foolish of me, really, as I know building up a tolerance is necessary.</p>
        <p>70% this week, 85% next, 90% the following, and so on.</p>
        <p>Diligent training of the palate.</p>
        <p>If you don’t believe me, check the directions on the wrapping of Lindt’s EXCELLENCE bars.</p>
        <p>Just annual dips and daily peat spritzes.</p>
        <br /><br />
        <a href="https://spectrapoets.org/100-dark-chocolate-or-poison-by-Clar-Tillekens" target="_blank" rel="noreferrer"
        style={{textDecoration: "underline", fontStyle: "italic", opacity: 0.4}}
        >Published in Spectra</a>
      </motion.div>

      <motion.div className="project-img-container"
      initial={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"}}
      animate={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: {duration: 1.5, ease: [0.5, 0, 0, 1]}}}
      exit={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", transition: {duration: 1.5, ease: [0.5, 0, 0, 1]}}}
      >
        <img src={ImgAshtray} alt="" className="project-img"/>
      </motion.div>

    </motion.div>
  )
}
