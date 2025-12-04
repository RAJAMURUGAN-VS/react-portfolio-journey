import './ProjectCard.css' 

const ProjectCard = (props) => {
    const {cardDetails}=props
    const {title,url,image}=cardDetails
    return (
        <a href={url}>
            <div className='card-container'>
                <h1 class="card-title">{title}</h1>
                <img src={image} alt={title} className="card-image" />
            </div>
        </a>
    )
}

export default ProjectCard