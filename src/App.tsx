import React from 'react';
import NavBar from './components/Navbar';
// import Home from './components/Home';
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
      {/* <Home /> */}
      <About />
      <Services />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
