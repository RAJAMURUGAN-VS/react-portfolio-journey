import DotGrid from "../../Components/DotGrid"
import './Skills.css'

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
      <div style={{ position: 'relative', zIndex: 1, padding: '2rem', paddingTop: '10px'}}>
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
          <div class="skills-category">
            <h2>Programming Languages</h2>
            <ul>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Java</li>
              <li>SQL</li>
              <li>C</li>
              <li>C++</li>
            </ul>
          </div>
          <div class="skills-category">
            <h2>Frontend Development</h2>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>React.js</li>
              <li>Responsive Design</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div class="skills-category">
            <h2>Backend Development</h2>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>REST API Development</li>
              <li>SpringBoot</li>
            </ul>
          </div>
          <div class="skills-category">
            <h2>Database</h2>
            <ul>
              <li>MySQL</li>
              <li>SQLite</li>
              <li>Supabase</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div class="skills-category">
            <h2>Tools & Technologies</h2>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>VS Code</li>
              <li>Postman</li>
              <li>Chrome DevTools</li>
            </ul>
          </div>
          <div class="skills-category">
            <h2>Computer Science Fundamentals</h2>
            <ul>
              <li>Data Structures & Algorithms</li>
              <li>Problem Solving</li>
              <li>Recursion</li>
              <li>Dynamic Programming</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills