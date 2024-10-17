import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Home.css';

const Home = () => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

  return (
    <section id="home"  className={`home animate-on-scroll ${inView ? 'is-visible' : ''}`} ref={ref}>
      <div className="hero" data-testid="hero">
        <div className="hero-content">
          <h1>La Benda Chinchilla 500</h1>
          <h2>Una moto con el mejor apellido</h2>
        </div>
      </div>
      <div className="content">
        <p>La Benda Chinchilla 500 es una moto custom de origen chino que está causando sensación en el mercado europeo, especialmente entre los amantes de las motos con estilo retro y un toque de modernidad. Benda, una marca relativamente nueva en el panorama internacional, se ha especializado en motocicletas cruiser y custom, destacando por su diseño cuidado y la calidad de sus componentes.</p>
        <p>El nombre "Chinchilla" es todo un acierto. Además de ser un maravilloso pueblo de Albacete y mi modesto apellido, evoca la imagen de un animal ágil y elegante, cualidades que también se pueden atribuir a esta moto. Aunque no existe una explicación oficial sobre por qué eligieron este nombre en particular, según parece el CEO de la compañía es muy aficionado a los gatos.</p>
        <h3>¿Por qué deberías probarla?</h3>
        <p>Como apasionado de las motos, seguramente apreciarás las características de la Chinchilla 500:</p>
        <ul>
          <li>Diseño atractivo: Su estética custom, con líneas sencillas y un toque retro, la hace destacar en la carretera.</li>
          <li>Motor V2: Equipada con un motor bicilíndrico en V, ofrece una entrega de potencia suave y progresiva, ideal para disfrutar de la conducción tanto en ciudad como en carretera abierta.</li>
          <li>Comodidad: Su posición de conducción relajada y su asiento cómodo la convierten en una moto perfecta para viajes largos.</li>
          <li>Relación calidad-precio: La Chinchilla 500 ofrece una excelente relación calidad-precio, combinando un diseño atractivo con componentes de calidad a un precio competitivo.</li>
        </ul>
        <p>Imagino que, aunque no compartas el apellido, si eres un vicioso de las motos querrás probar la Benda Chinchilla 500. Sería una experiencia única.</p>
      </div>
    </section>
  );
};

export default Home;