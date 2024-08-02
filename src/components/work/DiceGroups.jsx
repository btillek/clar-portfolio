import './DiceExtras.css'
import ImageReveal from '../ImageReveal'
import TextReveal from '../TextReveal'
import GroupsImg1 from '../../assets/Screenshot 2024-07-29 at 12.05.57 PM.png'
import GroupsImg2 from '../../assets/Screenshot 2024-07-29 at 12.07.12 PM.png'
import GroupsImg3 from '../../assets/Screenshot 2024-07-29 at 12.08.51 PM.png'
import GroupsImg4 from '../../assets/Screenshot 2024-07-29 at 12.09.51 PM.png'
import WorkText from './WorkText'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function DiceGroups() {
  const [ highlightSection, setHighlightSection ] = useState(null)

  const groupsContent = [
    {
      text: <p>Fans are more likely to go out when they’ve got friends in them mix – to help them nail down plans, we made groups</p>,
      img: GroupsImg1,
      id: 1
    },
    {
      text: <p>We wanted to give new and existing fans more reasons to keep using DICE by connecting over shared interests, and to reduce admin when planning a night out</p>,
      img: GroupsImg2,
      id: 2
    },
    {
      text: <p>When a fan sees that a friend is going to an event, they’re 6% more likely to buy tickets</p>,
      img: GroupsImg3,
      id: 3
    },
    {
      text: <><p>Figuring out activity feed, notifications, and emails with the product designer and product manager</p>
              <p>Bonus: I took this opportunity to add a reason why there’s no unsubscribe button for transactional emails</p>
            </>,
      img: GroupsImg4,
      id: 4
    }
  ]
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
                groupsContent.map((section) => {
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
            groupsContent.map((section, i) => {
              return (
                <WorkText key={i} id={section.id} setHighlightSection={setHighlightSection}>
                  {section.text}
                </WorkText>
              )
            })
          }
        </div>
        {/* <TextReveal>
          <p>Fans are more likely to go out when they’ve got friends in them mix – to help them nail down plans, we made groups</p>
        </TextReveal>

        <ImageReveal image={GroupsImg1} />

        <TextReveal>
          <p>We wanted to give new and existing fans more reasons to keep using DICE by connecting over shared interests, and to reduce admin when planning a night out</p>
        </TextReveal>

        <ImageReveal image={GroupsImg2} />

        <TextReveal>
          <p>When a fan sees that a friend is going to an event, they’re 6% more likely to buy tickets</p>
        </TextReveal>

        <ImageReveal image={GroupsImg3} />

        <TextReveal>
          <p>Figuring out activity feed, notifications, and emails with the product designer and product manager</p>
        </TextReveal>

        <ImageReveal image={GroupsImg4} />

        <TextReveal>
          <p>Bonus: I took this opportunity to add a reason why there’s no unsubscribe button for transactional emails</p>
        </TextReveal> */}

      </motion.div>
    </div>
  )
}
