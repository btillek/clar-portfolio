import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import { motion } from "framer-motion"

export default function Navbar({setShowContact}) {

  const location = useLocation()

  return (
    <motion.div className="navbar"
    initial={{y: -200}}
    animate={{y: 0, transition: {duration: 1.5, delay: 1, ease: [.2,0,0,.99]}}}
    >

      <div className="menu">
        {
          location.pathname !=="/" &&
          <motion.div className="contact-btn" whileHover="hover">
            <Link to="/">Home</Link>
            <motion.div style={{width: 0, backgroundColor: "black", height: 2}}
            variants={{hover: {width: "100%"}}}
            transition={{duration: 0.5, ease: [1, 0, 0, 1]}}
            />
          </motion.div>
        }

        <motion.div className="contact-btn" whileHover="hover"
        >
          <Link to="/work">Work</Link>
          <motion.div style={{width: 0, backgroundColor: "black", height: 2}}
          variants={{hover: {width: "100%"}}}
          transition={{duration: 0.5, ease: [1, 0, 0, 1]}}
          />
        </motion.div>

        <motion.div className="contact-btn" whileHover="hover"
        >
          <Link to="/personal">Personal</Link>
          <motion.div style={{width: location.pathname === "/personal" ? "100%" : 0, backgroundColor: "black", height: 2}}
          variants={{hover: {width: "100%"}}}
          transition={{duration: 0.5, ease: [1, 0, 0, 1]}}
          />
        </motion.div>

        <motion.div className="contact-btn" whileHover="hover"
        >
          <Link to="resume">Resume</Link>
          <motion.div style={{width: 0, backgroundColor: "black", height: 2}}
          variants={{hover: {width: "100%"}}}
          transition={{duration: 0.5, ease: [1, 0, 0, 1]}}
          />
        </motion.div>

        <motion.div className="contact-btn" whileHover="hover"
        onClick={() => setShowContact(true)}
        >
          <div>Contact</div>
          <motion.div style={{width: 0, backgroundColor: "black", height: 2}}
          variants={{hover: {width: "100%"}}}
          transition={{duration: 0.5, ease: [1, 0, 0, 1]}}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
