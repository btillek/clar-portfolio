import './ContactOverlay.css'
import Portrait from '../assets/Portrait.png'

import { AnimatePresence, motion } from 'framer-motion'

export default function ContactOverlay({showContact, setShowContact}) {

  const contactItems = [
    {
      text: "clartillekens@gmail.com",
      link: "mailto:clartillekens@gmail.com"
    },
    {
      text: "Instagram",
      link: "https://www.instagram.com/clarmc/?hl=nl"
    },
    {
      text: "Linkedin",
      link: "https://www.linkedin.com/in/clartillekens/"
    }
  ]
  return (
    <>
      <AnimatePresence>
        {showContact &&
          <motion.div className="contact-overlay"
          initial={{y: -window.innerHeight }}
          animate={{y: 0, transition: {duration: 1.5, ease: [0.5, 0, 0, 1]}}}
          exit={{y: -window.innerHeight, transition: {duration: 1.5, ease: [0.5, 0, 0, 1]}}}
          >

            <div className="contact-portrait-container">
              <motion.img src={Portrait} alt="" className="contact-portrait"
              initial={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"}}
              animate={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: {duration: 1.5, delay: 1.5, ease: [0.5, 0, 0, 1]}}}/>
            </div>

            <div className="contact-list">

              <motion.div className="contact-crop">
                <motion.div className="contact-link"
                style={{fontSize: "1rem"}}
                initial={{y: 190}}
                animate={{y: 0, transition: {duration: 1, delay: 1, ease: [.2,0,0,.99]}}}
                >
                  Get in touch
                </motion.div>
              </motion.div>
              {
                contactItems.map((item, i) => {
                  return (
                    <motion.div className="contact-crop" whileHover="hover">
                      <motion.div
                      className="contact-link"
                      initial={{y: 190}}
                      animate={{y: 0, transition: {duration: 1, delay: 1 + 0.2 * i, ease: [.2,0,0,.99]}}}
                      >
                        <a href={item.link} style={{color: "#F5F5F5"}}>{item.text}</a>
                      </motion.div>
                      <motion.div style={{width: 0, backgroundColor: "#F5F5F5", height: 4}}
                      variants={{hover: {width: "100%"}}}
                      transition={{duration: 0.3, ease: [.1, 0, 0, 1]}}
                      exit={{width: 0}}
                      />
                    </motion.div>
                  )
                })
              }

                <motion.div className="contact-crop">
                  <motion.div className="contact-link"
                  style={{position: "fixed", bottom: "24px", right: "24px", fontSize: "1rem"}}
                  initial={{y: 190}}
                  animate={{y: 0, transition: {duration: 1, delay: 1.2, ease: [.2,0,0,.99]}}}

                  >
                    © Clár Tillekens
                  </motion.div>
                </motion.div>

              </div>

              <div className="close-btn" onClick={() => setShowContact(false)}>✕</div>
          </motion.div>
          }
      </AnimatePresence>
    </>
  )
}
