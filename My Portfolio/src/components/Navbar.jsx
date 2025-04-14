// import { FaPhoneSlash, FaPhoneSquareAlt } from "react-icons/fa";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Add 'scrolled' class after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="logo-div">
        <h2 className="logo">H.O.S</h2>
      </div>

      <div className="nav-links-box">
        <ul>
          <li>
            <Link to="home" spy={true} smooth={true} duration={500}>
              Home
            </Link>
          </li>

          <li>
            <Link to="about" spy={true} smooth={true} duration={500}>
              About
            </Link>
          </li>

          <li>
            <Link to="project" spy={true} smooth={true} duration={500}>
              Projects
            </Link>
          </li>

          <li>
            <Link to="skills" spy={true} smooth={true} duration={500}>
              Skills
            </Link>
          </li>
        </ul>
      </div>

      <button className="contact-btn">Hire Me</button>
    </nav>
  );
};

export default Navbar;
