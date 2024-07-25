import './PersonalOde.css'
import Img1 from '../../assets/Screenshot 2024-07-22 at 4.20.16 PM.png'
import { AnimatePresence, motion } from 'framer-motion'

export default function PersonalOde() {
  return (
      <motion.div className="personal-body">
        <motion.div className="project-paragraph"
        initial={{y: -window.innerHeight}}
        animate={{y: 0, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
        exit={{y: -window.innerHeight, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
        >
          <p>Guggering potatoes. You heard that right? It’s not googling.</p>
          <p>Dad is telling me about a method for planting the crop, what he grew up doing.</p>
          <p>I never did that on FarmVille back in the day.</p>
          <p>My father made use of his hands. Dirtied them, felt the soil.</p>
          <p>Out of respect for my forebearers, I’m no longer eating chips, crisps, or fries.</p>
          <p>I only want potatoes in their purest preparations.</p>
          <p>Acceptable forms of spuds:</p>
          <ul>
            <li>• Boiled</li>
            <li><p>• Mashed</p></li>
            <li><p>• Baked</p></li>
            <li><p>• Roasted</p></li>
            <li><p>• Bread</p></li>
            <li><p>• Boxty</p></li>
          </ul>
          <br /><br />
          <a href="https://spectrapoets.org/Diet-ode-to-my-ancestors-by-Clar-Tillekens" target="_blank" rel="noreferrer"
          style={{textDecoration: "underline", fontStyle: "italic", opacity: 0.4}}
          >Published in Spectra</a>
        </motion.div>

          <motion.div className="project-img-container"
          initial={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"}}
          animate={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: {duration: 1.5, ease: [0.5, 0, 0, 1]}}}
          exit={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", transition: {duration: 1.5, ease: [0.5, 0, 0, 1]}}}
          >
            <img src={Img1} alt="" className="project-img"/>
            <motion.div className="project-img-overlay"
            initial={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}}
            animate={{clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", transition: {duration: 1.5, delay: 0.5, ease: [0.5, 0, 0, 1]}}}
            exit={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", transition: {duration: 1.5, ease: [0.5, 0, 0, 1]}}}
            />
          </motion.div>


      </motion.div>
  )
}
