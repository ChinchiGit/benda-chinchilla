import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Characteristics.css';

const characteristics = {
  'MOTOR Y TRANSMISIÓN': {
    'TIPO DE MOTOR': 'Bicilíndrico V-Twin de 4 tiempos y 4 válvulas por cilindro. OHC',
    'CILINDRADA': '475,6 cc',
    'POTENCIA': '47 CV a 8.800 RPM',
    'PAR MÁXIMO': '42 N.m a 7.600 RPM',
    'RELACIÓN DE COMPRESIÓN': '11,5:1',
    'DIÁMETRO X CARRERA': 'Ø69x63,6 mm',
    'SISTEMA DE COMBUSTIBLE': 'N.D.',
    'ENCENDIDO': 'N.D.',
    'MOTOR DE ARRANQUE': 'Eléctrico',
    'SISTEMA DE LUBRICACIÓN': 'Lubricación por salpicadura',
    'SISTEMA DE REFRIGERACIÓN': 'Refrigerado por líquido',
    'CAJA DE CAMBIOS': '6 velocidades',
    'TRANSMISIÓN FINAL': 'Correa',
    'TIPO DE EMBRAGUE': 'Húmedo multidisco. Embrague antirrebote',
    'CERTIFICADO': 'Euro 5'
  },
  'CHASIS Y PARTE CICLO': {
    'TIPO': 'Chasis tipo cuna multitubular de acero',
    'SUSPENSIÓN DELANTERA': 'Horquilla telescópica invertida',
    'RECORRIDO DE LA SUSPENSIÓN DELANTERA': 'N.D. mm',
    'SUSPENSIÓN TRASERA': 'Monoamortiguador regulable en precarga',
    'RECORRIDO DE LA SUSPENSIÓN TRASERA': 'N.D. mm',
    'FRENO DELANTERO': 'Disco ø N.D. mm. ABS',
    'FRENO TRASERO': 'Disco ø N.D. mm. ABS',
    'CONTROL DE TRACCIÓN': 'TCS en ambas ruedas',
    'NEUMÁTICO DELANTERO': '150/80 16',
    'NEUMÁTICO TRASERO': '180/65 16'
  },
  'DIMENSIONES': {
    'LARGO X ALTO X ANCHO': '2220 x 1150 x 890 mm',
    'ALTURA DEL ASIENTO': 'N.D. mm',
    'PESO EN VACÍO': '198 kg',
    'DISTANCIA MÍNIMA DEL SUELO': '150 mm',
    'CAPACIDAD DEL DEPÓSITO DE COMBUSTIBLE': '16 l',
    'DISTANCIA ENTRE EJES': '1550 mm'
  }
};

const Characteristics = () => {
  const [activeSection, setActiveSection] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // useEffect(() => {
  //   if (inView) {
  //     ref.current.classList.add('is-visible');
  //   }
  // }, [inView, ref]);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <section id="characteristics" className={`characteristics animate-on-scroll ${inView ? 'is-visible' : ''}`} ref={ref}>
      <h2>Características Técnicas</h2>
      <div className="characteristic-container">
        {Object.entries(characteristics).map(([section, details]) => (
          <div key={section} className="characteristic-section">
            <h3 onClick={() => toggleSection(section)}>{section}</h3>
            {activeSection === section && (
              <div className="characteristic-details">
                {Object.entries(details).map(([key, value]) => (
                  <div key={key} className="characteristic-item">
                    <span className="characteristic-key">{key}:</span>
                    <span className="characteristic-value">{value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Characteristics;