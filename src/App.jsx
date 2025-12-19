import './App.css'
import {Component} from 'react'
import ProjectCard from './Components/ProjectCard/ProjectCard'
import HeroCarouselItem from './Components/HeroCarouselItem/HeroCarouselItem'
import projects from './data/projects.json'

class App extends Component {
  state={searchKey: ''}
  onChangeSearchKey= (event) => {
    this.setState({searchKey: event.target.value})
  }

  render() {
    const {searchKey}=this.state
    const searchResults=projects.filter((each) => (
      each.title.toLowerCase().includes(searchKey.toLowerCase())
    ))

    return (
      <div className="bg-container">
        <div className="nav-container">
          <h1 className="name">RAJAMURUGAN VS</h1>
          <h1 className="main-heading">REACT PORTFOLIO JOURNEY</h1>
        </div>
        <div className="hero-section">
          <div className="hero-description-container">
            <h1 className="hero-title">React Studio</h1>
            <p>A growing portfolio of React projects showcasing my journey from beginner to professional development.</p>
          </div>
          <HeroCarouselItem />
        </div>
        <div className="search-container">
          <h1 className="search-title">Projects</h1>
          <div className="search-box">
            <input 
              type="search"
              placeholder="Find Project"
              onChange={this.onChangeSearchKey}
              className="search"
            />
            <img src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png" alt="search-icon" className="search-icon" />
          </div>
        </div>
        <div className="cards-container">
          {
            searchResults.length!==0 ? (
              searchResults.map((each) => (
                <ProjectCard key={each.id} cardDetails={each} />
              ))
            ) : (
              <p>No projects found.</p>
            )
          }
        </div>
      </div>
    )
  }
}

export default App
