import { useState } from 'react';
import Navbar from './components/Navbar';
import TodoApp from './components/TodoApp';
import UserList from './components/UserList';
import Footer from './components/Footer';
// Other sections
import HeroSection from './components/HeroSection';
import HeroSplitSection from './components/HeroSplitSection';
import SocialIcons from './components/SocialIcons';
import FeatureSection from './components/FeatureSection';
import TestimonialSection from './components/TestimonialSection';
import HeroSection2 from './components/HeroSection2';

function App() {
  const [userList, setUserList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar onSignUpClick={() => setShowModal(true)} />
{showModal && (
  <div className="custom-modal-backdrop">
    <div className="custom-modal-content">
      <button
        className="btn btn-danger close-btn"
        onClick={() => setShowModal(false)}
      >
        ❌
      </button>
      <TodoApp userList={userList} setUserList={setUserList} />
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
