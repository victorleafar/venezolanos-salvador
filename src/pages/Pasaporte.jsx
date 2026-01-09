import React from 'react'; 

export default function Pasaporte() {
  return (
    <section id="pasaporte" className="section bg-white">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="section-title">Pasaporte Venezolano</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Información sobre trámites y renovación del pasaporte venezolano en Brasil.</p>
        </div>

        <div style={{ padding: 20, background: '#fff', borderRadius: 8 }}>
          <h3>Renovación del Pasaporte</h3>
          <p>
            Si tu pasaporte venezolano está vencido o próximo a vencer, puedes renovarlo 
            en el Consulado de Venezuela en Brasil.
          </p>
          
          <h3>Documentos necesarios</h3>
          <ul>
            <li>Pasaporte anterior (vencido o por vencer)</li>
            <li>Cédula de identidad venezolana</li>
            <li>Comprobante de pago</li>
            <li>Foto 5x5 cm fondo blanco</li>
          </ul>

          <h3>Prórroga del Pasaporte</h3>
          <p>
            La prórroga extiende la validez de tu pasaporte por 2 años adicionales. 
            Es un proceso más rápido y económico que la renovación completa.
          </p>

          <h3>Enlaces útiles</h3>
          <ul>
            <li><a href="https://www.saime.gob.ve/" target="_blank" rel="noreferrer">SAIME (Portal Oficial)</a></li>
            <li><a href="https://brasil.embajada.gob.ve/" target="_blank" rel="noreferrer">Embajada de Venezuela en Brasilia</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}