import './DiceExtras.css'
import TextReveal from '../TextReveal'
import SpotifyImg1 from '../../assets/SpotifyImgs/Follow+Artists+1.png'
import SpotifyImg2 from '../../assets/SpotifyImgs/Library+Scan+Prompt.png'
import SpotifyImg3 from '../../assets/SpotifyImgs/Scan+Results+(None).png'
import SpotifyImg4 from '../../assets/SpotifyImgs/Scan+Results.png'
import SpotifyImg5 from '../../assets/SpotifyImgs/User+Not+Scanned.png'
import SpotifyImg6 from '../../assets/SpotifyImgs/User+Scanned.png'

import { motion } from 'framer-motion'
import ImageSlider from '../ImageSlider'

export default function DiceSpotify() {
  const images = [ SpotifyImg1, SpotifyImg2, SpotifyImg3, SpotifyImg4, SpotifyImg5, SpotifyImg6 ]

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

          <ImageSlider images={images} />

          <TextReveal>
            <p>Encouraging fans to connect their Spotify or Apple music and following artists increased retention</p>
          </TextReveal>

      </motion.div>
    </div>
  )
}
