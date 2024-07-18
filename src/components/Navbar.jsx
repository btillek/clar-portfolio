import './Navbar.css'
import { motion } from "framer-motion"

export default function Navbar({setShowMenu}) {

  return (
    <motion.div className="navbar"
    initial={{y: -200}}
    animate={{y: 0, transition: {duration: 1.5, delay: 1, ease: [.2,0,0,.99]}}}
    >
      {/* <div className="name">C</div> */}

      <motion.div className="contact-btn" whileHover="hover"
      onClick={() => setShowMenu(true)}
      >

        <div>Menu</div>
        <motion.div style={{width: 0, backgroundColor: "black", height: 2}}
        variants={{hover: {width: "100%"}}}
        transition={{duration: 0.5, ease: [1, 0, 0, 1]}}
        />

      </motion.div>

      {/* <div>Berlin, Germany</div> */}

      {/* <ul className="menu">
        <li>Resume</li>
        <li>Work</li>
        <li>Personal</li>
        <li>Contact</li>
      </ul> */}

    </motion.div>
  )
}
