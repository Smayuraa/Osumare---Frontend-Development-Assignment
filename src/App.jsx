import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from '../src/components/Navbar'
import HeroSection from './components/HeroSection';
import HeroSplitSection from './components/HeroSplitSection';
import SocialIcons from './components/SocialIcons';
import FeatureSection from './components/FeatureSection';
import TestimonialSection from './components/TestimonialSection';
import HeroSection2 from './components/HeroSection2';
import Footer from './components/Footer';



function App() {

  return (
    <>
      
      <Navbar/>  
      <HeroSection/>
      <HeroSplitSection/>
      <SocialIcons/>
      <FeatureSection/>
      <TestimonialSection/>
      <HeroSection2/>
      <Footer/>
    </>
  )
}

export default App
