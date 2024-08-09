import './ImageSlider.css'
import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'


export default function ImageSlider({ images }) {
  const [ imageIndex, setImageIndex ] = useState(0)
  const [ mousePos, setMousePos ] = useState({x: null, y: null})
  const [ showArrow, setShowArrow ] = useState(null)

  useEffect(() => {
    window.addEventListener('mousemove', (e) => setMousePos({x: e.clientX, y: e.clientY}))
  }, [])

  const showNextImage = () => {
    setImageIndex((i) => i === images.length - 1 ? i : i + 1)
  }

  const showPrevImage = () => {
    setImageIndex((i) => i === 0 ? 0 : i - 1)
  }

  const handleMouseEnter = (direction) => {
    setShowArrow(direction)
  }


  return (
    <div style={{width: "100vw", height: "70vh", position: "relative"}}>

      {
        showArrow === "left" && images.length > 1 &&
        <div style={imageIndex === 0 ? {opacity: .2} : null}>
          <div style={{ zIndex: 30, position: "fixed", left: mousePos.x - 20, top: mousePos.y - 20 }}><ArrowLeft /></div>
        </div>
      }

      {
        showArrow === "right" && images.length > 1 &&
        <div style={imageIndex === images.length - 1 ? {opacity: .2} : null}>
          <div style={{ zIndex: 30, position: "fixed", left: mousePos.x - 20, top: mousePos.y - 20 }}><ArrowRight /></div>
        </div>
      }

      {
        images.length > 1 &&
        <>
          <div className="arrow-overlay-left"
          onClick={showPrevImage}
          onMouseEnter={() => handleMouseEnter("left")}
          onMouseLeave={() => setShowArrow(null)}
          style={{zIndex: 30, position: "absolute",  left: 0, top: 0, width: "50%", height: "100%"}}
          />
          <div className="arrow-overlay-right"
          onClick={showNextImage}
          onMouseEnter={() => handleMouseEnter("right")}
          onMouseLeave={() => setShowArrow(null)}
          style={{zIndex: 30, position: "absolute", left: "50%", top: 0, width: "50%", height: "100%"}}
          />
        </>
      }

      <motion.div
      initial={{y: 150, opacity: 0}}
      whileInView={{y: 0, opacity: 1, transition: {duration: 1, ease: [0.5, 0, 0, 1]}}}
      viewport={{ once: true, amount: 0.2 }}
      style={{width: "100vw", height: "70vh", display: "flex", overflow: "scroll"}}
      >
        <div style={{width: "25vw", flexShrink: 0}}></div>
        {
          images.map((img) => {
            return(
              <img src={img} alt=""
              style={{objectFit: "contain", width: "50vw", height: "100%", flexShrink: 0, translate: `${-100 * imageIndex}%`, transition: ".5s ease"}}
              />
            )
          })
        }
      </motion.div>

    </div>

    // <div className="img-slider-container">
    //   <AnimatePresence>
    //     <motion.img src={images[imageIndex]} alt="" className="img-slider-img"
    //     initial={{x: window.innerWidth}}
    //     animate={{x: 0, transition: {duration: 1, delay: 1}}}
    //     exit={{x: -window.innerWidth, transition: {duration: 1, delay: 1}}}
    //     />
    //   </AnimatePresence>
    //   <div onClick={showPrevImage} className="arrow-btn" style={{ left: 0 }}><ArrowLeft /></div>
    //   <div onClick={showNextImage} className="arrow-btn" style={{ right: 0 }}><ArrowRight /></div>
    // </div>

  )
}
