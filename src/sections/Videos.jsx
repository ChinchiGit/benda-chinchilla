import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import chinchillaLogo from '../assets/chinchilla.svg'; // Asegúrate de que la ruta sea correcta
import './Videos.css';

const videos = [
  { id: 'WZn1AAyEdio', title: 'Benda Chinchilla 500 Review' },
  { id: 'mBKzFmkZai0', title: 'Benda Chinchilla 500 Test Ride' },
  { id: 'o41s7wrVTYs', title: 'Benda Chinchilla 500 vs Competitors' },
  { id: 'WMq5JG-lnyo', title: 'Benda Chinchilla 500 Customization' }
];

const Videos = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section id="videos" className={`videos animate-on-scroll ${inView ? 'is-visible' : ''}`}  ref={ref}>
      <h2>Videos</h2>
      <div className= "video-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-item">
            <div className="video-thumbnail">

              <div className="video-overlay">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}?controls=1`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <h3>{video.title}</h3>
            <img id="logo" src={chinchillaLogo} alt="Logo Chinchilla" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Videos;
