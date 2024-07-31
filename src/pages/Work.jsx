import '../components/Work.css'
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import DiceExtras from '../components/work/DiceExtras'
import DiceGroups from '../components/work/DiceGroups'
import Thumbnail1 from '../assets/Screenshot 2024-07-29 at 11.34.54 AM.png'
import Thumbnail2 from '../assets/Screenshot 2024-07-29 at 12.16.28 PM.png'

export default function Work() {

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [])

  const projects = [
    "Extras",
    "Groups",
    "Beyond genre",
    "Spotify & Apple Music",
    "Content design system",
    "Filtering",
    "Fan feedback"
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
            { showProject === "Extras" && <DiceExtras /> }
            { showProject === "Groups" && <DiceGroups /> }
          </AnimatePresence>
        </div>
        <div className="work-project-titles">

          <AnimatePresence>
          {
            highlightProject === "Extras" && showProject === null &&
            <div className="thumbnail-container">
              <motion.img src={Thumbnail1} alt="" style={{width: "30vw"}}
              initial={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"}}
              animate={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
              exit={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
              />
            </div>
          }
          </AnimatePresence>
          <AnimatePresence>
          {
            highlightProject === "Groups" && showProject === null &&
            <div className="thumbnail-container">
              <motion.img src={Thumbnail2} alt="" style={{width: "30vw"}}
              initial={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"}}
              animate={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
              exit={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
              />
            </div>
          }
          </AnimatePresence>

          {
            projects.map((project, i) => {
              return (
                <motion.div key={project} layout transition={{duration: 1, ease: [.2,0,0,1]}}>

                  {
                    (showProject === project || showProject === null) &&
                    <div style={{overflow: "hidden"}}>
                      <motion.div
                        style={{display: "flex"}}
                        initial={{y: window.innerWidth}}
                        animate={{y: 0, transition: {duration: 1, delay: i * 0.1, ease: [.8,0,0,.8]}}}
                        exit={{y: window.innerWidth, transition: {duration: 1, delay: 0.8 - i * 0.1, ease: [1,0,0,.5]}}}
                        onClick={() => handleClick(project)}
                        onMouseEnter={() => setHighlightProject(project)}
                        onMouseLeave={() => setHighlightProject(null)}
                        className={highlightProject === project || highlightProject === null ? "work-project-name" : "work-project-name-fade"}
                        >
                          {
                            showProject !== project
                            ?
                            <div style={{display: "inline", fontSize: "1rem", marginRight: "12px"}}>0{i + 1}</div>
                            :
                            <div style={{display: "inline", fontSize: "1.5rem", marginRight: "6px"}}>↩</div>
                          }
                          {project}
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
