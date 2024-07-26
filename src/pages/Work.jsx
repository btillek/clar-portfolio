import '../components/Work.css'
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import DiceExtras from '../components/work/DiceExtras'

export default function Work() {

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [])

  const projects = [
    "DICE Extras",
    "DICE Groups",
    "DICE Beyond genre",
    "DICE Spotify & Apple Music",
    "DICE Content design system",
    "DICE Filtering",
    "DICE Fan feedback"
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
      <motion.div className="transition-swipe"
      initial={{y: window.innerHeight}}
      animate={{y: -window.innerHeight, transition: {duration: 2, delay: 0, ease: [.2,0,0,1]}}}
      exit={{y: window.innerHeight, transition: {duration: 2, delay: 1, ease: [.2,0,0,1]}}}
      />
      <motion.div className="work-menu"
      initial={{y: window.innerWidth}}
      animate={{y: 0, transition: {duration: 1, delay: 0, ease: [.2,0,0,1]}}}
      exit={{y: "100%", transition: {duration: 1, delay: 0.5, ease: [.5,0,0,.5]}}}
      >
        <div className="work-project-content">
          <AnimatePresence>
            { showProject === "DICE Extras" && <DiceExtras /> }
          </AnimatePresence>
        </div>
        <div className="work-project-titles">
          {
            projects.map((project, i) => {
              return (
                <motion.div layout transition={{duration: 1, ease: [.2,0,0,1]}}>

                  {
                    (showProject === project || showProject === null) &&
                    <motion.div
                      initial={{y: window.innerWidth}}
                      animate={{y: 0, transition: {duration: 1, delay: i * 0.2, ease: [.8,0,0,.8]}}}
                      exit={{y: window.innerWidth, transition: {duration: 1, delay: 0.8 - i * 0.2, ease: [1,0,0,.5]}}}
                      onClick={() => handleClick(project)}
                      onMouseEnter={() => setHighlightProject(project)}
                      onMouseLeave={() => setHighlightProject(null)}
                      className={highlightProject === project || highlightProject === null ? "work-project-name" : "work-project-name-fade"}
                      // style={showProject !== project && showProject !== null ? {display: "none"} : null}
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
