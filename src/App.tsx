import React from 'react';
import NavBar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './assets/styles/main.scss';
import { Routes, Route } from 'react-router-dom';


const App: React.FC = () => {
  return (
      <>

        <NavBar/>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <About />
        <Services />
        <Projects />
        <Blog />
        <Contact />      
      {/* <Routes> */}

      {/* <Route path="/" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} /> */}

      {/* Add other routes here */}
    {/* </Routes> */}
    <Footer />
    </>
  );
};

export default App;
