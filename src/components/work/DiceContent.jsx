import './DiceExtras.css'
import TextReveal from '../TextReveal'
import ContentImg1 from '../../assets/ContentImgs/Frame+1.png'
import ContentImg2 from '../../assets/ContentImgs/Frame+2.png'
import ContentImg3 from '../../assets/ContentImgs/Frame+3.png'
import ContentImg4 from '../../assets/ContentImgs/Frame+4.png'
import ContentImg5 from '../../assets/ContentImgs/Screenshot+2023-12-18+at+13.06.20.png'
import ContentImg6 from '../../assets/ContentImgs/Screenshot+2023-12-18+at+13.11.13.png'

import { motion } from 'framer-motion'
import ImageSlider from '../ImageSlider'

export default function DiceContent() {
  const images = [ ContentImg1, ContentImg2 ]
  const images2 = [ ContentImg3, ContentImg4 ]
  const images3 = [ ContentImg5, ContentImg6 ]

  return (
    <div className="work-wrapper">
      <motion.div className="work-body"
      initial={{y: window.innerHeight}}
      animate={{y: 0, transition: {duration: 1, delay: 1, ease: [0.5, 0, 0, 1]}}}
      exit={{x: window.innerWidth, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
      >

          <TextReveal>
            <p>Building up our very first content design system to increase consistency, shorten production time, and leave time for more time for high-value work</p>
            <p>Allow for more autonomy for UX writers/content designers and product designers</p>
            <p>Move away from a static style guide that’s on another platform and not connected to the components we’re using while giving us a single source of truth</p>
          </TextReveal>

          <ImageSlider images={images} />

          <TextReveal>
            <p>Taking the time to make improvements when in each section</p>
          </TextReveal>

          <ImageSlider images={images2} />

          <TextReveal>
            <p>Taking the time to make improvements when in each section</p>
          </TextReveal>

          <ImageSlider images={images3} />

      </motion.div>
    </div>
  )
}
