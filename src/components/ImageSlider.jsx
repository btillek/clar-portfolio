import './ImageSlider.css'
import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'


export default function ImageSlider({ images }) {
  const [ imageIndex, setImageIndex ] = useState(0)

  const showNextImage = () => {
    setImageIndex((i) => i === images.length - 1 ? 0 : i + 1)
  }

  const showPrevImage = () => {
    setImageIndex((i) => i === 0 ? images.length - 1 : i - 1)
  }

  return (
    <div
    style={{width: "100vw", height: "70vh", position: "relative"}}
    >
      <div
      style={{width: "100vw", height: "70vh", display: "flex", overflow: "scroll"}}
      >
        {
          images.map((img) => {
            return(
                <img src={img} alt=""
                style={{objectFit: "contain", width: "100vw", height: "100%", flexShrink: 0, translate: `${-100 * imageIndex}%`, transition: ".5s ease"}}
                />
            )
          })
        }
      </div>
      <div onClick={showPrevImage} className="arrow-btn" style={{ left: 0 }}><ArrowLeft /></div>
      <div onClick={showNextImage} className="arrow-btn" style={{ right: 0 }}><ArrowRight /></div>
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
