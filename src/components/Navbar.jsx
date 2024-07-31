import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from "framer-motion"
import { useState } from 'react'

export default function Navbar({setShowContact}) {

  const location = useLocation()

  const [ openMenu, setOpenMenu ] = useState(false)

  return (
    <motion.div className="navbar"
    // initial={{y: -200}}
    // animate={{y: 0, transition: {duration: 1.5, delay: 1, ease: [.2,0,0,.99]}}}
    >
      {
        location.pathname !== "/" ?
        <div className="dropdown-menu"
        onMouseEnter={() => setOpenMenu(true)}
        onMouseLeave={() => setOpenMenu(false)}
        >
          <AnimatePresence>
            {
              !openMenu &&
              <motion.div className="menu-btn"
              initial={{scale: 0}}
              animate={{scale: 1, transition:{delay: 0.3, ease: [.1,0,0,1]}}}
              exit={{scale: 0, transition:{ease: [.1,0,0,1]}}}
              >
                <span>Menu</span>
              </motion.div>
            }
          </AnimatePresence>
          <AnimatePresence>
          {
            openMenu &&
            <motion.div className="dropdown-list" layout>

              <motion.div className="dropdown-btn" whileHover="hover">
                <motion.div
                initial={{y: 25}}
                animate={{y: 0, transition: {duration: .5, delay: 0, ease: [.1,0,0,1]}}}
                exit={{y: 25, transition: {duration: .5, delay: 0, ease: [1,0,0,.5]}}}
                >
                  <Link to="/">Home</Link>
                </motion.div>
                <motion.div style={{width: 0, backgroundColor: "black", height: 2}}
                variants={{hover: {width: "69%"}}}
                transition={{duration: 0.3, ease: [.1, 0, 0, 1]}}
                />
              </motion.div>

              <motion.div className="dropdown-btn" whileHover="hover">
                <motion.div
                initial={{y: 25}}
                animate={{y: 0, transition: {duration: .5, delay: 0, ease: [.1,0,0,1]}}}
                exit={{y: 25, transition: {duration: .5, delay: 0, ease: [1,0,0,.5]}}}
                >
                  <Link to="/work">Work</Link>
                </motion.div>
                <motion.div style={{width: 0, backgroundColor: "black", height: 2}}
                variants={{hover: {width: "60%"}}}
                transition={{duration: 0.3, ease: [.1, 0, 0, 1]}}
                />
              </motion.div>

              <motion.div className="dropdown-btn" whileHover="hover">
                <motion.div
                  initial={{y: 25}}
                  animate={{y: 0, transition: {duration: .5, delay: 0, ease: [.1,0,0,1]}}}
                  exit={{y: 25, transition: {duration: .5, delay: 0, ease: [1,0,0,.5]}}}
                  >
                  <Link to="/personal">Personal</Link>
                </motion.div>
                <motion.div style={{width: 0, backgroundColor: "black", height: 2}}
                variants={{hover: {width: "100%"}}}
                transition={{duration: 0.3, ease: [.1, 0, 0, 1]}}
                />
              </motion.div>

              <motion.div className="dropdown-btn" whileHover="hover">
                <motion.div
                  initial={{y: 25}}
                  animate={{y: 0, transition: {duration: .5, delay: 0, ease: [.1,0,0,1]}}}
                  exit={{y: 25, transition: {duration: .5, delay: 0, ease: [1,0,0,.5]}}}
                  >
                  <Link to="/resume">Resume</Link>
                </motion.div>
                <motion.div style={{width: 0, backgroundColor: "black", height: 2}}
                variants={{hover: {width: "93%"}}}
                transition={{duration: 0.3, ease: [.1, 0, 0, 1]}}
                />
              </motion.div>

              <motion.div className="dropdown-btn" whileHover="hover" onClick={() => setShowContact(true)}>
                <motion.div
                  initial={{y: 25}}
                  animate={{y: 0, transition: {duration: .5, delay: 0, ease: [.1,0,0,1]}}}
                  exit={{y: 25, transition: {duration: .5, delay: 0, ease: [1,0,0,.5]}}}
                  >
                  <span>Contact</span>
                </motion.div>
                <motion.div style={{width: 0, backgroundColor: "black", height: 2}}
                variants={{hover: {width: "92%"}}}
                transition={{duration: 0.3, ease: [.1, 0, 0, 1]}}
                />
              </motion.div>

            </motion.div>
          }
          </AnimatePresence>
          </div>
        :
        <AnimatePresence>
          <motion.div className="menu"
          initial={{y: -200}}
          animate={{y: 0, transition: {duration: 1.5, delay: 1, ease: [.2,0,0,.99]}}}
          exit={{y: -200, transition: {duration: 1.5, delay: 1, ease: [.2,0,0,.99]}}}
          >
            {/* {
              location.pathname !=="/" &&
              <motion.div className="contact-btn" whileHover="hover">
                <Link to="/">Home</Link>
                <motion.div style={{width: 0, backgroundColor: "black", height: 2}}
                variants={{hover: {width: "100%"}}}
                transition={{duration: 0.5, ease: [1, 0, 0, 1]}}
                />
              </motion.div>
            } */}

            <AnimatePresence>
              <motion.div className="contact-btn" whileHover="hover">
                <Link to="/work">Work</Link>
                <motion.div style={{width: 0, backgroundColor: "black", height: 2}}
                variants={{hover: {width: "100%"}}}
                transition={{duration: 0.5, ease: [1, 0, 0, 1]}}
                />
              </motion.div>
            </AnimatePresence>

            <motion.div className="contact-btn" whileHover="hover">
              <Link to="/personal">Personal</Link>
              <motion.div style={{width: location.pathname === "/personal" ? "100%" : 0, backgroundColor: "black", height: 2}}
              variants={{hover: {width: "100%"}}}
              transition={{duration: 0.5, ease: [1, 0, 0, 1]}}
              />
            </motion.div>

            <motion.div className="contact-btn" whileHover="hover">
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
          </motion.div>
        </AnimatePresence>
      }
    </motion.div>
  )
}
