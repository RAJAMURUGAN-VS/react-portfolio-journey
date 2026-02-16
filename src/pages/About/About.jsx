import './About.css'
import LightRays from '../../Components/LightRays';

const About = () => {
  return (
    <div style={{ width: '100%', minHeight: '100%', position: 'relative' }}>
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1}
        lightSpread={0.5}
        rayLength={3}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0}
        className="custom-rays"
        pulsating={false}
        fadeDistance={1}
        saturation={1}
      >
        <div className='about-container'>
          <h1 className='about-heading'>About Me</h1>
          <div className='about-content-container'>
            <p className="about-content">I am Rajamurugan VS, a Full Stack Developer and Computer Science Engineering student at RMD Engineering College, and a Fellow at NxtWave’s CCBP 4.0 Academy (2024). I have hands-on experience in modern technologies including React.js, Node.js, JavaScript, Python, SQL, and full stack development.</p>
            <p className="about-content">I specialize in building scalable, user-friendly web applications and writing clean, efficient, and maintainable code. I have solved 1200+ programming problems and 2200+ Skillrack challenges, along with problems on LeetCode and CodeChef, strengthening my problem-solving and logical thinking skills.</p>
            <p className="about-content">I strongly believe in showcasing proof of work by consistently documenting my learning and projects on GitHub, including my Recursive Solutions Portfolio, Dynamic Programming Portfolio, and React Portfolio Journey.</p>
            <p className="about-content">I have been selected as a finalist in 5+ National Level Hackathons and won a National Level SQL Symposium at RMK Engineering College, demonstrating my ability to apply my skills in real-world and competitive environments.</p>
            <p className="about-content">I am passionate about continuous learning, adapting to new technologies, and building impactful software solutions. My goal is to become a professional software engineer and contribute to scalable and innovative products.</p>
          </div>
        </div>
      </LightRays>        
    </div>
  )
}

export default About;