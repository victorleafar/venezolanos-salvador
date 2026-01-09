import React from 'react';

export default function Encceja() {
  return (
    <section id="encceja" className="section bg-white">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="section-title">ENCCEJA</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Guía práctica para obtener el ENCCEJA (Exame Nacional para Certificação de Competências de Jovens e Adultos) en Brasil.
          </p>
        </div>

        {/* Información general */}
        <div style={{ padding: 20, background: '#f9f9f9', borderRadius: 8, marginBottom: 20 }}>
          <h3>Qué es el ENCCEJA</h3>
          <p>
            Es un examen gratuito del gobierno brasileño, aplicado por el INEP, que permite que jóvenes y adultos que no terminaron la educación fundamental o media obtengan la certificación de competencias. 
            Evalúa conocimientos y habilidades de la educación básica, y requiere inscripción en línea con CPF.
          </p>
        </div>

        {/* Para qué sirve */}
        <div style={{ padding: 20, background: '#e9e9e9', borderRadius: 8, marginBottom: 20 }}>
          <h3>Para qué sirve</h3>
          <ul>
            <li>Concluir los estudios del nivel fundamental o medio para quienes no los completaron a la edad adecuada.</li>
            <li>Obtener el diploma mediante certificación nacional, validada por las Secretarías de Educación y los Institutos Federales.</li>
          </ul>
        </div>

        {/* Quién puede participar */}
        <div style={{ padding: 20, background: '#f0f0f0', borderRadius: 8, marginBottom: 20 }}>
          <h3>Quién puede participar</h3>
          <ul>
            <li>Personas con 15 años o más para el nivel fundamental.</li>
            <li>Personas con 18 años o más para el nivel medio.</li>
            <li>Edad válida en la fecha de la prueba.</li>
          </ul>
        </div>

        {/* Cómo funciona */}
        <div style={{ padding: 20, background: '#f9f9f9', borderRadius: 8, marginBottom: 20 }}>
          <h3>Cómo funciona</h3>
          <ol>
            <li>
              <strong>Inscripción:</strong> Gratuita, realizada en línea en el sitio oficial del ENCCEJA 
              (<a href="https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/encceja" target="_blank" rel="noreferrer">enccejanacional.inep.gov.br</a>), requiere CPF y datos personales.
            </li>
            <li>
              <strong>Pruebas:</strong> Evalúan áreas del conocimiento y incluyen una redacción, corregida con la Teoría de Respuesta al Ítem (TRI).
            </li>
            <li>
              <strong>Certificación:</strong> Emitida por las Secretarías de Educación o Institutos Federales tras alcanzar las notas mínimas (100 puntos en áreas y 5 en la redacción).
            </li>
          </ol>
        </div>

        {/* Información importante */}
        <div style={{ padding: 20, background: '#e9e9e9', borderRadius: 8 }}>
          <h3>Información importante</h3>
          <ul>
            <li>Las inscripciones y fechas de aplicación varían cada año; se publica un edital oficial por el INEP.</li>
            <li>Los resultados se liberan en el sitio oficial del ENCCEJA.</li>
            <li>La certificación se envía al participante por correo electrónico.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
