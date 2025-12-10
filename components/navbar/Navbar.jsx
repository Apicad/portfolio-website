import "./Navbar.scss";
import { Link } from "react-scroll";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed-nav">
      <nav className="navbar">
        <div className="navbar-left">
          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={isMenuOpen ? "open" : ""}></span>
            <span className={isMenuOpen ? "open" : ""}></span>
            <span className={isMenuOpen ? "open" : ""}></span>
          </button>
          <a id="logo">&lt; AP &gt;</a>
        </div>

        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <Link
              to="section2"
              smooth={true}
              duration={200}
              onClick={closeMenu}
            >
              About
            </Link>
          </ul>
          <ul>
            <Link
              to="section3"
              smooth={true}
              duration={300}
              onClick={closeMenu}
            >
              Work Experienced
            </Link>
          </ul>
          <ul>
            <Link to="section4" duration={300} onClick={closeMenu}>
              Projects
            </Link>
          </ul>
          <ul>
            <Link to="section5" duration={300} onClick={closeMenu}>
              Contact
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
