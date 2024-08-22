import './PersonalOde.css'
import ImgBeer from '../../assets/Screenshot 2024-07-22 at 4.20.16 PM.png'
import ImgButter from '../../assets/Screenshot 2024-07-30 at 3.07.14 PM.png'
import { motion } from 'framer-motion'
import { useParallax } from 'react-scroll-parallax'

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

export default function PersonalOde() {
  return (
    <motion.div className="personal-project-body"
    initial={{y: window.innerHeight}}
    animate={{y: 0, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
    exit={{y: window.innerHeight, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
    >

        <h2 className="personal-project-title">
          {
            "Diet ode to my ancestors".split(" ").map((word, i) => {
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
        </h2>

      <div className="personal-project-middle">

        <div className="personal-project-img-container"
        style={{paddingLeft: "96px", paddingTop: "96px"}}
        >
          <motion.img src={ImgBeer} alt="" className="personal-project-img" style={{height: "400px", marginTop: "-48px"}}
          initial={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"}}
          animate={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: {duration: 1, delay: 1, ease: [0.5, 0, 0, 1]}}}
          exit={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
          />
          <motion.img src={ImgButter} alt="" className="personal-project-img"
          initial={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"}}
          animate={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: {duration: 1, delay: 1.5, ease: [0.5, 0, 0, 1]}}}
          exit={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
          />
        </div>

        <div className="personal-project-text">
          {
            projectContent.map((line, i) => {
              return (
                <motion.div style={{overflow: "hidden"}}>
                  <motion.div
                  initial={{y: 50}}
                  animate={{y: 0, transition: {duration: 1, delay: 0.1 * i + 1.5, ease: [0.5, 0, 0, 1]}}}
                  exit={{y: -50, transition: {duration: 1, delay: 0.1 * i, ease: [0.5, 0, 0, 1]}}}
                  >
                    {line}
                  </motion.div>
                </motion.div>
              )
            })
          }
          <br />
          <a href="https://spectrapoets.org/Diet-ode-to-my-ancestors-by-Clar-Tillekens" target="_blank" rel="noreferrer" className="personal-project-link">
            ( Published in Spectra )
          </a>
        </div>

      </div>

      {/* <div className="personal-project-footnote">
        <a href="https://spectrapoets.org/Diet-ode-to-my-ancestors-by-Clar-Tillekens" target="_blank" rel="noreferrer" className="personal-project-link">
          ( Published in Spectra )
        </a>
        <span style={{fontStyle: "italic", fontSize: "1rem", opacity: .5}}>Sept 15, 2023</span>
      </div> */}

    </motion.div>
  )
}
