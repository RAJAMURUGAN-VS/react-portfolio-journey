import './HeroCarouselItem.css'
import {Component} from 'react'
import topProject from '../../data/topProjects.json'

class HeroCarouselItem extends Component {
  state={index: 0}

  onAutoSlide = () => {
    this.intervalId=setInterval(this.onRightNavigation,4000)
  }

  componentDidMount() {
    this.onAutoSlide()
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  onLeftNavigation = () => {
    clearInterval(this.intervalId)

    this.setState(prevState => ({
      index: (prevState.index===0)
        ? topProject.length-1
        : prevState.index-1
      }),
      this.onAutoSlide
    )
  }

  onRightNavigation = () => {
    clearInterval(this.intervalId)

    this.setState(prevState => ({
      index: (prevState.index===topProject.length-1)
        ? 0
        : prevState.index+1
      }),
      this.onAutoSlide
    )
  }

  render() {
    const {index} = this.state
    return (
      <div className="hero-carousel-container">
          <button 
            type="button"
            onClick={this.onLeftNavigation}
            className="navigation-button"
          >
          <img 
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
            className="arrow-image"
          />
          </button>
          <div className="hero-carousel">
            <a href={topProject[index].url}>
              <img 
                src={topProject[index].image}
                alt="image"
                className="carousel-item-image"
              />
            </a>
          </div>
          <button
            type="button"
            onClick={this.onRightNavigation}
            className="navigation-button"
          >
          <img 
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="left arrow"
            className="arrow-image"
          />
          </button>
      </div>  
    )
  }
}

export default HeroCarouselItem