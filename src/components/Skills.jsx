import React from 'react';
import './Skills.css';

const skillsList = [
  "JavaScript (ES6+)", "React", "Node.js", "Express", "MongoDB",
  "HTML5 & CSS3", "Python", "C++", "Git & GitHub"
];

function Skills() {
  return (
    <div>
      <h2 className="section-title">My <span className="highlight">Skills</span></h2>
      <div className="skills-container">
        {skillsList.map((skill, index) => (
          <div className="skill-item" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
