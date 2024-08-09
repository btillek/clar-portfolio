import '../components/Personal.css'
import { useState } from "react"
import PersonalOde from "../components/personal/PersonalOde"
import PersonalBog from "../components/personal/PersonalBog"
import PersonalChocolate from "../components/personal/PersonalChocolate"
import PersonalFeuer from "../components/personal/PersonalFeuer"

export default function Personal() {
  const projects = [
    "Diet ode to my ancestors",
    "Bog",
    "100% dark chocolate or poison",
    "Hast du Feuer?"
  ]

  const [ showProject, setShowProject ] = useState("Diet ode to my ancestors")
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
      <div style={{width: "100vw"}}>
        <div style={{fontSize: "3rem", fontFamily: "Work Sans", fontWeight: "500", fontStyle: "italic", position: "fixed", top: "24px", left: "24px", zIndex: "30"}}>Personal writing</div>
      </div>
      <div style={{marginTop: "96px"}}>
          <div><PersonalOde/></div>
          <div><PersonalBog /></div>
          <div><PersonalChocolate /></div>


          {/* { showProject === "Diet ode to my ancestors" && <PersonalOde setShowProject={setShowProject}/> } */}
          {/* { showProject === "Chocolate" && <PersonalChocolate setShowProject={setShowProject}/> } */}
          {/* <PersonalChocolate /> */}
      </div>
    </>
  )

  // return (
  //   <>
  //     <motion.div className="personal-menu"
  //     initial={{y: window.innerWidth}}
  //     animate={{y: 0, transition: {duration: 1, delay: 0, ease: [.2,0,0,1]}}}
  //     exit={{y: window.innerWidth, transition: {duration: 1, delay: 1, ease: [.5,0,0,.5]}}}
  //     >
  //       <div className="project-content">
  //         <AnimatePresence>
  //           { showProject === "Diet ode to my ancestors" && <PersonalOde /> }
  //           { showProject === "Bog" && <PersonalBog /> }
  //           { showProject === "100% dark chocolate or poison" && <PersonalChocolate /> }
  //           { showProject === "Hast du Feuer?" && <PersonalFeuer /> }
  //         </AnimatePresence>
  //       </div>
  //       <div className="project-titles">
  //         {
  //           projects.map((project, i) => {
  //             return (
  //               <motion.div layout transition={{duration: 1, ease: [.2,0,0,1]}}>

  //                 {
  //                   (showProject === project || showProject === null) &&
  //                   <motion.div
  //                     initial={{y: window.innerWidth / 2}}
  //                     animate={{y: 0, transition: {duration: 1, delay: i * 0.2, ease: [.8,0,0,.8]}}}
  //                     exit={{y: window.innerWidth / 2, transition: {duration: 1, delay: 0.8 - i * 0.2, ease: [1,0,0,.5]}}}
  //                     onClick={() => handleClick(project)}
  //                     onMouseEnter={() => setHighlightProject(project)}
  //                     onMouseLeave={() => setHighlightProject(null)}
  //                     className={highlightProject === project || highlightProject === null ? "project-name" : "project-name-fade"}
  //                     style={showProject !== project && showProject !== null ? {display: "none"} : null}
  //                     >
  //                       <div style={{display: "inline", fontSize: "1rem", marginRight: "12px"}}>0{i + 1}</div>
  //                       {project}
  //                   </motion.div>
  //                 }

  //               </motion.div>
  //             )
  //           })
  //         }
  //       </div>

  //     </motion.div>


  //   </>  )
}
