import Header from "../components/Header"
import About from "../components/About"
import Footer from "../components/Footer"
import { cubicBezier, motion, useMotionTemplate, useScroll, useTransform } from "framer-motion"
import Image from '../assets/Screenshot 2024-07-22 at 4.20.16 PM.png'
import { useRef } from "react"


export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"]
  })
  const y1 = useTransform(scrollYProgress, [0, 1], [500, 0])
  const scale = useTransform(scrollYProgress, [0, .7], [0, 1])

  return (
    <motion.div className="App">
      <Header />
      <About />
      <div style={{ height: "75vh", position: "relative", zIndex: "100", clipPath: "polygon(0 -5%, 100% -5%, 100% 100%, 0 100%)"}}>
        <motion.div style={{height: "500px", position: "fixed", bottom: "38px", right: "30px"}}>
          <motion.img src={Image} alt="" style={{height: "100%", width: "401px"}}
          initial={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"}}
          animate={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: {duration: 2, delay: 1.5, ease: [0.5, 0, 0, 1]}}}
          exit={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", transition: {duration: 1.5, ease: [0.5, 0, 0, 1]}}}
          />
        </motion.div>

        <motion.div ref={ref} style={{marginLeft: "270px", y: y1, scale, originX: 0, originY: .5}}>
          <div>
            <button style={{marginRight: "48px", fontSize: "1rem", color: "black", border: "1px solid black", padding: "12px", borderRadius: "50px"}}>Get in touch</button>
            <button style={{fontSize: "1rem", color: "black", border: "1px solid black", padding: "12px", borderRadius: "50px"}}>View my work</button>
          </div>
        </motion.div>

      </div>

    </motion.div>
  )
}
