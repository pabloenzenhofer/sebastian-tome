import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Sebastián Tomé</h1>
        <p className="subtitle">Contador Público Nacional</p>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#sobre-mi">Sobre mí</a></li>
          <li><a href="#recursos">Recursos</a></li>
          <li><a href="#calendario">Calendario Impositivo</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
      <button 
        className="cta-button"
        onClick={() => window.open('https://wa.me/TUNUMERO', '_blank')}
      >
        Agendá una Consulta
      </button>
    </header>
  );
};

export default Header; 