import './App.css'
import {Component} from 'react'
import ProjectCard from './Components/ProjectCard/ProjectCard'
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
          <h1 className="main-heading">REACT PORTFOLIO JOURNEY</h1>
        </div>
        <div className="search-box-container">
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
