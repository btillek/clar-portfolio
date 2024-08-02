import './DiceExtras.css'
import ImageReveal from '../ImageReveal'
import TextReveal from '../TextReveal'
import BeyondImg1 from '../../assets/Screenshot 2024-08-01 at 3.30.32 PM.png'
import BeyondImg2 from '../../assets/Screenshot 2024-08-01 at 3.34.57 PM.png'
import BeyondImg3 from '../../assets/Screenshot 2024-08-01 at 3.36.34 PM.png'
import BeyondImg4 from '../../assets/Screenshot 2024-08-01 at 3.37.54 PM.png'
import BeyondImg5 from '../../assets/Screenshot 2024-08-01 at 3.38.11 PM.png'

import { motion } from 'framer-motion'

export default function DiceBeyond() {
  return (
    <div className="work-wrapper">
      <motion.div className="work-body"
      initial={{y: window.innerHeight}}
      animate={{y: 0, transition: {duration: 1, delay: 1, ease: [0.5, 0, 0, 1]}}}
      exit={{x: window.innerWidth, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
      >
        <TextReveal>
          <p>After lots of research, we discovered that fans don’t often mentally filter events by genre when trying to find events to go to</p>
          <p>So we introduced event tags that reflect the actual mindset of fans when they’re browsing events</p>
        </TextReveal>

        <ImageReveal image={BeyondImg1} />

        <TextReveal>
          <p>By adding characteristics to event cards, we give fans contextual info that can help with their decision making</p>
          <p>The maximum number of tags that can be displayed on an event is three</p>
          <p>If the event only has one characteristic applied to it, then it displays alongside an icon</p>
        </TextReveal>

        <ImageReveal image={BeyondImg2} />

        <TextReveal>
          <p>In situ</p>
        </TextReveal>

        <ImageReveal image={BeyondImg3} />

        <TextReveal>
          <p>Some behind-the-scenes work with our user researchers</p>
        </TextReveal>

        <ImageReveal image={BeyondImg4} />

        <TextReveal>
        <p>Brainstorming and cutting “mood”</p>
        <p>What can we guarantee?</p>
        <p>Characteristics – a distinguishing feature or quality</p>
        <p>This is objective</p>
        <p>Adding characteristics together can create a mood</p>
        <p>Worked closely alongside account managers to develop event and venue characteristics</p>
        </TextReveal>

        <ImageReveal image={BeyondImg5} />

      </motion.div>
    </div>
  )
}
