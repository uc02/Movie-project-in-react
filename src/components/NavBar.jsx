import { Link } from "react-router-dom";
import '../css/Navbar.css'


function NaBar(){
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to='/'>Movie App</Link>
      </div>
      <div className="navbar-links">
        <Link to='/' className="nav-link">Home</Link><br />
        <Link to='/Favorites' className="nav-link">Favorites</Link>
      </div>
    </nav>
  )
}

export default NaBar;