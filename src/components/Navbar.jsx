import React from 'react';
import "../styles/Navbar.css"
import logoImg from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
      <a className="navbar-brand d-flex align-items-center" href="#">
        <img src={logoImg} alt="Logo" width="40" height="40" className="me-2" />
       
      </a>

      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">More Option</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">Contact</a>
          </li>
        </ul>
        <div className="ms-3">
          <button className="btn btn-outline-danger me-2">Log In</button>
          <button className="btn btn-danger">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
