import './DiceExtras.css'
import ImageReveal from '../ImageReveal'
import TextReveal from '../TextReveal'
import ImageSlider from '../ImageSlider'
import ImageScroller from '../ImageScroller'
import ExtrasImg1 from '../../assets/ExtrasImgs/Confirmation+-+Extras.png'
import ExtrasImg2 from '../../assets/ExtrasImgs/Extras+web.png'
import ExtrasImg3 from '../../assets/ExtrasImgs/extras+ticket+view.png'
import ExtrasImg4 from '../../assets/ExtrasImgs/Extras+View.png'
import ExtrasImg5 from '../../assets/ExtrasImgs/Checkout+View.png'
import ExtrasImg6 from '../../assets/ExtrasImgs/Version+1.png'
import ExtrasImg7 from '../../assets/ExtrasImgs/After+party.png'
import ExtrasImg8 from '../../assets/ExtrasImgs/Extras+Promo+Banner-2.png'
import ExtrasImg9 from '../../assets/ExtrasImgs/Extras+Promo+Banner-1.png'
import ExtrasImg10 from '../../assets/ExtrasImgs/VIP+pass.png'
import ExtrasImg11 from '../../assets/ExtrasImgs/Extras+Promo+Banner-5.png'
import ExtrasImg12 from '../../assets/ExtrasImgs/Extras+Promo+Banner.png'
import ExtrasImg13 from '../../assets/ExtrasImgs/home+extra+banner.png'
import ExtrasImg14 from '../../assets/ExtrasImgs/On+The+Day+Notifications+hi.png'
import ExtrasImg15 from '../../assets/ExtrasImgs/On+The+Day+Notifications-1.png'

import { motion } from 'framer-motion'

export default function DiceExtras() {

  const images = [ ExtrasImg1, ExtrasImg2 ]
  const images2 = [ ExtrasImg3, ExtrasImg4, ExtrasImg5, ExtrasImg6 ]
  const images3 = [ ExtrasImg7, ExtrasImg8, ExtrasImg9, ExtrasImg10, ExtrasImg11, ExtrasImg12]
  const images4 = [ ExtrasImg13, ExtrasImg14, ExtrasImg15 ]

  return (
    <div className="work-wrapper">
      <motion.div
      className="work-body"
      initial={{y: window.innerHeight}}
      animate={{y: 0, transition: {duration: 1, delay: 1, ease: [0.5, 0, 0, 1]}}}
      exit={{x: window.innerWidth, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
      >

          <TextReveal>
            <p>“Extras” is the term I came up with for non-ticket purchases – when fans have the option to buy experiences after they get their tickets</p>
          </TextReveal>


          <ImageSlider images={images} />
          {/* <ImageScroller images={images} /> */}

          {/* <div style={{display: "flex", justifyContent: "space-between"}}>
            <ImageReveal image={ExtrasImg1} />
            <ImageReveal image={ExtrasImg2} />
          </div> */}


          <div style={{display: "flex", gap: "48px", width: "80vw", margin: "48px 0", borderBottom: ".5px solid black"}}>
            <div style={{width: "50%", marginLeft: "24px", boxSizing: "border-box"}}>
              <p>“Add-ons” is easy to understand, but comes off as dry and superfluous</p>
              <p>“Upgrades” didn’t work as it could be mistaken for getting a better ticket type</p>
              <p>“Extras” ended up being perfect as it doesn’t diminish the experience of just having a ticket</p>
            </div>
            <div style={{width: "50%", marginRight: "24px", boxSizing: "border-box"}}>
              <p>Fans in the UK were especially sensitive to any kind of exclusionary language, especially considering DICE’s DIY punk roots</p>
              <p>We introduce extras on native and web in slightly different ways (less vs. more space, can only buy extras in the app for now)</p>
            </div>
          </div>

          {/* <TextReveal>
            <p>“Add-ons” is easy to understand, but comes off as dry and superfluous</p>
            <p>“Upgrades” didn’t work as it could be mistaken for getting a better ticket type</p>
            <p>“Extras” ended up being perfect as it doesn’t diminish the experience of just having a ticket</p>
            <p>Fans in the UK were especially sensitive to any kind of exclusionary language, especially considering DICE’s DIY punk roots</p>
            <p>We introduce extras on native and web in slightly different ways (less vs. more space, can only buy extras in the app for now)</p>
          </TextReveal> */}

          <ImageSlider images={images2} />

          <TextReveal>
            <p>Since we control the illustrations for each extra, I made sure we also controlled the initial generic descriptions</p>
            <p>Then partners have their own area to give the granular breakdown</p>
            <p>On the confirmation screen I wanted to make fans felt confident and satisfied with their decision to get an extra</p>
          </TextReveal>

          <ImageSlider images={images3} />

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

          <ImageSlider images={images4} />

          <TextReveal>
            <p>We show these messages to fans who just bought tickets after some time had passed</p>
            <p>Works for a range of extras – fancy (VIP pass) or functional (Queue jump)</p>
            <p>A/B test options</p>
          </TextReveal>

      </motion.div>
    </div>
  )
}
