import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/TestimonialSection.css";
import testImg from "../assets/testImg.jpg";

const TestimonialSection = () => {
  return (
    <div className="testimonial-section">
      <h2>Customer Testimonials</h2>
      <p className="subtext">
        This tool has transformed my productivity and organization!
      </p>

      <div className="testimonial-wrapper">
        <div className="testimonial-box">
          <div className="testimonial-border">
            <p className="quote">
              Using this website has made my <br></br> tasks so much easier! I can't <br />
              imagine my day without it."
            </p>
            <div className="author">
              <div className="dot"></div>
              <div className="author-info">
                <strong>Sherri Cronin</strong>
                <p>Project Manager, TechCorp</p>
              </div>
            </div>

            <div className="nav-buttons">
              <button className="circle-btn outline">
                <FaChevronLeft />
              </button>
              <button className="circle-btn filled">
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>

        <div className="testimonial-image-frame">
          <img src={testImg} alt="Testimonial" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
