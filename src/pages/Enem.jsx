import React from 'react';

export default function Enem() {
  return (
    <section id="enem" className="section bg-white">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="section-title">ENEM</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Guía práctica para realizar el ENEM (Exame Nacional do Ensino Médio) en Brasil.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* Bloque 1 */}
          <div style={{ padding: 20, background: '#f9f9f9', borderRadius: 8 }}>
            <h3>¿Qué es el ENEM?</h3>
            <p>El ENEM es el examen nacional brasileño que evalúa a los estudiantes de secundaria y sirve para:</p>
            <ul>
              <li>Acceso a universidades públicas (SISU).</li>
              <li>Obtención de becas (ProUni).</li>
              <li>Financiamiento educativo (FIES).</li>
              <li>Evaluación individual del estudiante.</li>
            </ul>
          </div>

          {/* Bloque 2 */}
          <div style={{ padding: 20, background: '#f9f9f9', borderRadius: 8 }}>
            <h3>Estructura del examen</h3>
            <p>Consta de dos partes principales:</p>
            <ul>
              <li><strong>Preguntas objetivas:</strong> 180 preguntas en 4 áreas:</li>
              <ul>
                <li>Linguagens, Códigos y sus Tecnologías</li>
                <li>Ciencias Humanas y sus Tecnologías</li>
                <li>Ciencias de la Naturaleza y sus Tecnologías</li>
                <li>Matemática y sus Tecnologías</li>
              </ul>
              <li><strong>Redacción:</strong> Texto dissertativo-argumentativo obligatorio.</li>
            </ul>
          </div>

          {/* Bloque 3 */}
          <div style={{ padding: 20, background: '#f9f9f9', borderRadius: 8 }}>
            <h3>Cómo funciona</h3>
            <ul>
              <li><strong>Inscripción:</strong> Generalmente a mitad de año, en el sitio oficial del INEP.</li>
              <li><strong>Fechas de aplicación:</strong> Dos domingos consecutivos definidos cada año.</li>
              <li><strong>Resultados:</strong> Publicados en la <a href="https://enem.inep.gov.br/participante/" target="_blank" rel="noreferrer">Página del Participante</a>.</li>
            </ul>
          </div>

          {/* Bloque 4 */}
          <div style={{ padding: 20, background: '#f9f9f9', borderRadius: 8 }}>
            <h3>Requisitos</h3>
            <ul>
              <li>Documento de identidad válido.</li>
              <li>En algunos casos, comprobante de residencia.</li>
              <li>Revisar las fechas y normas oficiales cada año.</li>
            </ul>
          </div>

          {/* Bloque 5 */}
          <div style={{ padding: 20, background: '#f9f9f9', borderRadius: 8 }}>
            <h3>Enlaces oficiales</h3>
            <ul>
              <li><a href="https://www.gov.br/inep/enem" target="_blank" rel="noreferrer">Portal oficial del ENEM (INEP)</a></li>
              <li><a href="https://enem.inep.gov.br/participante/" target="_blank" rel="noreferrer">Página del Participante</a></li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
