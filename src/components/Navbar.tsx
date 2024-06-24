import React from 'react';
import '../assets/styles/Navbar.scss';


const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="container">
          <div className="image">
            <img src="/images/MY BEST PROFILE-rbg.png" alt="Profile" />
          </div>
        </div>
        <h1><span className="c">C</span><span className="yrus">yrus</span></h1>
      </div>
      <div className="list">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Service</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contacts</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
