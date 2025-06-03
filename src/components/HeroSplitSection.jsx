import React from "react";
import "../styles/HeroSplitSection.css";
import homeImg from "../assets/homeImg.png";

const HeroSplitSection = () => {
  return (
    <div className="container py-5 heroSplitSection">
      <div className="row align-items-stretch no-gutter">
        {/* Left Side */}
        <div className="col-md-6 d-flex herobox">
          <div className="hero-left w-100">
            <h1 className="hero-heading">
              Organize.<br />Achieve.<br />Relax.
            </h1>
            <p className="hero-description">
              Turn clutter into clarity, chaos into control, and dreams into done.
              <strong> Bold</strong> visions into market success
            </p>
            <div className="hero-buttons mt-4 d-flex gap-3 flex-wrap">
              <button className="btn btn-dark rounded-pill px-4">Get Started Today</button>
              <button className="btn btn-light rounded-pill px-4">Discover Features</button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-md-6 d-flex justify-content-center">
          <div className="hero-card position-relative rounded-4 overflow-hidden shadow">
            {/* Overlay */}
            <div className="hero-overlay position-absolute top-0 start-0 p-3 text-white z-2">
              <h5>Your Tasks.</h5>
              <h3>Our Tools.</h3>
            </div>

            {/* Image */}
            <img
              src={homeImg}
              alt="Hero Illustration"
              className="hero-image w-100 h-auto"
            />

            {/* Footer */}
            <div className="hero-card-footer position-absolute bottom-0 start-0 w-100 d-flex align-items-center justify-content-between p-3 bg-dark bg-opacity-50 text-white z-2">
              <div className="d-flex align-items-center gap-2">
                <img src="https://dummyimage.com/40x40/000/fff&text=L" alt="logo" className="logo rounded-circle" />
                <div>
                  <h6 className="mb-0">Freddie Halvorson</h6>
                  <small>Chief Productivity Enthusiast</small>
                </div>
              </div>
              <div
                className="play-button bg-white text-dark rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "40px", height: "40px" }}
              >
                ▶
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSplitSection;
