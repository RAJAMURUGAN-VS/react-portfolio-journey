import './App.css'
import ProjectCard from './Components/ProjectCard/ProjectCard'
import projects from './data/projects.json'

const App = () => {
  return (
    <div className="bg-container">
      <div className="nav-conatiner">
        <h1 className="main-heading">REACT PORTFOLIO JOURNEY</h1>
      </div>
      <div className="cards-container">
        {
          projects.map((each) => (
            <ProjectCard key={each.id} cardDetails={each} />
          ))
        }
      </div>
    </div>
  )
}

export default App
