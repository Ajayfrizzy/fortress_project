import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Styles from "./Header.module.css";
import logo from "../../../assets/tp-logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the state to open/close the menu
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className={Styles.header}>
      <nav className={Styles.nav}>
        <div className={Styles.logo}>
          <Link to="/"><img src={logo} alt="Company Logo" /></Link>
        </div>

        {/* Hamburger icon to toggle the menu */}
        <div
          className={Styles.icon}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <GiHamburgerMenu size={30} />
        </div>

        {/* Menu - Toggle the active class based on isOpen */}
        <div className={`${Styles.menu} ${isOpen ? Styles.active : ""}`}>
          <ul className={Styles.ul}>
            <li>
              <Link className={Styles.link} to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className={Styles.link} to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className={Styles.link} to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className={Styles.link} to="/sustain">
                Sustainability
              </Link>
            </li>
            <li>
              <Link className={Styles.link} to="/career">
                Careers
              </Link>
            </li>
            <li>
              <Link className={Styles.link} to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>

          <small>
            <Link className={Styles.getStarted} to="/services">
              Get Started
            </Link>
          </small>
        </div>
      </nav>
    </header>
  );
};

export default Header
