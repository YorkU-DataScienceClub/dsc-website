import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CounterSection from './components/CounterSection';
import EventsSection from './components/EventsSection';
import BlogSection from './components/BlogSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init({ duration: 1000, once: true });

    // Scroll handler to toggle the 'scrolled' class on body
    const handleScroll = () => {
      if (window.scrollY > 50) {
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CounterSection />
      <EventsSection />
      <BlogSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
