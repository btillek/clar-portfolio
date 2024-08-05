import Header from "../components/Header"
import About from "../components/About"
import ContactOverlay from "../components/ContactOverlay"
import Marquee from "react-fast-marquee"
import Footer from "../components/Footer"
import { motion } from "framer-motion"

export default function Home() {
    return (
        <motion.div className="App">
          <Header />
          <About />
          <motion.Marquee autoFill style={{borderTop: "0.5px solid black", paddingTop: 24, paddingBottom: 24, backgroundColor: "#C2D5FF"}}
          exit={{y: window.innerWidth / 2, transition: {duration: 1, delay: 0, ease: [1,0,0,.5]}}}
          >
            <a href="mailto:clartillekens@gmail.com"
            style={{marginRight: 480, textDecoration: "none", color: "black"}}
            >Let's work together</a>
          </motion.Marquee>

          {/* <ContactOverlay showContact={showContact} setShowContact={setShowContact}/> */}
          {/* <Personal1 /> */}
          {/* <MenuOverlay showMenu={showMenu} setShowMenu={setShowMenu} setShowResume={setShowResume}/> */}
          {/* <Resume /> */}
          <Footer />
        </motion.div>
    )
}
