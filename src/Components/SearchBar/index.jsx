import './SearchBar.css'
import {Component} from 'react'
import ProjectList from '../ProjectList'
import projects from '../../data/projects.json'

class SearchBar extends Component {
  state={searchKey: ''}

  onChangeSearchKey= (event) => {
    this.setState({searchKey: event.target.value})
  }

  render () {
    const {searchKey}=this.state
    const searchResults=projects.filter((each) => (
      each.title.toLowerCase().includes(searchKey.toLowerCase())
    ))

    return (
      <>
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
        <ProjectList searchResults={searchResults} />
      </>
    )
  }
}

export default SearchBar