import './PersonalOde.css'
import ImgBeer from '../../assets/Screenshot 2024-07-22 at 4.20.16 PM.png'
import ImgButter from '../../assets/Screenshot 2024-07-30 at 3.07.14 PM.png'
import { motion } from 'framer-motion'

const projectContent = [
  "Guggering potatoes. You heard that right? It’s not googling.",
  "Dad is telling me about a method for planting the crop, what he grew up doing.",
  "I never did that on FarmVille back in the day.",
  "My father made use of his hands. Dirtied them, felt the soil.",
  "Out of respect for my forebearers, I’m no longer eating chips, crisps, or fries.",
  "I only want potatoes in their purest preparations.",
  "Acceptable forms of spuds:",
  " • Boiled",
  " • Mashed",
  " • Baked",
  " • Roasted",
  " • Bread",
  " • Boxty"
]

export default function PersonalOde( { setShowProject }) {
  return (
    <div className="personal-project-body">

    <div className="personal-project-left">

      <motion.h2 className="personal-project-title"
      initial={{x: -350}}
      animate={{x: 0, transition: {duration: 1, delay: 0.5, ease: [0.5, 0, 0, 1]}}}
      exit={{x: -350, transition: {duration: 1, delay: 0.5, ease: [0.5, 0, 0, 1]}}}
      >
        Diet ode <br /> to my <br /> ancestors
      </motion.h2>

      <motion.div className="personal-project-img-container"
      initial={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"}}
      animate={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
      exit={{clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
      >
        <img src={ImgBeer} alt="" className="personal-project-img" />
        <img src={ImgButter} alt="" className="personal-project-img" />
      </motion.div>
    </div>

    <div className="personal-project-text" onClick={() => setShowProject("Bog")}>
    <div className="personal-project-paragraph">
      {
        projectContent.map((line, i) => {
          return (
            <motion.div style={{overflow: "hidden"}}>
              <motion.span className="personal-project-line"
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

      <a href="https://spectrapoets.org/Diet-ode-to-my-ancestors-by-Clar-Tillekens" target="_blank" rel="noreferrer" className="personal-project-link">
        ( Published in Spectra )
      </a>
    </div>

  </div>  )
}
