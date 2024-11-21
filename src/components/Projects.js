import React from 'react';
// import '../css/projects.css';

function Projects() {
  return (
    <div className="container mt-5">
      <h2>Projects</h2>
      <div className="project">
        <h4>M.Tech Thesis: Fault Tolerant Spidergon Topology in NoC</h4>
        <p>Optimized chip networks, enhancing efficiency by 47%.</p>
      </div>
      <div className="project">
        <h4>Contact Management API</h4>
        <p>Architected a robust REST API using Express.js and MongoDB.</p>
      </div>
      {/* Add more projects similarly */}
    </div>
  );
}

export default Projects;
