import React from 'react';
import './Services.css';
import { 
  FaCalculator, 
  FaChartLine, 
  FaFileInvoiceDollar, 
  FaUsers, 
  FaLandmark,
  FaPiggyBank 
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCalculator />,
      title: "Asesoramiento Impositivo",
      description: "Estrategias fiscales para optimizar tus impuestos y minimizar riesgos.",
      features: [
        "Planificación fiscal estratégica",
        "Optimización de cargas tributarias",
        "Prevención de riesgos fiscales"
      ]
    },
    {
      icon: <FaChartLine />,
      title: "Gestión Contable para Empresas",
      description: "Auditorías, balances y gestión contable para pequeñas y medianas empresas.",
      features: [
        "Auditorías financieras",
        "Elaboración de balances",
        "Estados contables mensuales"
      ]
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: "Trámites para Autónomos y Monotributistas",
      description: "Alta de monotributo, declaraciones juradas y soporte continuo.",
      features: [
        "Alta y recategorización",
        "Declaraciones juradas",
        "Asesoramiento permanente"
      ]
    },
    {
      icon: <FaUsers />,
      title: "Liquidación de Sueldos",
      description: "Servicio integral para el cálculo y presentación de nóminas.",
      features: [
        "Liquidación mensual",
        "Presentación de DDJJ",
        "Gestión de cargas sociales"
      ]
    },
    {
      icon: <FaLandmark />,
      title: "Contabilidad de Comunas",
      description: "Asesoramiento especializado en normativas contables para comunas locales de Entre Ríos.",
      features: [
        "Gestión contable municipal",
        "Cumplimiento normativo",
        "Reportes especializados"
      ]
    },
    {
      icon: <FaPiggyBank />,
      title: "Consultoría Financiera",
      description: "Análisis y planificación financiera para maximizar los resultados de tu negocio.",
      features: [
        "Planificación estratégica",
        "Análisis de inversiones",
        "Optimización de recursos"
      ]
    }
  ];

  return (
    <section id="servicios" className="services">
      <div className="services-container">
        <h2>¿Cómo puedo ayudarte?</h2>
        <p className="services-subtitle">
          Soluciones profesionales adaptadas a tus necesidades
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 