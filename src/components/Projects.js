import React from 'react';
import '../css/projects.css';
import Footer from './footer';
import Navbar from './Navbar';

function Projects() {
  return (
  <div classname="desktop">
    <Navbar/>
    <div className="projects-section">
      
  <h2>Projects</h2>

  <div className="project-item">
    <h3>M.Tech Thesis: Fault Tolerant Spidergon Topology in Network on Chip</h3>
    <p className="duration">May 2024</p>
    <ul>
      <li>
        Developed a fault-tolerant topology for chip networks, optimizing and simulating chip functionality to manage challenges such as temperature variations and link failures effectively.
      </li>
      <li>
        Enhanced network efficiency by 47% compared to conventional Mesh Topology, demonstrating strong proficiency in chip design, network optimization, and simulation techniques.
      </li>
    </ul>
  </div>

  <div className="project-item">
    <h3>Robust and Scalable Contact Management API with Express.js and MongoDB</h3>
    <p className="duration">Dec 2023</p>
    <ul>
      <li>
        Architected a robust REST API for contact management utilizing Express.js and MongoDB; facilitated efficient data management and retrieval.
      </li>
      <li>
        Reduced server response time by 25% and enabled scalable solutions for enterprise clients.
      </li>
    </ul>
  </div>

  <div className="project-item">
    <h3>Question Answering System (NLP)</h3>
    <p className="duration">Mar 2023</p>
    <ul>
      <li>
        Engineered a Closed World Question Answering system with ’pdfplumber,’ for extracting information from PDFs.
      </li>
      <li>
        Applied embeddings (cosine similarity, tf-idf, word2vec, glove, fasttext), notably achieving a 99% score through BERT.
      </li>
    </ul>
  </div>

  <div className="project-item">
    <h3>HappyFish: Smart Aquarium Automation System</h3>
    <p className="duration">Mar 2022</p>
    <ul>
      <li>
        Developed an Android application to automate aquarium appliances, optimizing power usage by controlling equipment wirelessly through an Arduino Uno and Bluetooth module.
      </li>
      <li>
        Implemented an automated charging system for the Li-ion battery, ensuring efficient power management and reducing manual intervention.
      </li>
    </ul>
  </div>

  <Footer/>
</div>
</div>

  );
}

export default Projects;
