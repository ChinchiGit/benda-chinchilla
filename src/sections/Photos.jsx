import React from 'react';
import Slider from 'react-slick';
import { useInView } from 'react-intersection-observer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Photos.css';

const photos = [
  'https://www.motostarragona.com/cdn/shop/files/benda-espana-benda-chinchilla-500-promociones-benda-motos-tarragona-concesionario-oficial-benda-tarragona-reus-girona-lleida-barcelona-oferta-19_2048x.jpg?v=1718709433',
  'https://www.motostarragona.com/cdn/shop/files/benda-espana-benda-chinchilla-500-promociones-benda-motos-tarragona-concesionario-oficial-benda-tarragona-reus-girona-lleida-barcelona-oferta-18_1900x.jpg?v=1718709433',
  'https://www.motostarragona.com/cdn/shop/files/benda-espana-benda-chinchilla-500-promociones-benda-motos-tarragona-concesionario-oficial-benda-tarragona-reus-girona-lleida-barcelona-oferta-20_2048x.jpg?v=1718709433',
  'https://www.motostarragona.com/cdn/shop/files/benda-espana-benda-chinchilla-500-promociones-benda-motos-tarragona-concesionario-oficial-benda-tarragona-reus-girona-lleida-barcelona-oferta-22_2048x.jpg?v=1718709433',
  'https://www.motostarragona.com/cdn/shop/files/benda-espana-benda-chinchilla-500-promociones-benda-motos-tarragona-concesionario-oficial-benda-tarragona-reus-girona-lleida-barcelona-oferta-24_2048x.jpg?v=1718709433',
  'https://www.motostarragona.com/cdn/shop/files/benda-espana-benda-chinchilla-500-promociones-benda-motos-tarragona-concesionario-oficial-benda-tarragona-reus-girona-lleida-barcelona-oferta-25_2048x.jpg?v=1718709433'
];

const Photos = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className={`photos animate-on-scroll ${inView ? 'is-visible' : ''}`} ref={ref}>
      <h2>Galería de Fotos</h2>
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index}>
            <img src={photo} alt={`Benda Chinchilla 500 - ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Photos;