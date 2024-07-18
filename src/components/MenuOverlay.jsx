import './MenuOverlay.css'

import { AnimatePresence, motion } from 'framer-motion'

export default function MenuOverlay({showMenu, setShowMenu}) {

  const menuItems = [ "Resume", "Work", "Personal", "Contact"]

  return (
    <>
      <AnimatePresence>
        {showMenu &&
          <motion.div className="menu-overlay"
          initial={{y: -window.innerHeight }}
          animate={{y: 0, transition: {duration: 1.5, ease: [0.5, 0, 0, 1]}}}
          exit={{y: -window.innerHeight, transition: {duration: 1.5, ease: [0.5, 0, 0, 1]}}}
          >
              <ul className="menu-list">
                {menuItems.map((item, i) => {
                  return (
                    <div className="menu-crop">
                      <motion.li
                      initial={{y: 90}}
                      animate={{y: 0, transition: {duration: 1, delay: 1 + (i * 0.2), ease: [.2,0,0,.99]}}}
                      >
                        {item}
                      </motion.li>
                    </div>
                  )
                })}
              </ul>
              <div className="close-btn" onClick={() => setShowMenu(false)}>✕</div>
          </motion.div>
          }
      </AnimatePresence>
    </>
  )
}
