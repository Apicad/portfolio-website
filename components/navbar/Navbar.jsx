import "./Navbar.scss";

import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="fixed-nav">
      <nav className="navbar">
        <div className="navbar-left">
          <a id="logo">&lt; AP &gt;</a>
        </div>
        <div className="nav-links">
          <ul>
            <Link to="section2" smooth={true} duration={200}>
              About
            </Link>
          </ul>
          <ul>
            <Link to="section3" smooth={true} duration={300}>
              Work Experienced
            </Link>
          </ul>
          <ul>
            <Link to="section4" duration={300}>Projects</Link>
          </ul>
          <ul>
            <Link to="section5" duration={300}>Contact</Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
