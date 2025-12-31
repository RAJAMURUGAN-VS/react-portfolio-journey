import './HeroSection.css'
import HeroCarouselItem from '../HeroCarouselItem'

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-description-container">
        <h1 className="hero-title">React Studio</h1>
        <p>A growing portfolio of React projects showcasing my journey from beginner to professional development.</p>
      </div>
      <HeroCarouselItem />
    </div>
  )
}

export default HeroSection