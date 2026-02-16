import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Skills from './pages/Skills/Skills'
import Projects from './pages/Projects/Projects'
import Certificates from './pages/Certificates/Certificates'
import Contact from './pages/Contact/Contact'

const App = () => {
  return (
    <div className="bg-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
