import '../components/Work.css'
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { workProjects } from '../work-projects-data'
import DiceExtras from '../components/work/DiceExtras'
import DiceExtras2 from '../components/work/DiceExtras2'
import DiceGroups from '../components/work/DiceGroups'
import DiceBeyond from '../components/work/DiceBeyond'

export default function Work() {

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [])

  const [ showProject, setShowProject ] = useState(null)
  const [ highlightProject, setHighlightProject ] = useState("Extras")

  const handleClick = (project) => {
    showProject !== project.title ? setShowProject(project.title) : setShowProject(null)
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
        {
          showProject === null &&
          <div style={{position: "fixed", top: "24px", left: "24px", fontSize: "2rem", transform: "skew(-15deg)"}}>( WORK )</div>
        }

        <div className="work-project-content">
          <AnimatePresence>
            { showProject === "Extras" && <DiceExtras2 /> }
            { showProject === "Groups" && <DiceGroups /> }
            { showProject === "Beyond genre" && <DiceBeyond /> }
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
                    <div  className="thumbnail-container">
                      <motion.img src={project.img} alt="" style={{width: "35vw", height: "90vh", objectFit: "cover"}}
                      initial={{clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)"}}
                      animate={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: {duration: .3, ease: [0.5, 0, 0, 1]}}}
                      exit={{clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", transition: {duration: .3, delay: 0.3, ease: [0.5, 0, 0, 1]}}}
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
                      <AnimatePresence>
                      {
                        // Horizontal lines between projects
                        showProject === null &&
                        <motion.div style={{width: "100%", backgroundColor: "black", height: .5}}
                        initial={{width: 0}}
                        animate={{width: "100%", transition: {duration: 1, delay: i * 0.1 + .5, ease: [.8,0,0,.8]}}}
                        exit={{width: 0, transition: {duration: 1, delay: 0, ease: [.8,0,0,.8]}}}
                        />
                      }
                      </AnimatePresence>
                      <motion.div
                        className={highlightProject === project.title || highlightProject === null ? "work-project-name" : "work-project-name-fade"}
                        style={showProject === project.title ? {border: "none"} : null}
                        initial={{y: 150}}
                        animate={{y: 0, transition: {duration: 1, delay: i * 0.1, ease: [.8,0,0,.8]}}}
                        exit={{y: 150, transition: {duration: 1, delay: 0.8 - i * 0.1, ease: [1,0,0,.5]}}}
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
                          {project.title}
                          <AnimatePresence>
                            {
                              showProject === null &&
                              <motion.span
                              style={{marginLeft: "auto"}}
                              initial={{x: -250, opacity: 0}}
                              animate={{x: 0, opacity: 1, transition: { duration: .5, delay: 1, ease: [.2,0,0,.8]}}}
                              >
                                →
                              </motion.span>
                            }
                          </AnimatePresence>
                      </motion.div>
                    </div>
                  }

                </motion.div>
              )
            })
          }
          <AnimatePresence>
            {
              // Last horizontal line
              showProject === null &&
              <motion.div style={{width: "100%", backgroundColor: "black", height: .5}}
              initial={{width: 0}}
              animate={{width: "100%", transition: {duration: 1, delay: workProjects.length * 0.1 + .5, ease: [.8,0,0,.8]}}}
              exit={{width: 0, transition: {duration: 1, delay: 0, ease: [.8,0,0,.8]}}}
              />
            }
            </AnimatePresence>
        </div>
      </motion.div>


    </>  )
}
