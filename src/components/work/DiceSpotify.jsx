import './DiceExtras.css'
import ImageReveal from '../ImageReveal'
import TextReveal from '../TextReveal'
import SpotifyImg1 from '../../assets/Screenshot 2024-08-05 at 11.29.26 AM.png'

import { motion } from 'framer-motion'

export default function DiceSpotify() {
  return (
    <div className="work-wrapper">
      <motion.div className="work-body"
      initial={{y: window.innerHeight}}
      animate={{y: 0, transition: {duration: 1, delay: 1, ease: [0.5, 0, 0, 1]}}}
      exit={{x: window.innerWidth, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
      >

          <TextReveal>
            <p>Fans can connect their Spotify or Apple music accounts to DICE so they get personalized event recommendations</p>
            <p>If they skip this step in onboarding, we want to highlight again that they should do this, as it really improves their experience on DICE</p>
          </TextReveal>

          <ImageReveal image={SpotifyImg1} />

          <TextReveal>
            <p>Encouraging fans to connect their Spotify or Apple music and following artists increased retention</p>
          </TextReveal>

      </motion.div>
    </div>
  )
}
