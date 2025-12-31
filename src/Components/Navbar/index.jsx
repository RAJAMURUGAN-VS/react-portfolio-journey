import './Navbar.css'

const Navbar = () => {
    return (
      <div className="nav-container">
        <div className="logo-container">
          <img src="https://res.cloudinary.com/dydplsxdj/image/upload/v1767196323/MY_LOGO_yxgrsc.png" alt="logo" className="logo" />
          <h1 className="name">RAJAMURUGAN VS</h1>
        </div>
        <h1 className="main-heading">REACT PORTFOLIO JOURNEY</h1>
        <a href="https://linktr.ee/rajamuruganvs" target="_blank">Linktree</a>
      </div>
    )
}

export default Navbar