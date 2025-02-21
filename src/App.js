import React, { useState, useEffect } from 'react';
import './App.css'; // Ensure you put your styles in this file or use styled-components

const App = () => {
  // Countdown timer logic
  const [countdown, setCountdown] = useState('');

  const updateCountdown = () => {
    const targetDate = new Date('2025-12-31T00:00:00');
    const now = new Date();
    const diff = targetDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    setCountdown(`${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
  };

  useEffect(() => {
    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Call once immediately to set the initial value
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <div className="video-background">
        <video autoPlay muted loop id="background-video">
          <source src="./carouse/back.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container">
        <div className="card">
          <img src="../img/logo2.png" alt="Selcouth Project" className="logo" />
          <h1 className="coming-soon">Coming Soon!</h1>
          <p className="subtitle">Something Interesting Is Loading...</p>
        </div>

        <div className="video-container">
          <video autoPlay muted loop id="vid2">
            <source src="./carouse/intro.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="talent-container">
          {/* Talent Cards */}
          <TalentCard
            name="Rainy Kokoro"
            avatar="./img/rain2.png"
            role="Talent"
            teaser="HEWWO~! RAIN'S HEREE~💦! Terlihat pemaluu padahal tantrumm~"
            link="https://www.linktr.ee/rainykokoro"
          />
          <TalentCard
            name="JOJED"
            avatar="./img/jojed.webp"
            role="Talent"
            teaser='Hii Jojed here!! Kokoh\" belajar stream! 😘'
            link="https://linktr.ee/jojed"
          />
          <TalentCard
            name="Xyre Usaegi"
            avatar="./img/cisae.png"
            role="Talent"
            teaser="26yo IDN based gamer that mainly on MMORPG or simulator games."
            link="https://linkgoods.com/xyre"
          />
          <TalentCard
            name="Xiery"
            avatar="./img/xiery.webp"
            role="Talent"
            teaser="Hi! I'm Xiery, your friend! ✨ It's so fun to meet you!!"
            link="https://linktr.ee/xiery"
          />
          <TalentCard
            name="Yoda"
            avatar="./img/yoda.png"
            role="Talent"
            teaser="Yodaktau kok tanya tanya saya"
            link="https://linktr.ee/xiery"
          />
          <TalentCard
            name="Ayakawa Gyuzen"
            avatar="./img/wagyu.png"
            role="Talent"
            teaser="✨ Just a soul on a unique journey! 🌌 Explore my adventures!"
            link="https://linktr.ee/ayakawagyuzen"
          />
        </div>

        <div className="talent-card">
          <div className="subtitle" style={{ textAlign: 'center' }}>
            <h1>JOIN US</h1>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfhkSqHQewF0aW2nQgyXdEwqK9lJIsf85koWvhCRxmxFIuIXw/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="click-me"
          >
            Click Here!!
          </a>
        </div>
      </div>

      <div className="vid1">
        <video autoPlay muted loop id="vid1">
          <source src="./carouse/promote1.mp4" type="video/mp4" />
        </video>
        <div className="video-controls">
          <span style={{ color: '#0f0', fontSize: '0.6rem' }}>INTRO VIDEO</span>
        </div>
      </div>
    </div>
  );
};

// TalentCard component for reusable talent card layout
const TalentCard = ({ name, avatar, role, teaser, link }) => (
  <div className="talent-card">
    <img src={avatar} alt={name} className="talent-avatar" />
    <h2 className="talent-name">{name}</h2>
    <div className="talent-role">{role}</div>
    <p className="talent-teaser">{teaser}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="click-me">
      Click Me!
    </a>
  </div>
);

export default App;
