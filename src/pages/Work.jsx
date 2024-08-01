import '../components/Work.css'
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { workProjects } from '../work-projects-data'
import DiceExtras from '../components/work/DiceExtras'
import DiceGroups from '../components/work/DiceGroups'
import Thumbnail1 from '../assets/Screenshot 2024-07-25 at 4.29.43 PM.png'
import Thumbnail2 from '../assets/Screenshot 2024-07-26 at 12.16.56 PM.png'


export default function Work() {

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [])

  const [ showProject, setShowProject ] = useState(null)
  const [ highlightProject, setHighlightProject ] = useState("Extras")

  const handleClick = (project) => {
    // setHighlightProject(null)
    if (showProject !== project.title) {
      setShowProject(project.title)
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
        <div style={{position: "fixed", top: "24px", left: "24px", fontSize: "2rem"}}>( WORK )</div>
        <div className="work-project-content">
          <AnimatePresence>
            { showProject === "Extras" && <DiceExtras /> }
            { showProject === "Groups" && <DiceGroups /> }
          </AnimatePresence>
        </div>

        <motion.div
        initial={{y: window.innerHeight}}
        animate={{y: 0, transition: {duration: 1, delay: 1, ease: [0.5, 0, 0, 1]}}}
        >
          {
            workProjects.map((project) => {
              return (
                <AnimatePresence>
                  {
                    highlightProject === project.title && showProject === null &&
                    <div className="thumbnail-container">
                      <motion.img src={project.img} alt="" style={{width: "30vw", height: "80vh", objectFit: "cover"}}
                      initial={{clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)"}}
                      animate={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: {duration: .5, ease: [0.5, 0, 0, 1]}}}
                      exit={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", transition: {duration: .5, delay: 0.3, ease: [0.5, 0, 0, 1]}}}
                      />
                    </div>
                  }
                </AnimatePresence>
              )
            })
          }

        </motion.div>

        <div className="work-project-titles">
          {
            workProjects.map((project, i) => {
              return (
                <motion.div key={project.title} layout transition={{duration: 1, ease: [.2,0,0,1]}}>
                  {
                    (showProject === project.title || showProject === null) &&
                    <div style={{overflow: "hidden"}}>
                      <motion.div
                        className={highlightProject === project.title || highlightProject === null ? "work-project-name" : "work-project-name-fade"}
                        style={showProject === project.title ? {border: "none"} : null}
                        initial={{x: -window.innerWidth/2}}
                        animate={{x: 0, transition: {duration: 1, delay: i * 0.1, ease: [.8,0,0,.8]}}}
                        exit={{x: -window.innerWidth/2, transition: {duration: 1, delay: 0.8 - i * 0.1, ease: [1,0,0,.5]}}}
                        onClick={() => handleClick(project)}
                        onMouseEnter={() => setHighlightProject(project.title)}
                        >
                          {
                            showProject !== project.title
                            ?
                            <span style={{display: "inline", fontSize: "1rem", marginRight: "24px", marginBottom: "6px"}}>0{i + 1}</span>
                            :
                            <div style={{display: "inline", fontSize: "1.5rem", marginRight: "20px"}}>←</div>
                          }
                          <motion.span
                          // animate={highlightProject === project ? {x: 12} : null}
                          >
                            {project.title}
                          </motion.span>
                          <AnimatePresence>
                          { showProject === null &&
                            <motion.span
                            style={{marginLeft: "auto"}}
                            initial={{x: -250, opacity: 0}}
                            animate={{x: 0, opacity: 1, transition: { duration: .5, delay: .5, ease: [.2,0,0,.8]}}}
                            >
                              →
                            </motion.span> }
                          </AnimatePresence>
                      </motion.div>
                    </div>
                  }

                </motion.div>
              )
            })
          }
        </div>
      </motion.div>


    </>  )
}
