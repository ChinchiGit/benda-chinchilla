import React from 'react';
import './Footer.css';
import linkedinIcon from '../assets/linkedinIcon.png';
import githubIcon from '../assets/githubIcon.png';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="container">
        <article>

          <p>
            Desarrollado por Carlos Chinchilla
          </p>
        </article>
        <article>
          <a href="http://www.linkedin.com/in/c-chinchilla" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://github.com/ChinchiGit" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
        </article>

      </section>
    </footer>
  );
};

export default Footer;