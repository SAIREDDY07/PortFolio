import React from 'react';
import '../css/experience.css';

function Experience() {
  return (
    <div className="experience-section">
      <div id = "Experience">
      <h2>Experience</h2>
      <div className="experience-item">
        <h3>Malaviya National Institute of Technology</h3>
        <p>Teaching Assistant</p>
        <p className="duration">Aug 2023 – Jun 2024</p>
        <p>Jaipur, Rajasthan</p>
        <ul>
          <li>
            Organized labs for "Embedded Systems Design," providing hands-on experience for a class of 70 students.
          </li>
          <li>
            Organized labs for "Design and Analysis of Algorithms," reinforcing the practical application of theoretical concepts.
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Doodleblue Innovations</h3>
        <p>Android Developer Intern</p>
        <p className="duration">Aug 2021 – Nov 2021</p>
        <p>Chennai</p>
        <ul>
          <li>
            Developed the Sammunati Application to deliver real-time market data to 20,000+ farmers, increasing market participation and farmer revenue by 35%.
          </li>
          <li>
            Created innovative predictive analytics tools, increasing user engagement by 25% and improving customer retention by 30% during initial testing.
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default Experience;
