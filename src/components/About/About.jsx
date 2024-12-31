import React from 'react';
import './About.css';
import { FaLinkedin, FaUniversity } from 'react-icons/fa';
// import profileImage from '../../assets/sebastian-profile.jpg'; // Cuando tengas la imagen

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
            <a 
              href="https://www.linkedin.com/in/sebastian-tome" 
              target="_blank" 
              rel="noopener noreferrer"
              className="linkedin-button"
            >
              <FaLinkedin /> Conectá en LinkedIn
            </a>
          </div>
          <div className="about-image">
            {/* Cuando tengas la imagen: */}
            {/* <img src={profileImage} alt="Sebastián Tomé - Contador Público Nacional" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 