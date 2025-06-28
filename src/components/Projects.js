import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="card-grid">
        {projects.map((proj) => (
          <div className="flip-card" key={proj.id}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3>{proj.name || 'Untitled'}</h3>
                <p>{proj.shortDesc || 'Hover to learn more!'}</p>
              </div>
              <div className="flip-card-back">
                <p>{proj.description || 'No detailed description provided.'}</p>
                <a href={proj.link || '#'} target="_blank" rel="noopener noreferrer">
                  <button>View Project</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
