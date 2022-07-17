import React from "react";
import logo from "../../logo.png"
import './navbar.styles.scss';
import { Link } from "react-scroll/modules";
// import react fontawesome 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark sticky-top">
      <div className="container-fluid">
        <Link smooth={true} to='home' className="navbar-brand" href="#"><img src={logo} alt="Logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link smooth={true} to='home' className="nav-link" aria-current="page" href="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to='about' className="nav-link" href="#">About me</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to='service' className="nav-link" href="#">Servies</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to='work' className="nav-link" href="#">My Work</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to='portfolio' className="nav-link" href="#">Projects</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to='contact' className="nav-link" href="#">Contacts</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default NavBar; 