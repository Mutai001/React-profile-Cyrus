import React from 'react';
import '../assets/styles/About.scss';

const About: React.FC = () => {
  return (
    <section className="about">
      <h1>Hello, I am Cyrus Kimutai</h1>
      <div className="description">
        <h3>I am a full stack software developer based in Nairobi Kenya.</h3>
        <p>
          My passion for innovation and dedication to self-driven learning have propelled me to continuously hone my skills in creating efficient and user-friendly digital solutions.
          My expertise spans across both frontend and backend development, making me a versatile and valuable asset in the software development realm.
        </p>
      </div>
      <section className="buttons">
        <button className="cv">
          <p>Download CV</p>
        </button>
        <button className="hire">
          <p>Hire Me Now</p>
        </button>
      </section>
    </section>
  );
};

export default About;
