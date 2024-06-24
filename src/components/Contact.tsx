import React from 'react';
import '../assets/styles/Contact.scss';

const Contact: React.FC = () => {
  return (
    <section className="contacts">
      <h2>Contact Me</h2>
      <div className="social-media">
        <p>Feel free to reach out to me through the following channels:</p>
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="mailto:kimtaicyrus@gmail.com"><i className="fa-regular fa-envelope"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
        <a href="#"><i className="fab fa-github"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
        <a href="#"><i className="fab fa-pinterest-p"></i></a>
        <a href="#"><i className="fab fa-dribbble"></i></a>
        <a href="#"><i className="fab fa-behance"></i></a>
        <a href="#"><i className="fab fa-codepen"></i></a>
      </div>
    </section>
  );
};

export default Contact;
