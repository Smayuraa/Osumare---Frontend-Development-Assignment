import React, { useState, useEffect } from "react";
import "../styles/TodoApp.css";
// import '../App.css'

function TodoApp({ setUserList, userList, onSubmitSuccess, setShowModal }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    languages: [],
    termsAccepted: false,
  });

  useEffect(() => {
    const savedUsers = localStorage.getItem("userList");
    if (savedUsers) {
      setUserList(JSON.parse(savedUsers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userList", JSON.stringify(userList));
  }, [userList]);

  function handleInputChange(e) {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "languages") {
      let updatedLanguages = [...formData.languages];
      if (checked) {
        updatedLanguages.push(value);
      } else {
        updatedLanguages = updatedLanguages.filter((lang) => lang !== value);
      }
      setFormData({ ...formData, languages: updatedLanguages });
    } else if (type === "checkbox" && name === "termsAccepted") {
      setFormData({ ...formData, termsAccepted: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.termsAccepted) {
      alert("Please accept terms and conditions");
      return;
    }

    const newUserList = [...userList, formData];
    setUserList(newUserList);

    setFormData({
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      languages: [],
      termsAccepted: false,
    });

    if (onSubmitSuccess) onSubmitSuccess();
  }

  return (
    <div className="modal-form">
      {/* Close Button */}
      <button
        className="btn btn-danger close-btn"
        onClick={() => setShowModal(false)}
      >
        ❌
      </button>

      <h2>Get Started Today!</h2>
      <p>Fill in your details and take control of your tasks.</p>

      <form onSubmit={handleSubmit}>
        <div className="mb-3 d-flex gap-2">
          <input
            type="text"
            name="firstName"
            className="form-control"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleInputChange}
            style={{backgroundColor:"ffeef0"}}
          />
          <input
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label><br />
          <div className="form-checks form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleInputChange}
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="form-checks form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleInputChange}
            />
            <label className="form-check-label">Female</label>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Language</label>
          <div className="form-checks">
            <input
              type="checkbox"
              name="languages"
              value="English"
              className="form-check-input"
              checked={formData.languages.includes("English")}
              onChange={handleInputChange}
            />
            <label className="form-check-label">English</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              name="languages"
              value="Hindi"
              className="form-check-input"
              checked={formData.languages.includes("Hindi")}
              onChange={handleInputChange}
            />
            <label className="form-check-label">Hindi</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              name="languages"
              value="Marathi"
              className="form-check-input"
              checked={formData.languages.includes("Marathi")}
              onChange={handleInputChange}
            />
            <label className="form-check-label">Marathi</label>
          </div>
        </div>

        <div className="mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            name="termsAccepted"
            className="form-check-input"
            checked={formData.termsAccepted}
            onChange={handleInputChange}
          />
          <label className="form-check-label">
            I agree to the <a href="#">terms and conditions</a>
          </label>
        </div>

        <button type="submit" className="btn btn-primary w-100">Done</button>
      </form>
    </div>
  );
}

export default TodoApp;
