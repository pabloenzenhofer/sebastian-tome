import React from 'react';
import './Calendar.css';
import { FaCalendarAlt, FaDownload, FaGoogle } from 'react-icons/fa';

const Calendar = () => {
  const monthlyDates = [
    { type: "Monotributo", date: "20 de cada mes", description: "Pago mensual" },
    { type: "IVA", date: "Según terminación de CUIT", description: "Presentación y pago mensual" },
    { type: "Autónomos", date: "Del 3 al 7 de cada mes", description: "Según terminación de CUIT" }
  ];

  const annualDates = [
    { type: "Ganancias Personas Físicas", date: "15 de junio", description: "Presentación y pago anual" },
    { type: "Bienes Personales", date: "15 de junio", description: "Presentación y pago anual" },
    { type: "Recategorización Monotributo", date: "20 de julio/enero", description: "Semestral" }
  ];

  const cuitTable = [
    { ending: "0-1", date: "Día 13" },
    { ending: "2-3", date: "Día 14" },
    { ending: "4-5", date: "Día 15" },
    { ending: "6-7", date: "Día 16" },
    { ending: "8-9", date: "Día 17" }
  ];

  return (
    <section id="calendario" className="calendar">
      <div className="calendar-container">
        <h2>Fechas Clave del Calendario Fiscal</h2>
        <p className="calendar-subtitle">
          Mantené el control de tus vencimientos impositivos
        </p>

        <div className="calendar-grid">
          <div className="calendar-section monthly">
            <h3><FaCalendarAlt /> Vencimientos Mensuales</h3>
            <div className="dates-list">
              {monthlyDates.map((item, index) => (
                <div className="date-item" key={index}>
                  <h4>{item.type}</h4>
                  <p className="date">{item.date}</p>
                  <p className="description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="calendar-section annual">
            <h3><FaCalendarAlt /> Vencimientos Anuales</h3>
            <div className="dates-list">
              {annualDates.map((item, index) => (
                <div className="date-item" key={index}>
                  <h4>{item.type}</h4>
                  <p className="date">{item.date}</p>
                  <p className="description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="calendar-section cuit">
            <h3>Vencimientos IVA por CUIT</h3>
            <div className="cuit-table">
              <table>
                <thead>
                  <tr>
                    <th>Terminación</th>
                    <th>Vencimiento</th>
                  </tr>
                </thead>
                <tbody>
                  {cuitTable.map((item, index) => (
                    <tr key={index}>
                      <td>{item.ending}</td>
                      <td>{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="calendar-actions">
          <button className="calendar-button download">
            <FaDownload /> Descargar Calendario PDF
          </button>
          <button className="calendar-button google">
            <FaGoogle /> Sincronizar con Google Calendar
          </button>
        </div>

        <div className="calendar-note">
          <p>
            * Las fechas pueden variar según disposiciones de AFIP. 
            Consultá siempre el calendario oficial para confirmación.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Calendar; 