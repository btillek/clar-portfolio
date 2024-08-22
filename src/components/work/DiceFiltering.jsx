import './DiceExtras.css'
import TextReveal from '../TextReveal'
import FilteringImg1 from '../../assets/FilteringImgs/Low+Current.png'
import FilteringImg2 from '../../assets/FilteringImgs/Tonight.png'
import FilteringImg3 from '../../assets/FilteringImgs/Top+Shows.png'
import FilteringImg4 from '../../assets/FilteringImgs/Venue.png'

import { motion } from 'framer-motion'
import ImageSlider from '../ImageSlider'

export default function DiceFiltering() {
  const images = [ FilteringImg1, FilteringImg2, FilteringImg3, FilteringImg4 ]

  return (
    <div className="work-wrapper">
      <motion.div className="work-body"
      initial={{y: window.innerHeight}}
      animate={{y: 0, transition: {duration: 1, delay: 1, ease: [0.5, 0, 0, 1]}}}
      exit={{x: window.innerWidth, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
      >

          <TextReveal>
            <p>A few tweaks to the home feed – better sorting and improving contextual filters</p>
          </TextReveal>

          <ImageSlider images={images} />

          <TextReveal>
            <p>When a fan is in a low inventory area, but close to a high inventory area, we let them know there’s more to be revealed</p>
            <p>We increased familiarity when recommending events by artists similar to ones they saw before by reminding the fan where they saw the artist</p>
            <p>We used to have “Popular” and “Trending” – needed to differentiate them better and be more descriptive</p>
            <p>Changed “Popular” to “Most viewed”</p>
            <ul>
              <li><p>More objective as it’s based on views in the last 6 hours (not purchases)</p></li>
              <li><p>Shouldn’t hold as much weight, more liable to change, toned down a bit so helps distinguish these categories more</p></li>
              <li><p>Subtitle brings in the community and social proof</p></li>
            </ul>
            <p>Changed “Trending to “Top shows”</p>
            <ul>
              <li><p>More straightforward and understood term</p></li>
              <li><p>Subtitle brings in local relevance</p></li>
            </ul>
          </TextReveal>

      </motion.div>
    </div>
  )
}
