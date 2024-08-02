import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function WorkText({ children, setHighlightSection, id }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-50% 0% -50% 0%"})

  return (
    <motion.div ref={ref} style={{paddingTop: "24px", borderBottom: ".5px solid black"}}>
        <motion.div style={isInView ? {opacity: 1} : {opacity: 0.5}}>
            {children}
            {isInView ? setHighlightSection(id) : null}
        </motion.div>
    </motion.div>
  )
}
