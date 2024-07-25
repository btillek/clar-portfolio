import './Personal1.css'
import Img1 from '../../assets/Screenshot 2024-07-22 at 4.20.16 PM.png'

import { motion } from 'framer-motion'

export default function Personal1() {
  return (
    <div className="personal1">

      <motion.div className="img-container"
      initial={{y: -window.innerHeight}}
      animate={{y: 0, transition: {duration: 1.2, ease: [0.5, 0, 0, 1]}}}
      exit={{y: window.innerHeight, transition: {duration: 1.2, ease: [0.5, 0, 0, 1]}}}
      >
        <img className="project-img" src={Img1} alt="" />
      </motion.div>

      <motion.div className="project-text"
      initial={{y: window.innerHeight}}
      animate={{y: 0, transition: {duration: 1.2, delay: 0.1, ease: [0.5, 0, 0, 1]}}}
      exit={{y: -window.innerHeight, transition: {duration: 1.2, delay: 0.1, ease: [0.5, 0, 0, 1]}}}
      >
        <h1 className="project-title">
          Diet ode to my ancestors
        </h1>
        <div className="project-paragraph">
          <p>Guggering potatoes. You heard that right? It’s not googling.</p>
          <p>Dad is telling me about a method for planting the crop, what he grew up doing.</p>
          <p>I never did that on FarmVille back in the day.</p>
          <p>My father made use of his hands. Dirtied them, felt the soil.</p>
          <p>Out of respect for my forebearers, I’m no longer eating chips, crisps, or fries.</p>
          <p>I only want potatoes in their purest preparations.</p>
          <p>Acceptable forms of spuds:</p>
          <p>Boiled</p>
          <p>Mashed</p>
          <p>Baked</p>
          <p>Roasted</p>
          <p>Bread</p>
          <p>Boxty</p>
        </div>
      </motion.div>
    </div>
  )
}
