import '../components/Work.css'
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import DiceExtras from '../components/work/DiceExtras'
import DiceGroups from '../components/work/DiceGroups'
import WorkTitle from '../components/WorkTitle'
import Thumbnail1 from '../assets/Screenshot 2024-07-29 at 11.34.54 AM.png'
import Thumbnail2 from '../assets/Screenshot 2024-07-29 at 12.16.28 PM.png'

export default function Work2() {

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [])

  const projects = [
    {
      title: "Extras",
      img: Thumbnail1
    },
    {
      title: "Groups",
      img: Thumbnail2
    },
    {
      title: "Beyond genre",
      img: Thumbnail1
    },
    {
      title: "Spotify & Apple Music",
      img: Thumbnail2
    },
    {
      title: "Content design system",
      img: Thumbnail1
    },
    {
      title: "Filtering",
      img: Thumbnail2
    },
    {
      title: "Fan feedback",
      img: Thumbnail1
    }
  ]

  const [ showProject, setShowProject ] = useState(null)
  const [ highlightProject, setHighlightProject ] = useState(null)

  console.log(showProject);

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

        <div className="work-project-menu-container">

          <div className="work-project-title-list">
            {
              projects.map((project, i) => {
                return (
                  <WorkTitle index={i}
                  setHighLightProject={setHighlightProject}
                  onClick={() => setShowProject(project.title)}
                  >
                    {project.title}
                  </WorkTitle>
                )
              })
            }
          </div>

          <div className="work-project-thumbnail-container">
              {
                projects.map((project) => {
                    return  project.title === highlightProject ? <img src={project.img} alt="" style={{position: "absolute"}} className="work-project-thumbnail" /> : null
                  }
                )
              }
          </div>

        </div>

      </motion.div>
    </>  )
}
