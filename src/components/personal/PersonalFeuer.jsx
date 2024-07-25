import './PersonalOde.css'
import ImgSwan from '../../assets/Screenshot 2024-07-25 at 11.59.47 AM.png'
import { motion } from 'framer-motion'

export default function PersonalFeuer() {
  return (
    <motion.div className="personal-body"
    >
      <motion.div className="project-paragraph"
      initial={{y: -window.innerHeight}}
      animate={{y: 0, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
      exit={{y: -window.innerHeight, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
      >
        <p>A good rite of passage in Berlin is being asked “Hast du Feuer?” on Admiralbrücke. Ideally by a looker with a gleam in their eye. Yes of course you have fire. You hand over a lighter from your mini bum bag. He lights up with the heat you gave him. Calms with the flame you lent. Thanks you in a foreign accent. Maybe he’ll invite you to The Club™ or he’ll walk away down the canal and leave you tormented wondering what would’ve happened if you exchanged numbers.</p>
        <br /><br />
        <a href="https://spectrapoets.org/Hast-du-Feuer-by-Clar-Tillekens" target="_blank" rel="noreferrer"
        style={{textDecoration: "underline", fontStyle: "italic", opacity: 0.4}}
        >Published in Spectra</a>
      </motion.div>

      <motion.div className="project-img-container"
      initial={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"}}
      animate={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: {duration: 1.5, ease: [0.5, 0, 0, 1]}}}
      exit={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", transition: {duration: 1.5, ease: [0.5, 0, 0, 1]}}}
      >
        <img src={ImgSwan} alt="" className="project-img"/>
      </motion.div>

    </motion.div>
  )
}
