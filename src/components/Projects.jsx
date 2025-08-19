import React from 'react';
import './Projects.css';

// You can create an array of your projects
const projectData = [
  {
    title: "Project Title 1",
    description: "A brief description of the project, its purpose, and what problem it solves.",
    tags: ["React", "Node.js", "MongoDB"],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    title: "Project Title 2",
    description: "A brief description of the project, its purpose, and what problem it solves.",
    tags: ["Python", "Flask", "SQL"],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    title: "Project Title 3",
    description: "A brief description of the project, its purpose, and what problem it solves.",
    tags: ["JavaScript", "HTML", "CSS"],
    liveLink: "#",
    sourceLink: "#",
  },
];

function Projects() {
  return (
    <div>
      <h2 className="section-title">My <span className="highlight">Projects</span></h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span className="project-tag" key={i}>{tag}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
              <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="project-link">Source Code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
