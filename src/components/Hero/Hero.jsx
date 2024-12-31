import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-pattern">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <h1>Optimización Fiscal y Contable para Profesionales y Empresas</h1>
          <p>Asesoramiento integral para simplificar tus finanzas y cumplir con tus obligaciones fiscales.</p>
          <button 
            className="hero-cta"
            onClick={() => window.open('https://wa.me/TUNUMERO', '_blank')}
          >
            Solicitá tu consulta
          </button>
        </div>
        <div className="hero-graphic">
          <div className="abstract-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 