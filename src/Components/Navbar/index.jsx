import './Navbar.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="nav-container">
      <div className="logo-container">
        <img
          src="https://res.cloudinary.com/dydplsxdj/image/upload/v1767196323/MY_LOGO_yxgrsc.png"
          alt="logo"
          className="logo"
        />
        <h1 className="name">RAJAMURUGAN VS</h1>
      </div>
      <nav className="nav-links">
        <NavLink to="/" className="nav-item">Home</NavLink>
        <NavLink to="/about" className="nav-item">About</NavLink>
        <NavLink to="/skills" className="nav-item">Skills</NavLink>
        <NavLink to="/projects" className="nav-item">Projects</NavLink>
        <NavLink to="/certificates" className="nav-item">Certificates</NavLink>
        <NavLink to="/contact" className="nav-item">Contact</NavLink>
      </nav>
      <a
          href="https://linktr.ee/rajamuruganvs"
          target="_blank"
          rel="noopener noreferrer"
          className="linktree-btn"
        >
          <p>Linktree</p>
          <img
            src="https://res.cloudinary.com/dydplsxdj/image/upload/v1771077848/linktree_zgab5x.png"
            alt="linktree"
            className='linktree-img'
          />
        </a>
    </header>
  )
}

export default Navbar
