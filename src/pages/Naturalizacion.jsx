import React from 'react';

export default function Naturalizacion() {
  return (
    <section id="naturalizacion" className="section bg-white">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="section-title">Naturalización</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Requisitos y proceso para solicitar la nacionalidad brasileña.
          </p>
        </div>

        {/* Qué es la naturalización */}
        <div style={{ padding: 20, background: '#f9f9f9', borderRadius: 8, marginBottom: 20 }}>
          <h3>Qué es la naturalización</h3>
          <p>
            La naturalización es el acto mediante el cual una persona adquiere voluntariamente la nacionalidad brasileña, siempre que cumpla con los requisitos establecidos por la ley, decreto y normas correlatas.
          </p>
          <p>
            Para conocer más sobre la naturalización y sus requisitos: <a href="https://www.gov.br/pt-br/servicos/solicitar-naturalizacao" target="_blank" rel="noreferrer">Visitar servicio oficial</a>
          </p>
        </div>

        {/* Quién puede utilizar */}
        <div style={{ padding: 20, background: '#f0f0f0', borderRadius: 8, marginBottom: 20 }}>
          <h3>Quién puede solicitar</h3>
          <p>Inmigrantes residentes en Brasil por plazo indeterminado.</p>
          <p>Tipos de naturalización:</p>
          <ul>
            <li>Naturalización Ordinaria</li>
            <li>Naturalización Extraordinaria</li>
            <li>Naturalización Provisoria</li>
            <li>Conversión de Naturalización Provisoria en Definitiva</li>
            <li>Naturalización Especial</li>
          </ul>
        </div>

        {/* Pasos para solicitar */}
        <div style={{ padding: 20, background: '#e9e9e9', borderRadius: 8, marginBottom: 20 }}>
          <h3>Pasos para solicitar la naturalización</h3>
          <ol>
            <li>Acceder al formulario <strong>Naturalizar-se</strong> y subir los documentos requeridos.</li>
            <li>Acompanhar el avance del proceso: <a href="https://www.gov.br/pt-br/servicos/solicitar-naturalizacao" target="_blank" rel="noreferrer">Consultar solicitud</a>.</li>
            <li>Agendar cita en la Policía Federal: <a href="https://servicos.pf.gov.br/agenda-web/formulario/13" target="_blank" rel="noreferrer">Formulario de agendamiento</a>.</li>
            <li>Reagendar, consultar o cancelar cita: <a href="https://servicos.pf.gov.br/agenda-web/acessar" target="_blank" rel="noreferrer">Acceder aquí</a>.</li>
            <li>Acudir a la Policía Federal para presentar documentos originales y realizar la biometría.</li>
            <li>Esperar la decisión del Departamento de Migraciones y estar atento a posibles notificaciones para complementar documentación.</li>
            <li>Consulta de la decisión: publicada en el Diario Oficial de la Unión.</li>
            <li>En caso de aprobación, entregar la CRNM en la unidad de Policía Federal. En caso de rechazo, se puede presentar recurso en 10 días desde la notificación.</li>
          </ol>
        </div>

        {/* Información adicional */}
        <div style={{ padding: 20, background: '#f0f0f0', borderRadius: 8, marginBottom: 20 }}>
          <h3>Información adicional</h3>
          <p><strong>Tiempo estimado:</strong> Hasta 180 días corridos.</p>
          <p><strong>Costos:</strong> Este servicio es gratuito.</p>
          <p>Es responsabilidad del solicitante mantener su dirección y correo electrónico actualizados para recibir notificaciones.</p>
          <p>Para dudas, enviar correo a: <a href="mailto:naturalizarse@mj.gov.br">naturalizarse@mj.gov.br</a></p>
        </div>

        {/* Enlace oficial */}
        <div style={{ marginTop: 20, textAlign: 'center' }}>
          <p>
            Para más información oficial: <a href="https://www.gov.br/pt-br/servicos/solicitar-naturalizacao" target="_blank" rel="noreferrer">Solicitar Naturalización Brasileña</a>
          </p>
        </div>
      </div>
    </section>
  );
}
