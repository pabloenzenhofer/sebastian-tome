import React from 'react';
import './About.css';
import { FaUniversity } from 'react-icons/fa';
import sebaImage from '../../assets/seba.jpg';

const About = () => {
  return (
    <section id="sobre-mi" className="about">
      <div className="about-container">
        <h2>Sobre mí</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              Soy Sebastián Tomé, Contador Público Nacional con experiencia en asesoramiento fiscal, 
              gestión contable y planificación financiera.
            </p>
            <div className="about-details">
              <p>
                Mi objetivo es simplificar tus finanzas para que te enfoques en lo que realmente importa: 
                hacer crecer tu negocio.
              </p>
              <div className="education">
                <div className="education-item">
                  <FaUniversity className="education-icon" />
                  <div>
                    <h4>Formación Académica</h4>
                    <p>Contador Público Nacional - Universidad Nacional de Entre Ríos</p>
                    <p>Especialización en contabilidad para gobiernos locales y comunas</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-highlights">
              <div className="highlight">
                <h3>Experiencia</h3>
                <p>Especialista en asesoramiento fiscal y contable</p>
              </div>
              <div className="highlight">
                <h3>Enfoque</h3>
                <p>Soluciones prácticas y personalizadas</p>
              </div>
              <div className="highlight">
                <h3>Compromiso</h3>
                <p>Acompañamiento continuo en tu crecimiento</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img 
              src={sebaImage}
              alt="Sebastián Tomé" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 