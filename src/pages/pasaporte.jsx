import React from 'react';

export default function Pasaporte() {
  return (
    <section id="pasaporte" className="section bg-white">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="section-title">Pasaporte Venezolano</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Trámites y renovación del pasaporte venezolano desde Brasil.
          </p>
        </div>

        {/* Introducción */}
        <div style={{ padding: 20, background: '#f9f9f9', borderRadius: 8, marginBottom: 20 }}>
          <h3>Información general</h3>
          <p>
            Si eres venezolano y te encuentras en Brasil, el pasaporte sólo puede solicitarse en la Embajada de Venezuela en Brasilia. 
            Es importante que tu salida de Venezuela haya sido sellada o registrada, para que aparezca la opción de solicitar el pasaporte en el extranjero. Caso no haya sido registrada tu salida, será necesario actualizar esta información a traves de gestores, o algun familiar en Venezuela acuda con un poder a una oficina del saime para registrar tu salida y poder actualizar el status en el sistema.
          </p>
        </div>

        {/* Pasos para solicitar */}
        <div style={{ padding: 20, background: '#e9e9e9', borderRadius: 8, marginBottom: 20 }}>
          <h3>Pasos para solicitar el pasaporte</h3>
          <ol>
            <li>Accede al portal del SAIME: <a href="https://www.saime.gob.ve/" target="_blank" rel="noreferrer">https://www.saime.gob.ve/</a></li>
            <li>Inicia sesión y verifica que tu salida de Venezuela esté registrada para poder solicitar el pasaporte en el extranjero.</li>
            <li>Solicita la cita consular a través del portal del SAIME.</li>
            <li>Una vez confirmada la cita, organiza la logística de viaje para acudir a la Embajada de Venezuela en Brasilia.</li>
            <li>Asiste a la cita en la Embajada con todos los documentos requeridos para completar el trámite.</li>
          </ol>
        </div>

        {/* Embajada y contacto */}
        <div style={{ padding: 20, background: '#f0f0f0', borderRadius: 8, marginBottom: 20 }}>
          <h3>Embajada de Venezuela en Brasil</h3>
          <p><strong>Dirección:</strong> SES 803 - Asa Sul, Brasília - Federal District, 70451-900, Brazil</p>
          <p>
            Más información sobre horarios, requisitos y contacto:  
            <a href="https://www.instagram.com/embven.brasil/" target="_blank" rel="noreferrer"> Instagram de la Embajada</a>
          </p>
        </div>

        {/* Enlace oficial */}
        <div style={{ marginTop: 20, textAlign: 'center' }}>
          <p>
            Para gestionar tu cita: <a href="https://www.saime.gob.ve/" target="_blank" rel="noreferrer">Portal del SAIME</a>
          </p>
        </div>
      </div>
    </section>
  );
}
