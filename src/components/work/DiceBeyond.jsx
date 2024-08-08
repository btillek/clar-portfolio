import './DiceExtras.css'
import TextReveal from '../TextReveal'
import BeyondImg1 from '../../assets/BeyondImgs/Group+835.png'
import BeyondImg2 from '../../assets/BeyondImgs/Group+837.png'
import BeyondImg3 from '../../assets/BeyondImgs/Tonight.png'
import BeyondImg4 from '../../assets/BeyondImgs/This+Week.png'
import BeyondImg5 from '../../assets/BeyondImgs/Screen+Shot+2023-05-01+at+3.15.21+PM.png'
import BeyondImg6 from '../../assets/BeyondImgs/Screen+Shot+2023-05-01+at+3.20.40+PM.png'
import BeyondImg7 from '../../assets/BeyondImgs/Screen+Shot+2023-05-01+at+3.21.30+PM.png'

import { motion } from 'framer-motion'
import ImageSlider from '../ImageSlider'

export default function DiceBeyond() {
  const images = [ BeyondImg1, BeyondImg2 ]
  const images2 = [ BeyondImg3, BeyondImg4 ]
  const images3 = [ BeyondImg5 ]
  const images4 = [ BeyondImg6 ]
  const images5 = [ BeyondImg7 ]

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

        <ImageSlider images={images} />

        <TextReveal>
          <p>By adding characteristics to event cards, we give fans contextual info that can help with their decision making</p>
          <p>The maximum number of tags that can be displayed on an event is three</p>
          <p>If the event only has one characteristic applied to it, then it displays alongside an icon</p>
        </TextReveal>

        <ImageSlider images={images2} />

        <TextReveal>
          <p>In situ</p>
        </TextReveal>

        <ImageSlider images={images3} />

        <TextReveal>
          <p>Some behind-the-scenes work with our user researchers</p>
        </TextReveal>

        <ImageSlider images={images4} />

        <TextReveal>
        <p>Brainstorming and cutting “mood”</p>
        <p>What can we guarantee?</p>
        <p>Characteristics – a distinguishing feature or quality</p>
        <p>This is objective</p>
        <p>Adding characteristics together can create a mood</p>
        <p>Worked closely alongside account managers to develop event and venue characteristics</p>
        </TextReveal>

        <ImageSlider images={images5} />

      </motion.div>
    </div>
  )
}
