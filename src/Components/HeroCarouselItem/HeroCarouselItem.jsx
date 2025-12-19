import './HeroCarouselItem.css'
import {Component} from 'react'
import topProject from '../../data/topProjects.json'

class HeroCarouselItem extends Component {
  state={index: 0}

  onLeftNavigation = () => {
    this.setState(prevState => ({
      index: (prevState.index===0)
        ? prevState.index 
        : prevState.index-1
      }
    ))
  }

  onRightNavigation = () => {
    this.setState(prevState => ({
      index: (prevState.index===topProject.length-1)
        ? prevState.index
        : prevState.index+1
      })
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