import React from 'react';
import './Footer.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contacto</h3>
            <ul className="contact-list">
              <li>
                <FaPhone /> <a href="tel:+TUNUMERO">+54 9 XXX XXX XXXX</a>
              </li>
              <li>
                <FaEnvelope /> <a href="mailto:contacto@sebastiantome.com">contacto@sebastiantome.com</a>
              </li>
              <li>
                <FaMapMarkerAlt /> Entre Ríos, Argentina
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Seguime en redes</h3>
            <div className="social-links">
              <a href="https://linkedin.com/in/sebastian-tome" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/TUNUMERO" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
              <a href="https://instagram.com/sebastian.tome" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Legal</h3>
            <ul className="legal-links">
              <li>
                <a href="/privacidad">Política de Privacidad</a>
              </li>
              <li>
                <a href="/terminos">Términos y Condiciones</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sebastián Tomé - Contador Público Nacional. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 