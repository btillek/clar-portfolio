import './PersonalOde.css'
import ImgBeer from '../../assets/Screenshot 2024-07-22 at 4.20.16 PM.png'
import ImgButter from '../../assets/Screenshot 2024-07-30 at 3.07.14 PM.png'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

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
  const [ mousePos, setMousePos ] = useState({x: null, y: null})

  useEffect(() => {
    window.addEventListener('mousemove', (e) => setMousePos({x: e.clientX, y: e.clientY}))
  }, [])

  return (
    <div className="personal-project-body"
    style={{backgroundColor: "#F2EDE6", color: "black"}}
    >

      {/* <div className="personal-project-left">

        <motion.div className="personal-project-img-container"
        initial={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"}}
        animate={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
        exit={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
        >
          <img src={ImgBeer} alt="" className="personal-project-img" style={{height: "95vh"}}/>
          <img src={ImgButter} alt="" className="personal-project-img"/>
        </motion.div>

      </div> */}

        <motion.div className="personal-project-img-container"
        style={{width: "350px", position: "fixed", top: mousePos.y + 10, left: mousePos.x + 10}}
        initial={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"}}
        animate={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
        exit={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
        >
          <img src={ImgBeer} alt="" className="personal-project-img" style={{height: "500px"}}/>

        </motion.div>

      <motion.div className="personal-project-text"
      onClick={() => {setShowProject("Chocolate")}}
      style={{backgroundColor: "#F2EDE6", color: "black"}}
      initial={{y: -window.innerHeight}}
      animate={{y: 0, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
      exit={{y: -window.innerHeight, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
      >
        <motion.h2 className="personal-project-title">
        <span style={{display: "inline", fontSize: "1rem", marginRight: "24px", marginBottom: "6px"}}>01</span>
          Diet ode to my ancestors
        </motion.h2>
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
        <div className="personal-project-footnote">
          <a href="https://spectrapoets.org/Diet-ode-to-my-ancestors-by-Clar-Tillekens" target="_blank" rel="noreferrer" className="personal-project-link">
            ( Published in Spectra )
          </a>
          <span style={{fontStyle: "italic", fontSize: "1rem", opacity: .5}}>Sept 15, 2023</span>
        </div>
      </motion.div>
    </div>
  )
}
