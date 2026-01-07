import React from 'react';

export default function Traduccion() {
  return (
    <section id="traduccion" className="section bg-white">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="section-title">Traducción de Documentos</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Guía práctica para la traducción de documentos en Brasil.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* Bloque 1 */}
          <div style={{ padding: 20, background: '#f9f9f9', borderRadius: 8 }}>
            <h3>¿Qué es?</h3>
            <p>La traducción de documentos consiste en convertir documentos oficiales de un idioma a otro de manera legal y válida en Brasil, realizada por traductores e intérpretes comerciales registrados.</p>
          </div>

          {/* Bloque 2 */}
          <div style={{ padding: 20, background: '#f9f9f9', borderRadius: 8 }}>
            <h3>Requisitos</h3>
            <ul>
              <li>Documento original a traducir.</li>
              <li>En algunos casos, identificación oficial y comprobante de residencia.</li>
              <li>Verificar la necesidad de legalización o apostilla del documento previo a la traducción.</li>
            </ul>
          </div>

          {/* Bloque 3 */}
          <div style={{ padding: 20, background: '#f9f9f9', borderRadius: 8 }}>
            <h3>Cómo solicitar</h3>
            <p>El servicio debe ser realizado por traductores e intérpretes comerciales habilitados y registrados en la Junta Comercial del Estado (JUCEB). Puedes consultar los profesionales autorizados y procedimientos en la página oficial:</p>
            <ul>
              <li><a href="https://www.ba.gov.br/juceb/home/matriculas-e-carteira-profissional/tradutores-e-interpretes-comerciais" target="_blank" rel="noreferrer">JUCEB - Traductores e Intérpretes Comerciales</a></li>
            </ul>
          </div>

          {/* Bloque 4 */}
          <div style={{ padding: 20, background: '#f9f9f9', borderRadius: 8 }}>
            <h3>Costos y tiempos</h3>
            <p>Varían según la extensión del documento, el idioma y el traductor seleccionado. Consulta con el profesional o la entidad autorizada para obtener valores y plazos exactos.</p>
          </div>

          {/* Bloque 5 */}
          <div style={{ padding: 20, background: '#f9f9f9', borderRadius: 8 }}>
            <h3>Consejos prácticos</h3>
            <ul>
              <li>Verifica si tu documento necesita apostilla antes de traducir.</li>
              <li>Conserva copias digitales y físicas de los documentos traducidos.</li>
              <li>Confirma que el traductor esté debidamente registrado para que la traducción tenga validez legal.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
