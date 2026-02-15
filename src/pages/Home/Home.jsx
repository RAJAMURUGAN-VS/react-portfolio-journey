import './Home.css'
import TextType from '../../Components/TextType';
import PixelTransition from '../../Components/PixelTransition';
import TargetCursor from '../../Components/TargetCursor';
import {NavLink} from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-bg-container">
      <div className='home-right-side-content'>
        <PixelTransition
          firstContent={
            <img
              src="https://res.cloudinary.com/dydplsxdj/image/upload/v1769700085/MY_LOGO_gros2t.png"
              alt="default pixel transition content, a cat!"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          }
          secondContent={
            <div className='second-centent-container'>
              <p>• Adaptive to New Technologies</p>
              <p>• Consistent and Growth-Focused</p>
              <p>• Smart Problem Solver</p>
              <p>• Passionate Coding Enthusiast</p>
            </div>
          }
          gridSize={8}
          pixelColor='#ffffff'
          once={false}
          animationStepDuration={0.4}
          className="custom-pixel-card"
        />
        <div className='text-type-content'>
          <TextType 
            text={[
              "Initializing Developer Profile...",
              "Hello World! I'm Rajamurugan VS",
              "Full Stack Developer in Progress",
              "I build scalable and modern web applications",
              "Turning ideas into real-world digital products",
              "React | Node.js | JavaScript | Problem Solver",
              "Hackathon Builder | Continuous Learner",
              "Crafting the future, one line of code at a time"
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            variableSpeedEnabled={false}
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={0.5}
          />
        </div>
      </div>
      <div className='home-right-side-content'>
        <div className="terminal-card">
          <p className='terminal-content'><span className="prompt">&gt;</span> initializing_profile...</p>
          <p className='terminal-content'><span className="prompt">&gt;</span> NAME = <span className="value">"Rajamurugan VS"</span></p>
          <p className='terminal-content'><span className="prompt">&gt;</span> ROLE = <span className="value">"Full Stack Developer"</span></p>
          <p className='terminal-content'><span className="prompt">&gt;</span> LEVEL = <span className="value">"Student Developer"</span></p>
          <p className='terminal-content'><span className="prompt">&gt;</span> LOCATION = <span className="value">"India"</span></p>
          <p className='terminal-content'><span className="prompt">&gt;</span> STATUS = <span className="status">"Available for Internship"</span></p>
          <p className='terminal-content'><span className="prompt">&gt;</span> <span className="cursor">_</span></p>
        </div>
        <div>
          <TargetCursor 
            spinDuration={2}
            hideDefaultCursor
            parallaxOn
            hoverDuration={0.2}
          /> 
          <div className='home-button-container'>
            <NavLink to="/projects" className="cursor-target home-btn">View Projects</NavLink>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="resume.pdf"
              className="cursor-target home-btn"
            >
              Download Resume
            </a>
            <NavLink to="/contact" className="cursor-target home-btn">Contact Me</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home