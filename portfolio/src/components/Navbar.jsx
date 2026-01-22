import { Link } from "react-router-dom";
// import "./styles/global.css"

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="logo">SHIBIN's Portfolio</div>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/skills">SKILLS</Link></li>
          <li><Link to="/project">PROJECTS</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
