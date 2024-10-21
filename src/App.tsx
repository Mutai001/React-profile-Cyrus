// import React from 'react';
import NavBar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './assets/styles/main.scss';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default App;
