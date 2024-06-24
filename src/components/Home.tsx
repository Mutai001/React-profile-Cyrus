import React from 'react';
import '../assets/styles/Home.scss';

const Home: React.FC = () => {
  return (
    <section className="main-section">
      <div className="top-wrap">
        <section className="about">
          <h1>Cyrus Kimutai</h1>
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
        <section className="aside">
          <img src="./images/aside.png" alt="Profile" />
        </section>
      </div>
    </section>
  );
};

export default Home;
