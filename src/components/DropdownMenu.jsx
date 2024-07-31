import './DropdownMenu.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function DropdownMenu({setShowContact}) {

  const [ openMenu, setOpenMenu ] = useState(false)

  return (
    <div className="dropdown-menu"
        onMouseEnter={() => setOpenMenu(true)}
        onMouseLeave={() => setOpenMenu(false)}
        >
          <AnimatePresence>
            {
              !openMenu &&
              <motion.div className="menu-btn"
              initial={{x: 100}}
              animate={{x: 0, transition:{delay: 0.3, ease: [.1,0,0,1]}}}
              exit={{x: 100, transition:{ease: [.1,0,0,1]}}}
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
  )
}
