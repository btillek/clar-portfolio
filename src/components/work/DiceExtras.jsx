import './DiceExtras.css'
import ExtrasImg1 from '../../assets/Screenshot 2024-07-25 at 4.26.00 PM.png'
import ExtrasImg2 from '../../assets/Screenshot 2024-07-25 at 4.29.43 PM.png'
import { motion } from 'framer-motion'

export default function DiceExtras() {
  return (
      <motion.div className="work-body">
        <motion.div className="work-text"
        initial={{y: -window.innerHeight}}
        animate={{y: 0, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
        exit={{y: -window.innerHeight, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
        >
          <p>“Extras” is the term I came up with for non-ticket purchases – when fans have the option to buy experiences after they get their tickets</p>
          <ul>
            <li>“Add-ons” is easy to understand, but comes off as dry and superfluous</li>
              <li>“Upgrades” didn’t work as it could be mistaken for getting a better ticket type</li>
              <li>“Extras” ended up being perfect as it doesn’t diminish the experience of just having a ticket</li>
              <li>Fans in the UK were especially sensitive to any kind of exclusionary language, especially considering DICE’s DIY punk roots</li>
              <li>We introduce extras on native and web in slightly different ways (less vs. more space, can only buy extras in the app for now)</li>
          </ul>
        </motion.div>

        <div className="work-imgs">
          <motion.div className="work-img-container"
          initial={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"}}
          animate={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: {duration: 1.5, ease: [0.5, 0, 0, 1]}}}
          exit={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", transition: {duration: 1.5, ease: [0.5, 0, 0, 1]}}}
          >
            <img src={ExtrasImg1} alt="" className="project-img"/>
          </motion.div>

          <motion.div className="work-img-container">
            <img src={ExtrasImg2} alt="" className="project-img"/>
          </motion.div>
        </div>

      </motion.div>
  )
}
