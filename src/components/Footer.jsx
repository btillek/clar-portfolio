import './Footer.css'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
      <motion.div className="footer-container"
      exit={{y: window.innerWidth / 2, transition: {duration: 1, delay: 0, ease: [1,0,0,.5]}}}
      >
        <div className="footer-fixed">
          <div className="footer">
            <div>
              <div>Resume</div>
              <div>Work</div>
              <div>Personal</div>
              <div>Contact</div>
            </div>
            <div style={{fontSize: "3rem"}}>© 2024 Clár Tillekens</div>
          </div>
        </div>
      </motion.div>
  )
}
