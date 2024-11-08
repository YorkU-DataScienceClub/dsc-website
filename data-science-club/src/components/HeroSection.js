import React from 'react';
import videoSrc from '../vid/3141210-uhd_3840_2160_25fps.mp4'; 
import backupImage from '../vid/demo.jpg'; 

function HeroSection() {
  return (
    <div className="hero-section">
      <video autoPlay muted loop playsInline preload="auto" className="hero-video" poster={backupImage}>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-animation">
        <div className="circle" style={{ top: '10%', left: '20%' }}></div>
        <div className="circle" style={{ top: '40%', left: '50%' }}></div>
        <div className="circle" style={{ top: '70%', left: '80%' }}></div>
        <div className="circle" style={{ top: '30%', left: '70%' }}></div>
        <div className="circle" style={{ top: '60%', left: '30%' }}></div>
      </div>
    
      <div className="hero-content" data-aos="fade-in">
        <h1>Empowering Data Enthusiasts</h1>
        <p>Join the Data Science Club to explore the world of Data Science, AI, and Machine Learning. Let's shape the future of technology together.</p>
        <a href="#events" className="btn-hero">Discover Events</a>

      </div>
    </div>
  );
}

export default HeroSection;
