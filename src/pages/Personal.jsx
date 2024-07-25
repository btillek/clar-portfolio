import '../components/Personal.css'
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import PersonalOde from "../components/personal/PersonalOde"
import PersonalBog from "../components/personal/PersonalBog"
import PersonalChocolate from "../components/personal/PersonalChocolate"
import PersonalFeuer from "../components/personal/PersonalFeuer"

export default function Personal() {

  document.documentElement.scrollTop = 0;

  const projects = [
    "Diet ode to my ancestors",
    "Bog",
    "100% dark chocolate or poison",
    "Hast du Feuer?"
  ]

  const [ showProject, setShowProject ] = useState(null)
  const [ highlightProject, setHighlightProject ] = useState(null)

  const handleClick = (project) => {
    if (showProject !== project) {
      setShowProject(project)
    } else {
      setShowProject(null)
    }
  }

  return (
    <>
      <motion.div className="personal-menu"
      initial={{y: window.innerWidth}}
      animate={{y: 0, transition: {duration: 1, delay: 0, ease: [.2,0,0,1]}}}
      exit={{y: window.innerWidth, transition: {duration: 1, delay: 1, ease: [.5,0,0,.5]}}}
      >
        <div className="project-content">
          <AnimatePresence>
            { showProject === "Diet ode to my ancestors" && <PersonalOde /> }
            { showProject === "Bog" && <PersonalBog /> }
            { showProject === "100% dark chocolate or poison" && <PersonalChocolate /> }
            { showProject === "Hast du Feuer?" && <PersonalFeuer /> }
          </AnimatePresence>
        </div>
        <div className="project-titles">
          {
            projects.map((project, i) => {
              return (
                <motion.div layout transition={{duration: 1, ease: [.2,0,0,1]}}>

                  {
                    (showProject === project || showProject === null) &&
                    <motion.div
                      initial={{y: window.innerWidth / 2}}
                      animate={{y: 0, transition: {duration: 1, delay: i * 0.2, ease: [.8,0,0,.8]}}}
                      exit={{y: window.innerWidth / 2, transition: {duration: 1, delay: 0.8 - i * 0.2, ease: [1,0,0,.5]}}}
                      onClick={() => handleClick(project)}
                      onMouseEnter={() => setHighlightProject(project)}
                      onMouseLeave={() => setHighlightProject(null)}
                      className={highlightProject === project || highlightProject === null ? "project-name" : "project-name-fade"}
                      style={showProject !== project && showProject !== null ? {display: "none"} : null}
                      >
                        <div style={{display: "inline", fontSize: "1rem", marginRight: "12px"}}>0{i + 1}</div>
                        {project}
                    </motion.div>
                  }

                </motion.div>
              )
            })
          }
        </div>

      </motion.div>


    </>  )
}
