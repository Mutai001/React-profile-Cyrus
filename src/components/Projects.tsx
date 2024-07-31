// import React from 'react';
import '../assets/styles/Projects.scss';
import Restaurantpic from '../images/restaurant-management-system.png';
import Vehiclepic from '../images/carhire.png';
import Todopic from '../images/TODOLIST.png';
import Portfoliopic from '../images/PORTFOLIO.png';
import Bookpic from '../images/BOOREPO.png';
import Ecommercepic from '../images/e-commerce.png';


const projects = [
  {
    title: 'E-commerce Web',
    image: Ecommercepic, // Replace with actual image URL
    url: 'https://mutai001.github.io/eccomerce-webpage/',
    description: 'This project is an e-commerce web application designed to provide a seamless online shopping experience for users. The application features a responsive design, ensuring it works flawlessly across various devices and screen sizes. Key functionalities include user authentication, product catalog browsing, shopping cart management, and a secure checkout process.',
  },
  {
    title: 'Restaurant Management System',
    image: Restaurantpic, // Replace with actual image URL
    url: 'https://mutai001.github.io/FoodWebapp/',
    description: 'This project is a comprehensive restaurant management system designed to streamline operations and enhance the efficiency of restaurant management. The system includes features for menu management, order processing, table reservations, and staff management, all within a user-friendly interface.',
  },
  {
    title: 'Vehicle Rental Management System',
    image: Vehiclepic, // Replace with actual image URL
    url: 'https://vehicle-client-git-main-mutai001s-projects.vercel.app/',
    description: 'A comprehensive vehicle rental management system with features for vehicle listings, booking, user management, and reporting.',
  },
  {
    title: 'Todo List App',
    image: Todopic, // Replace with actual image URL
    url: 'https://react-assessment-xs2x.vercel.app/',
    description: 'A simple yet effective todo list app to manage your tasks efficiently with a user-friendly interface.',
  },
  {
    title: 'Portfolio Project',
    image: Portfoliopic, // Replace with actual image URL
    url: 'https://my-profile-murex.vercel.app/',
    description: 'A personal portfolio showcasing various projects and professional achievements.',
  },
  {
    title: 'Book Repository',
    image: Bookpic, // Replace with actual image URL
    url: 'https://book-repository-application-with-full-crud-functionality.vercel.app/',
    description: 'A comprehensive book repository application with full CRUD functionality and search features.',
  },
];

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <h2>Completed Projects</h2>
      <div className="projects-items">
        {projects.map((project, index) => (
          <a href={project.url} target="_blank" rel="noopener noreferrer" key={index} className="projects-item">
            <img src={project.image} alt={project.title} />
            <div className="projects-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
