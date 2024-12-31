import React from 'react';
import './Resources.css';
import { FaFileDownload, FaCheckSquare, FaCalculator } from 'react-icons/fa';

const Resources = () => {
  const resources = [
    {
      icon: <FaCalculator />,
      title: "Todo lo que necesitás saber sobre Ganancias",
      description: "Guía completa sobre el impuesto a las ganancias, deducciones y presentación.",
      downloadUrl: "/resources/guia-ganancias.pdf"
    },
    {
      icon: <FaCheckSquare />,
      title: "Checklist de Declaraciones Juradas para Autónomos",
      description: "Lista de verificación mensual y anual para cumplir con tus obligaciones fiscales.",
      downloadUrl: "/resources/checklist-ddjj.pdf"
    },
    {
      icon: <FaFileDownload />,
      title: "Guía para Optimizar tus Finanzas",
      description: "Consejos prácticos y estrategias para mejorar la gestión financiera de tu negocio.",
      downloadUrl: "/resources/guia-finanzas.pdf"
    }
  ];

  return (
    <section id="recursos" className="resources">
      <div className="resources-container">
        <h2>Recursos Útiles</h2>
        <p className="resources-subtitle">
          Material gratuito para ayudarte a gestionar mejor tus finanzas
        </p>
        
        <div className="resources-grid">
          {resources.map((resource, index) => (
            <div className="resource-card" key={index}>
              <div className="resource-icon">
                {resource.icon}
              </div>
              <div className="resource-content">
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <a 
                  href={resource.downloadUrl}
                  className="download-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFileDownload /> Descargar PDF
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="resources-cta">
          <h3>¿Querés más recursos exclusivos?</h3>
          <p>Suscribite a nuestro newsletter y recibí contenido actualizado sobre impuestos y finanzas</p>
          <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Tu correo electrónico"
              aria-label="Email"
            />
            <button type="submit">Suscribirse</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Resources; 