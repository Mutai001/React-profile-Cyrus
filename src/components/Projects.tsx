// import React from 'react';
import '../assets/styles/Projects.scss';

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <h2>Completed Projects</h2>
      <div className="projects-items">
        <div className="projects-item">
          <img src="./images/e-commerce.png" alt="Project 1" />
          <p>
            <b>E-commerce web</b>
            <article>
              <p>This project is an e-commerce web application designed to provide a seamless online shopping experience for users. The application features a responsive design, ensuring it works flawlessly across various devices and screen sizes. Key functionalities include user authentication, product catalog browsing, shopping cart management, and a secure checkout process.</p>
            </article>
          </p>
        </div>
        <div className="projects-item">
          <img src="./images/restaurant-management-system.png" alt="Project 2" />
          <p>
            <b>Restaurant management system</b>
            <article>
              <p>This project is a comprehensive restaurant management system designed to streamline operations and enhance the efficiency of restaurant management. The system includes features for menu management, order processing, table reservations, and staff management, all within a user-friendly interface.</p>
            </article>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
