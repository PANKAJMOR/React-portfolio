import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h2 className="section-title">About <span className="highlight">Me</span></h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm [Your Name], a student at [Your University] pursuing a degree in [Your Major]. My fascination with technology started at a young age and has grown into a full-fledged passion for software development.
          </p>
          <p>
            I enjoy the process of turning complex problems into beautiful, intuitive, and functional applications. I'm always eager to learn new technologies and frameworks to improve my craft.
          </p>
          <p>
            When I'm not coding, you can find me [Your Hobby 1], [Your Hobby 2], or exploring the latest advancements in the tech world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
