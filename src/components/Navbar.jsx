import React from 'react';
import '../styles/Navbar.css';
import logoImg from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4">
      <a href="/" className="navbar-brand d-flex align-items-center">
        <img src={logoImg} alt="Company Logo" className="navbar-logo me-2" />
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link text-dark" href="#about-us">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#features">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#more-option">More Option</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#contact">Contact</a>
          </li>
        </ul>
        <div className="ms-3 d-flex gap-2">
          <button className="btn btn-outline-danger">Log In</button>
          <button className="btn btn-danger">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
