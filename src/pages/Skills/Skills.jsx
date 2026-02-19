import DotGrid from "../../Components/DotGrid"
import './Skills.css'
import data from '../../data/skills.json'

const Skills = () => {
  return (
    <div style={{ width: '100%', minHeight: '80vh', position: 'relative'}}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#271E37"
          activeColor="#5e35b1"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
          style={{ width: '100%', height: '100%' }} 
        />
      </div>
      <div style={{ position: 'relative', zIndex: 1, padding: '2rem', paddingTop: '40px'}}>
        <h1 className="skills-heading">My Skills</h1>
        {/* <div className="skills-icon-container">
          <img src="https://res.cloudinary.com/dydplsxdj/image/upload/v1771249806/java_uwpl7d.png" alt="java-icon" className="skills-icon" />
          <img src="https://res.cloudinary.com/dydplsxdj/image/upload/v1771250206/python_opf3bm.png" alt="java-icon" className="skills-icon" />
          <img src="https://res.cloudinary.com/dydplsxdj/image/upload/v1771250576/letter-c_iu7i7s.png" alt="java-icon" className="skills-icon" />
          <img src="https://res.cloudinary.com/dydplsxdj/image/upload/v1771250577/c-_b58eud.png" alt="java-icon" className="skills-icon" />
          <img src="https://res.cloudinary.com/dydplsxdj/image/upload/v1771250576/react_m8lpqe.png" alt="java-icon" className="skills-icon" />
          <img src="https://res.cloudinary.com/dydplsxdj/image/upload/v1771250576/nodejs_cyraju.png" alt="java-icon" className="skills-icon" />
        </div> */}
        <div className="skills-container">
          {data.skills.map(each => (
            <div class="skills-category">
              <h2 className="skills-category-heading">{each.category}</h2>
              <ul className="skills-list">{each.items.map(each => (
                <li>{each}</li>
              ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills