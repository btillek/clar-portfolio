import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function WorkTitle({ children, index, setHighLightProject, onClick }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-50% 0% -50% 0%"})


  return (
    <motion.div ref={ref} key={index} layout transition={{duration: 1, ease: [.2,0,0,1]}}>
      <div style={{overflow: "hidden"}}>
        <motion.div
          initial={{y: window.innerWidth}}
          animate={{y: 0, transition: {duration: 1, delay: index * 0.1, ease: [.8,0,0,.8]}}}
          exit={{y: window.innerWidth, transition: {duration: 1, delay: 0.8 - index * 0.1, ease: [1,0,0,.5]}}}
          className="work-project-title"
          style={isInView ? {opacity: 1} : {opacity: 0.3}}
          onClick={onClick}
          >
            <div style={{display: "inline", fontSize: "1rem", marginRight: "12px"}}>0{index + 1}</div>
            {children}
            {isInView ? setHighLightProject(children) : null}
        </motion.div>
      </div>
    </motion.div>
  )
}
