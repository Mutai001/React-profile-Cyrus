import React from 'react';
import '../assets/styles/Services.scss';

const Services: React.FC = () => {
  return (
    <section className="services">
      <h2>My Services</h2>
      <div className="service-items">
        <div className="service-item">
          <h3>Web Development</h3>
          <p>I offer professional full-stack web development services using the latest technologies. Whether you need a dynamic frontend, a robust backend, or seamless integration of both, I have the skills to deliver high-quality web applications.</p>
        </div>
        <div className="service-item">
          <h3>Technologies I work with:</h3>
          <ul>
            <li><b>Frontend: </b>HTML, CSS, SASS, SCSS, JavaScript, TypeScript, React</li>
            <li><b>Backend: </b>Node.js, Drizzle ORM, SQL, PostgreSQL</li>
          </ul>
        </div>
        <div className="service-item">
          <h3>UI/UX Design</h3>
          <p>I create visually appealing and user-friendly interfaces that enhance the overall user experience. My designs are tailored to meet the specific needs of each project, ensuring that they are both aesthetically pleasing and highly functional.</p>
        </div>
        <div className="service-item">
          <h3>Consulting</h3>
          <p>Need expert advice on your software development project? I provide consulting services to help you navigate the complexities of web development, offering insights and recommendations to ensure the success of your project.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
