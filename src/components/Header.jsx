import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import chinchillaLogo from '../assets/chinchilla.svg'; // Asegúrate de que la ruta sea correcta
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="home" smooth={true} duration={500}>
          <img src={chinchillaLogo} alt="Benda Chinchilla 500" className="logo" />
        </Link>
        <nav>
          <ul>
            <li><Link to="home" smooth={true} duration={500}>INICIO</Link></li>
            <li><Link to="photos" smooth={true} duration={500}>FOTOS</Link></li>
            <li><Link to="videos" smooth={true} duration={500}>VIDEOS</Link></li>
            <li><Link to="characteristics" smooth={true} duration={500}>CARACTERÍSTICAS</Link></li>
            <li><Link to="blog" smooth={true} duration={500}>BLOG</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;