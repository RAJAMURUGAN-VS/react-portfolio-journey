import './App.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import SearchBar from './Components/SearchBar'

const App = () => {
  return (
    <div className="bg-container">
      <Navbar />
      <HeroSection />
      <SearchBar />
    </div>
  )
}

export default App
