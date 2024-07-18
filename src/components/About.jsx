import './About.css'
import Portrait from '../assets/Portrait.png'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function About() {

  const aboutRef = useRef()
  const revealRef = useRef()
  const isInView = useInView(revealRef, { amount: 0.5 })

  const { scrollY } = useScroll({
    target: aboutRef,
    offset: ["start end", "end end"]
  })

  const y = useTransform(scrollY, [0, window.innerHeight], [0, -2000])

  const animationValues = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <motion.div className="about-container" ref={aboutRef} style={{y: y}}>

      {/* <div className="portrait-container">
        <img src={Portrait} alt="" className="portrait"/>
      </div> */}

      <div>
        <motion.div className="about-section" ref={revealRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{staggerChildren: 0.2}}
        >
          <motion.p style={{fontWeight: "800", width: "50vw"}}
          variants={animationValues}
          >
            A little bit about me
          </motion.p>
          <div>
            <motion.p className="about"
            variants={animationValues}>
              I’m a dual American-Irish citizen. Rumor has it I come from a line of bards. Collaborating with good people to let language shine charms me.
            </motion.p>
            <motion.p className="about"
            variants={animationValues}>
              Italo disco, arthouse films, and esoterica are some things that get me going. In a former life, I was a visual artist.
            </motion.p>
          </div>
        </motion.div>

        <div className="about-section">
          <p style={{fontWeight: "800", width: "50vw"}}>A work summary</p>
          <div>
            <p className="about">
              I’ve been working in tech since 2016. Music and live events are my focus lately. Before that, it was health. I started out at a legendary menstrual cycle tracking app. Then I went on to freelancing for startups focused on autoimmunity and menopause.
            </p>
            <p className="about">
              My writing also extends to print, film, and television. Currently, I’m a part of Granta Magazine’s inaugural Writing Memoir Workshop.
            </p>
            <p className="about">
              I’m also a co-creator of the comedy series Oval, in development with Telepool Germany, Picture Perfect Federation, and Potboiler Productions.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
