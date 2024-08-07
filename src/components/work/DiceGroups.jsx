import './DiceExtras.css'
import ImageReveal from '../ImageReveal'
import TextReveal from '../TextReveal'
import GroupsImg1 from '../../assets/GroupsImgs/Empty.png'
import GroupsImg2 from '../../assets/GroupsImgs/Landing.png'
import GroupsImg3 from '../../assets/GroupsImgs/Create+Group+Step+10.png'
import GroupsImg4 from '../../assets/GroupsImgs/Invite.png'
import GroupsImg5 from '../../assets/GroupsImgs/Empty-1.png'
import GroupsImg6 from '../../assets/GroupsImgs/Group+View.png'
import GroupsImg7 from '../../assets/GroupsImgs/Responses.png'
import GroupsImg8 from '../../assets/GroupsImgs/Screen+Shot+2023-05-01+at+1.21.57+PM.png'
import GroupsImg9 from '../../assets/GroupsImgs/Start+making.png'
import GroupsImg10 from '../../assets/GroupsImgs/Make+plans.png'
import GroupsImg11 from '../../assets/GroupsImgs/2+friends+got.png'

import { motion } from 'framer-motion'
import ImageSlider from '../ImageSlider'

export default function DiceGroups() {
  const images = [ GroupsImg1, GroupsImg2, GroupsImg3, GroupsImg4, GroupsImg5 ]
  const images2 = [ GroupsImg6, GroupsImg7 ]
  const images3 = [ GroupsImg8 ]
  const images4 = [ GroupsImg9, GroupsImg10, GroupsImg11 ]

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

        <ImageSlider images={images} />

        <TextReveal>
          <p>We wanted to give new and existing fans more reasons to keep using DICE by connecting over shared interests, and to reduce admin when planning a night out</p>
        </TextReveal>

        <ImageSlider images={images2} />

        <TextReveal>
          <p>When a fan sees that a friend is going to an event, they’re 6% more likely to buy tickets</p>
        </TextReveal>

        <ImageSlider images={images3} />

        <TextReveal>
          <p>Figuring out activity feed, notifications, and emails with the product designer and product manager</p>
        </TextReveal>

        <ImageSlider images={images4} />

        <TextReveal>
          <p>Bonus: I took this opportunity to add a reason why there’s no unsubscribe button for transactional emails</p>
        </TextReveal>

      </motion.div>
    </div>
  )
}
