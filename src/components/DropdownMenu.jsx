import './DropdownMenu.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function DropdownMenu({setShowContact}) {

  const [ openMenu, setOpenMenu ] = useState(false)

  const menuItems = [
    "Home",
    "Work",
    "Personal",
    "Resume",
    "Contact"
  ]

  return (
    <div className="dropdown-menu" onMouseEnter={() => setOpenMenu(true)}>
    <AnimatePresence>
      {
        !openMenu &&
        <motion.div
        style={{overflow: "hidden"}}
        >
          <motion.div className="menu-btn"
          initial={{y: 100}}
          animate={{y: 0, transition:{delay: 0.3, ease: [.1,0,0,1]}}}
          exit={{y: 100, transition:{ease: [.5,0,0,.1]}}}
          >
            <span>Menu</span>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>
    <AnimatePresence>
      {
        openMenu &&
          <>
          <motion.div className="dropdown-overlay"
          initial={{opacity: 0}}
          animate={{opacity: 1, transition: {duration: .5}}}
          exit={{opacity: 0, transition: {duration: .5, delay: 0.3}}}
          />
          <motion.div className="dropdown-list" onMouseLeave={() => setOpenMenu(false)}>
          {
            menuItems.map((item, i) => {
              return (
                <motion.div className="dropdown-btn" whileHover="hover"
                onClick={() => setOpenMenu(false)}
                >
                  <motion.div
                  initial={{y: 70}}
                  animate={{y: 0, transition: {duration: .5, delay: 0.1 * i, ease: [.1,0,0,1]}}}
                  exit={{y: 70, transition: {duration: .25, delay: 0.1 * i, ease: [1,0,0,.5]}}}
                  >
                    <Link to={item === "Home" ? "/" : "/" + item}>{item}</Link>
                  <motion.div style={{width: 0, backgroundColor: "black", height: 4}}
                  variants={{hover: {width: "100%"}}}
                  transition={{duration: 0.3, ease: [.1, 0, 0, 1]}}
                  exit={{width: 0}}
                  />
                  </motion.div>
                </motion.div>
              )
            })
          }

          {/* <motion.div className="dropdown-btn" whileHover="hover" onClick={() => setShowContact(true)}>
            <motion.div
              initial={{y: 50}}
              animate={{y: 0, transition: {duration: .5, delay: 0, ease: [.1,0,0,1]}}}
              exit={{y: 50, transition: {duration: .5, delay: 0, ease: [1,0,0,.5]}}}
              >
              <span>Contact</span>
            </motion.div>
            <motion.div style={{width: 0, backgroundColor: "black", height: 2}}
            variants={{hover: {width: "92%"}}}
            transition={{duration: 0.3, ease: [.1, 0, 0, 1]}}
            />
          </motion.div> */}

        </motion.div>
        </>
      }
    </AnimatePresence>
    </div>
  )
}
