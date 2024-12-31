import React from 'react';
import './CTA.css';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';

const CTA = () => {
  const handleContactClick = () => {
    window.open('https://wa.me/TUNUMERO', '_blank');
  };

  return (
    <section className="cta">
      <div className="cta-container">
        <div className="cta-content">
          <h2>¿Querés llevar tus finanzas al próximo nivel?</h2>
          <h3>¡Hablemos!</h3>
          <p>
            Agendá una consulta gratuita y descubrí cómo puedo ayudarte a optimizar 
            la gestión financiera de tu negocio
          </p>
          <div className="cta-buttons">
            <button 
              className="cta-button whatsapp"
              onClick={handleContactClick}
            >
              <FaWhatsapp /> Agendá tu consulta
            </button>
            <button 
              className="cta-button calendar"
              onClick={() => document.getElementById('calendario').scrollIntoView({ behavior: 'smooth' })}
            >
              Ver calendario <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="cta-pattern">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="ctaGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#ctaGrid)" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default CTA; 