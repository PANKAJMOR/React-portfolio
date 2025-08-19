import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">
        Hi, I'm <span className="home-name">Your Name</span>.
      </h1>
      <h2 className="home-subtitle">
        I build things for the web.
      </h2>
      <p className="home-description">
        I'm a passionate software developer specializing in creating modern, responsive, and user-friendly web applications. I'm currently seeking opportunities to apply my skills and grow as a developer.
      </p>
      <a href="#projects" className="home-cta-button">
        View My Work
      </a>
    </div>
  );
}

export default Home;
