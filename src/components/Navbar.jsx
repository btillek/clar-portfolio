import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from "framer-motion"
import { useState } from 'react'
import DropdownMenu from './DropdownMenu'

export default function Navbar({setShowContact}) {

  const location = useLocation()

  const menuItems = [
    "Work",
    "Personal",
    "Resume"
  ]

  return (
    <motion.div className="navbar">
      {
        location.pathname !== "/" ?
        <DropdownMenu setShowContact={setShowContact}/>
        :
        <AnimatePresence>
          <div className="menu">

            {
              menuItems.map((item, i) => {
                return (
                  <motion.div className="contact-btn"
                  initial={{y: -200}}
                  animate={{y: 0, transition: {duration: .5, delay: 0.1 * i + 2, ease: [.2,0,0,.99]}}}
                  exit={{y: -200, transition: {duration: .5, delay: 0.1 * i, ease: [.2,0,0,.99]}}}
                  whileHover="hover">
                    <Link to={"/" + item}>{item}</Link>
                    <motion.div style={{width: 0, backgroundColor: "black", height: 2}}
                    variants={{hover: {width: "100%"}}}
                    transition={{duration: 0.5, ease: [1, 0, 0, 1]}}
                    />
                  </motion.div>
                )
              })
            }

            <motion.div className="contact-btn"
            initial={{y: -200}}
            animate={{y: 0, transition: {duration: .5, delay: menuItems.length * 0.1 + 2, ease: [.2,0,0,.99]}}}
            exit={{y: -200, transition: {duration: .5, delay: 0.1 * menuItems.length, ease: [.2,0,0,.99]}}}
            whileHover="hover"
            onClick={() => setShowContact(true)}
            >
              <div>Contact</div>
              <motion.div style={{width: 0, backgroundColor: "black", height: 2}}
              variants={{hover: {width: "100%"}}}
              transition={{duration: 0.5, ease: [1, 0, 0, 1]}}
              />
            </motion.div>
          </div>
        </AnimatePresence>
      }
    </motion.div>
  )
}
