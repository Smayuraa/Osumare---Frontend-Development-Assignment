import '../styles/Footer.css';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';
import logo from '../assets/logo.png'; 


function Footer() {
  return (
    <footer className="footer pt-5 pb-3">
      <div className="container">
        <div className="row gy-4">
          {/* Left Section */}
          <div className="col-md-4">
            <div className="d-flex align-items-center mb-3">
              <img src={logo} alt="Logo" className="footer-logo me-2" />
              <h5 className="fw-bold mb-0"></h5>
            </div>
            <p>Subscribe to our newsletter for the latest features and updates delivered to you.</p>
            <form className="d-flex mb-1">
              <input type="email" className="form-control me-2" placeholder="Your email here" />
              <button type="submit" className="btn btn-danger px-4">Join</button>
            </form>
            <small className="text-muted">By subscribing, you consent to our Privacy Policy and agree to receive updates.</small>
          </div>

          <div className="col-md-2">
            <h6 className="fw-bold mb-3">Useful Links</h6>
            <ul className="list-unstyled">
              <li>Home Page</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Blog Posts</li>
              <li>FAQs</li>
            </ul>
          </div>

        
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Resources</h6>
            <ul className="list-unstyled">
              <li>Help Center</li>
              <li>User Guide</li>
              <li>Community Forum</li>
              <li>Feedback</li>
              <li>Support</li>
            </ul>
          </div>

   
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Connect With Us</h6>
            <ul className="list-unstyled social-icons">
              <li><FaFacebookF /> Facebook</li>
              <li><FaInstagram /> Instagram</li>
              <li><FaXTwitter /> X</li>
              <li><FaLinkedinIn /> LinkedIn</li>
              <li><FaYoutube /> YouTube</li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />
        
       <div className="footer-bottom d-flex justify-content-between flex-wrap text-muted small">
  <p className="mb-0">© 2024 Osumare. All rights reserved.</p>
  <ul className="list-inline mb-0">
    <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
    <li className="list-inline-item"><a href="#">Terms of Service</a></li>
    <li className="list-inline-item"><a href="#">Cookie Settings</a></li>
  </ul>
</div>

      </div>
    </footer>
  );
}

export default Footer;
