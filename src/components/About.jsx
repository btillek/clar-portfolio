import './About.css'
import Portrait from '../assets/Portrait.png'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function About() {

  const revealRef = useRef()
  const isInView = useInView(revealRef, { amount: 0.08, once: true })

  const sideScrollRef = useRef()
  const { scrollYProgress } = useScroll({
    target: sideScrollRef,
    offset: ["0.3 end", "end end"]
  })
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-56%"])

  const animationValues = {
    hidden: {
      opacity: 1,
      y: 250
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.5, 0, 0, 1]
      }
    }
  }

  return (
    <div className="about-sticky-container" ref={sideScrollRef}>
      <motion.div className="about-container"
      exit={{y: window.innerHeight, transition: {duration: 1, ease: [.5,0,0,1]}}}
      >

        <motion.div className="portrait-container">
          <motion.img src={Portrait} alt="" className="portrait"
          initial={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"}}
          animate={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: {duration: 1.5, delay: 1.5, ease: [0.5, 0, 0, 1]}}}
          exit={{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", transition: {duration: 1.5, ease: [0.5, 0, 0, 1]}}}
          />
        </motion.div>

        <motion.div className="about-content" style={{ x }}>

          <motion.div className="about-section" ref={revealRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{staggerChildren: 0.01}}
          >
            <div>
              <motion.p className="about-title" variants={animationValues}>
                A little bit about me
              </motion.p>

              <motion.div className="about-paragraph" style={{textIndent: "48px"}}>
                {"I’m a dual American-Irish citizen. Rumor has it I come from a line of bards. Collaborating with good people to let language shine charms me.".split(" ").map((word) => {
                  return (
                    <span style={{display: "inline-block", overflow: "hidden", lineHeight: "3.6rem"}}>
                      <motion.span
                      style={{display: "inline"}}
                      variants={animationValues}
                      >{word}&nbsp;</motion.span>
                    </span>
                  )
                })}
              </motion.div>
                <br />
              <div className="about-paragraph">
                {"Italo disco, arthouse films, and esoterica are some things that get me going. In a former life, I was a visual artist.".split(" ").map((word) => {
                  return (
                    <span style={{display: "inline-block", overflow: "hidden", lineHeight: "3.6rem"}}>
                      <motion.span
                      style={{display: "inline"}}
                      variants={animationValues}
                      >{word}&nbsp;</motion.span>
                    </span>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div className="about-section"
          initial="hidden"
          animate="visible"
          transition={{staggerChildren: 0.01}}
          >
            <div>
              <motion.p className="about-title" variants={animationValues}>
                A work summary
              </motion.p>
              <motion.p className="about-paragraph" variants={animationValues}>
                I’ve been working in tech since 2016. Music and live events are my focus lately. Before that, it was health. I started out at a legendary menstrual cycle tracking app. Then I went on to freelancing for startups focused on autoimmunity and menopause.
              </motion.p>
              <br />
              <motion.p className="about-paragraph" variants={animationValues}>
                My writing also extends to print, film, and television. Currently, I’m a part of Granta Magazine’s inaugural Writing Memoir Workshop.
              </motion.p>
              <br />
              <motion.p className="about-paragraph" variants={animationValues}>
                I’m also a co-creator of the comedy series Oval, in development with Telepool Germany, Picture Perfect Federation, and Potboiler Productions.
              </motion.p>
            </div>
          </motion.div>


        </motion.div>
      </motion.div>
    </div>
  )
}
