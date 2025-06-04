import { useState } from 'react';
import Navbar from './components/Navbar';
import TodoApp from './components/TodoApp';
import UserList from './components/UserList';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import HeroSplitSection from './components/HeroSplitSection';
import SocialIcons from './components/SocialIcons';
import FeatureSection from './components/FeatureSection';
import TestimonialSection from './components/TestimonialSection';
import HeroSection2 from './components/HeroSection2';

function App() {
  const [userList, setUserList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleFormSubmit = () => {
    setShowModal(false);
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 2500); 
  };

  return (
    <>
      <Navbar onSignUpClick={() => setShowModal(true)} />

      {showModal && (
        <div className="custom-modal-backdrop">
          <div className="custom-modal-content">
           
            <TodoApp
              userList={userList}
              setUserList={setUserList}
              onSubmitSuccess={handleFormSubmit}
              setShowModal={setShowModal}
            />
          </div>
        </div>
      )}

     {showThankYou && (
  <div className="thank-you-overlay">
    <div className="thank-you-popup">
      <div className="emoji">❤️</div>
      <h2>Thank you for connect with us.</h2>
      <p>Our team will contacting with you soon</p>
      <button className="done-button" onClick={() => setShowThankYou(false)}>
        Done
      </button>
    </div>
  </div>
)}


      <HeroSection />
      <HeroSplitSection />
      <SocialIcons />
      <FeatureSection />
      <TestimonialSection />
      <HeroSection2 />
      <UserList users={userList} />
      <Footer />
    </>
  );
}

export default App;
