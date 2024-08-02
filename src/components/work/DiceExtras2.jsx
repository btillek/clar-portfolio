import './DiceExtras.css'
import ImageReveal from '../ImageReveal'
import TextReveal from '../TextReveal'
import WorkText from './WorkText'
import ExtrasImg2 from '../../assets/Screenshot 2024-07-25 at 4.29.43 PM.png'
import ExtrasImg3 from '../../assets/Screenshot 2024-07-26 at 11.19.36 AM.png'
import ExtrasImg4 from '../../assets/Screenshot 2024-07-26 at 12.16.56 PM.png'
import ExtrasImg5 from '../../assets/Screenshot 2024-07-26 at 12.19.42 PM.png'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export default function DiceExtras() {

  const extrasContent = [
    {
      text: <>
              <p style={{paddingBottom: "12px"}}>“Extras” is the term I came up with for non-ticket purchases – when fans have the option to buy experiences after they get their tickets</p>


              <p style={{paddingBottom: "12px"}}>“Add-ons” is easy to understand, but comes off as dry and superfluous</p>
              <p style={{paddingBottom: "12px"}}>“Upgrades” didn’t work as it could be mistaken for getting a better ticket type</p>


              <p style={{paddingBottom: "12px"}}>“Extras” ended up being perfect as it doesn’t diminish the experience of just having a ticket</p>
              <p style={{paddingBottom: "12px"}}>Fans in the UK were especially sensitive to any kind of exclusionary language, especially considering DICE’s DIY punk roots</p>


              <p style={{paddingBottom: "12px"}}>We introduce extras on native and web in slightly different ways (less vs. more space, can only buy extras in the app for now)</p>
            </>,
      img: ExtrasImg2,
      id: 1
    },
    {
      text: <>
              <p style={{paddingBottom: "12px"}}>Since we control the illustrations for each extra, I made sure we also controlled the initial generic descriptions</p>
              <p style={{paddingBottom: "12px"}}>Then partners have their own area to give the granular breakdown</p>
              <p style={{paddingBottom: "12px"}}>On the confirmation screen I wanted to make fans felt confident and satisfied with their decision to get an extra</p>
            </>,
      img: ExtrasImg3,
      id: 2
    },
    {
      text: <>
              <p style={{paddingBottom: "12px"}}>DICE introduces extras, a bit generic (as we don’t know exactly what each partner will offer) but still cool and enticing</p>
              <p style={{paddingBottom: "12px"}}>This is the web view – extras are only available to buy in-app</p>
              <p style={{paddingBottom: "12px"}}>There were tons of iterations that I tested with fans. Some included:</p>
              <ul>
                <li><p style={{paddingBottom: "12px"}}>Skip the wait vs. Save some time</p></li>
                <li><p style={{paddingBottom: "12px"}}>Keep the fun going vs. Don’t head so soon</p></li>
                <li><p style={{paddingBottom: "12px"}}>Figure out what you want to sip on vs. Sort out your booze or soda already</p></li>
              </ul>
            </>,
      img: ExtrasImg4,
      id: 3
    },
    {
      text: <>
              <p style={{paddingBottom: "12px"}}>We show these messages to fans who just bought tickets after some time had passed</p>
              <p style={{paddingBottom: "12px"}}>Works for a range of extras – fancy (VIP pass) or functional (Queue jump)</p>
              <p style={{paddingBottom: "12px"}}>A/B test options</p>
            </>,
      img: ExtrasImg5,
      id: 4
    }
  ]

  const [ highlightSection, setHighlightSection ] = useState(null)

  return (
    <div className="work-wrapper">
      <motion.div className="work-body"
      initial={{y: window.innerHeight}}
      animate={{y: 0, transition: {duration: 1, delay: 1, ease: [0.5, 0, 0, 1]}}}
      exit={{x: window.innerWidth, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
      >
        <div className="extras-left">
          <div className="extras-sticky-container">

              {
                extrasContent.map((section) => {
                  return (
                    <AnimatePresence>
                      {
                        section.id === highlightSection
                        ?
                        <motion.img src={section.img} alt=""
                        style={{position: "absolute", height: "80vh", width: "40vw", objectFit: "contain"}}
                        // style={{position: "fixed", top: "24px", left: "24px", height: "80vh", width: "40vw", objectFit: "cover"}}
                        initial={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"}}
                        animate={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: {duration: .5, ease: [0.5, 0, 0, 1]}}}
                        exit={{clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", transition: {duration: .5, ease: [0.5, 0, 0, 1]}}}
                        />
                        :
                        null
                      }
                    </AnimatePresence>
                    )
                  }
                )
              }

          </div>
        </div>

        <div className="extras-right">
          {
            extrasContent.map((section, i) => {
              return (
                <WorkText key={i} id={section.id} setHighlightSection={setHighlightSection}>
                  {section.text}
                </WorkText>
              )
            })
          }
        </div>

      </motion.div>
    </div>
  )
}
