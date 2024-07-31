import './DiceExtras.css'
import ImageReveal from '../ImageReveal'
import TextReveal from '../TextReveal'
import GroupsImg1 from '../../assets/Screenshot 2024-07-29 at 12.05.57 PM.png'
import GroupsImg2 from '../../assets/Screenshot 2024-07-29 at 12.07.12 PM.png'
import GroupsImg3 from '../../assets/Screenshot 2024-07-29 at 12.08.51 PM.png'
import GroupsImg4 from '../../assets/Screenshot 2024-07-29 at 12.09.51 PM.png'

import { motion } from 'framer-motion'

export default function DiceGroups() {
  return (
    <div className="work-wrapper">
      <motion.div className="work-body"
      initial={{y: window.innerHeight}}
      animate={{y: 0, transition: {duration: 1, delay: 1, ease: [0.5, 0, 0, 1]}}}
      exit={{x: window.innerWidth, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
      >

        <TextReveal>
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
        </TextReveal>

      </motion.div>
    </div>
  )
}
