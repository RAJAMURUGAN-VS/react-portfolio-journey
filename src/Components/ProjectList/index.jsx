import './ProjectList.css'
import ProjectCard from '../ProjectCard'

const ProjectList = (props) => {
  const {searchResults}=props

  return (
    <div className="cards-container">
      {searchResults.length!==0 
        ? (
          searchResults.map((each) => (
            <ProjectCard key={each.id} cardDetails={each} />
          ))
        ) : (
          <p>No projects found.</p>
        )
      }
    </div>
  )
}

export default ProjectList