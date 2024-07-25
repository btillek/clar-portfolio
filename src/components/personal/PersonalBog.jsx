import './PersonalOde.css'
import ImgBottle from '../../assets/Screenshot 2024-07-25 at 11.35.15 AM.png'
import { motion } from 'framer-motion'

export default function PersonalBog() {
  return (
    <motion.div className="personal-body"
    >
      <motion.div className="project-paragraph"
      initial={{y: -window.innerHeight}}
      animate={{y: 0, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
      exit={{y: -window.innerHeight, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
      >
        <p>I want to age like a bog body.</p>
        <p>Thousands of years of preservation, but now.</p>
        <p>Figured out a small yearly ritual.</p>
        <p>On the last day of winter I’ll dunk my head into the acidic water of Connacht.</p>
        <p>On the first day of spring I’ll return for a touch up.</p>
        <p>Won’t need tretinoin again, nor rose water.</p>
        <p>Just annual dips and daily peat spritzes.</p>
        <br /><br />
        <a href="https://hot-potato.news/" target="_blank" rel="noreferrer"
        style={{textDecoration: "underline", fontStyle: "italic"}}
        >Published in Hot Potato</a>
      </motion.div>

      <motion.div className="project-img-container"
      initial={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"}}
      animate={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: {duration: 1.5, ease: [0.5, 0, 0, 1]}}}
      exit={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", transition: {duration: 1.5, ease: [0.5, 0, 0, 1]}}}
      >
        <img src={ImgBottle} alt="" className="project-img"/>
      </motion.div>

    </motion.div>
  )
}
