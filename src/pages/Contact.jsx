import '../components/ContactOverlay.css'
import Portrait from '../assets/Portrait.png'

import { AnimatePresence, motion } from 'framer-motion'

export default function ContactOverlay() {
  return (
    <>
      <motion.div className="contact-overlay"
      initial={{y: -window.innerHeight }}
      animate={{y: 0, transition: {duration: 1.5, ease: [0.5, 0, 0, 1]}}}
      exit={{y: -window.innerHeight, transition: {duration: 1.5, ease: [0.5, 0, 0, 1]}}}
      >

            <div className="contact-portrait-container">
              <motion.img src={Portrait} alt="" className="contact-portrait"
              initial={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"}}
              animate={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: {duration: 1.5, delay: 1, ease: [0.5, 0, 0, 1]}}}/>
            </div>

          <div className="contact-list">

            <div className="contact-crop">
              <motion.div className="contact-link"
              initial={{y: 190}}
              animate={{y: 0, transition: {duration: 1, delay: 1, ease: [.2,0,0,.99]}}}
              >
                clartillekens@gmail.com
              </motion.div>
              <motion.div className="contact-link"
              initial={{y: 190}}
              animate={{y: 0, transition: {duration: 1, delay: 1, ease: [.2,0,0,.99]}}}
              >
                phone number?
              </motion.div>
            </div>

            <div className="contact-crop">
              <motion.div className="contact-link"
              initial={{y: 190}}
              animate={{y: 0, transition: {duration: 1, delay: 1.2, ease: [.2,0,0,.99]}}}
              >
                Instagram
              </motion.div>
              <motion.div className="contact-link"
              initial={{y: 90}}
              animate={{y: 0, transition: {duration: 1, delay: 1.2, ease: [.2,0,0,.99]}}}
              >
                Linkedin
              </motion.div>
            </div>

            <div className="contact-crop">
              <motion.div className="contact-link"
              initial={{y: 190}}
              animate={{y: 0, transition: {duration: 1, delay: 1.2, ease: [.2,0,0,.99]}}}
              style={{fontStyle: "italic"}}
              >
                Location:
              </motion.div>
              <motion.div className="contact-link"
              initial={{y: 190}}
              animate={{y: 0, transition: {duration: 1, delay: 1.2, ease: [.2,0,0,.99]}}}
              >
                Berlin, Germany
              </motion.div>
            </div>

            <div className="contact-crop">
              <motion.div className="contact-link"
              initial={{y: 190}}
              animate={{y: 0, transition: {duration: 1, delay: 1.2, ease: [.2,0,0,.99]}}}

              >
                © Clár Tillekens
              </motion.div>
            </div>

          </div>

          <div className="close-btn" onClick={() => window.history.back()}>✕</div>
      </motion.div>
    </>
  )
}
