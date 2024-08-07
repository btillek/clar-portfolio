import './ImageScroller.css'
import { useState, useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useScroll, useTransform, motion } from 'framer-motion'


export default function ImageSlider({ images }) {
  const [ imageIndex, setImageIndex ] = useState(0)

  const showNextImage = () => {
    setImageIndex((i) => i === images.length - 1 ? 0 : i + 1)
  }

  const showPrevImage = () => {
    setImageIndex((i) => i === 0 ? images.length - 1 : i - 1)
  }

  const sideScrollRef = useRef()
  const { scrollYProgress } = useScroll({
    target: sideScrollRef,
    offset: ["start end", "start start"]
  })
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])

  console.log(x);

  return (
    <div className="img-scroller-wrapper" ref={sideScrollRef} style={{ x }}>
      <div style={{width: "25vw"}} />
      {
        images.map((img, i) => {
          return (
            <div className="img-scroller-container">
              <motion.img src={img} alt="" className="img-scroller-img"

              // style={i === 0 ? {width: "90vw"} : null}
              initial={{x: window.innerWidth}}
              animate={{x: 0, transition: {duration: 1, delay: 1}}}
              exit={{x: -window.innerWidth, transition: {duration: 1, delay: 1}}}
              />
            </div>
          )
        })
      }

      {/* <div onClick={showPrevImage} className="arrow-btn" style={{ left: 0 }}><ArrowLeft /></div>
      <div onClick={showNextImage} className="arrow-btn" style={{ right: 0 }}><ArrowRight /></div> */}
    </div>
  )
}
