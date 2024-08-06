import { useState } from 'react'
import './ImageSlider.css'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function ImageSlider({ images }) {
  const [ imageIndex, setImageIndex ] = useState(0)

  const showNextImage = () => {
    setImageIndex((i) => i === images.length - 1 ? 0 : i + 1)
  }

  const showPrevImage = () => {
    setImageIndex((i) => i === 0 ? images.length - 1 : i - 1)
  }

  return (
    <div className="img-slider-container">
      <img src={images[imageIndex]} alt="" className="img-slider-img"/>
      <div onClick={showPrevImage} className="arrow-btn" style={{ left: 0 }}><ArrowLeft /></div>
      <div onClick={showNextImage} className="arrow-btn" style={{ right: 0 }}><ArrowRight /></div>
    </div>

  )
}
