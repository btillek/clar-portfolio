import './DiceExtras.css'
import ImageReveal from '../ImageReveal'
import TextReveal from '../TextReveal'
import ExtrasImg2 from '../../assets/Screenshot 2024-07-25 at 4.29.43 PM.png'
import ExtrasImg3 from '../../assets/Screenshot 2024-07-26 at 11.19.36 AM.png'
import ExtrasImg4 from '../../assets/Screenshot 2024-07-26 at 12.16.56 PM.png'
import ExtrasImg5 from '../../assets/Screenshot 2024-07-26 at 12.19.42 PM.png'
import { motion } from 'framer-motion'

export default function DiceExtras() {
  return (
    <div className="work-wrapper">
      <motion.div className="work-body"
      initial={{y: window.innerHeight}}
      animate={{y: 0, transition: {duration: 1, delay: 1, ease: [0.5, 0, 0, 1]}}}
      exit={{x: window.innerWidth, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
      >

          <TextReveal>
            <p>“Extras” is the term I came up with for non-ticket purchases – when fans have the option to buy experiences after they get their tickets</p>
          </TextReveal>

          <ImageReveal image={ExtrasImg2} />

          <TextReveal>
            <p>“Add-ons” is easy to understand, but comes off as dry and superfluous</p>
            <p>“Upgrades” didn’t work as it could be mistaken for getting a better ticket type</p>
          </TextReveal>
          <TextReveal>
            <p>“Extras” ended up being perfect as it doesn’t diminish the experience of just having a ticket</p>
            <p>Fans in the UK were especially sensitive to any kind of exclusionary language, especially considering DICE’s DIY punk roots</p>
          </TextReveal>
          <TextReveal>
            <p>We introduce extras on native and web in slightly different ways (less vs. more space, can only buy extras in the app for now)</p>
          </TextReveal>

          <ImageReveal image={ExtrasImg3} />

          <TextReveal>
            <p>Since we control the illustrations for each extra, I made sure we also controlled the initial generic descriptions</p>
            <p>Then partners have their own area to give the granular breakdown</p>
            <p>On the confirmation screen I wanted to make fans felt confident and satisfied with their decision to get an extra</p>
          </TextReveal>

          <ImageReveal image={ExtrasImg4} />

          <TextReveal>
            <p>DICE introduces extras, a bit generic (as we don’t know exactly what each partner will offer) but still cool and enticing</p>
            <p>This is the web view – extras are only available to buy in-app</p>
            <p>There were tons of iterations that I tested with fans. Some included:</p>
            <ul>
              <li><p>Skip the wait vs. Save some time</p></li>
              <li><p>Keep the fun going vs. Don’t head so soon</p></li>
              <li><p>Figure out what you want to sip on vs. Sort out your booze or soda already</p></li>
            </ul>
          </TextReveal>

          <ImageReveal image={ExtrasImg5} />

          <TextReveal>
            <p>We show these messages to fans who just bought tickets after some time had passed</p>
            <p>Works for a range of extras – fancy (VIP pass) or functional (Queue jump)</p>
            <p>A/B test options</p>
          </TextReveal>

      </motion.div>
    </div>
  )
}
