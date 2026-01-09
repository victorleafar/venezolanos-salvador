import React from 'react';

export default function DocumentoMigratorio() {
  return (
    <section id="documento-migratorio" className="section bg-white">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="section-title">Documento Migratorio (RNM)</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Qué es el RNM, cómo tramitarlo y consejos prácticos para inmigrantes en Brasil.
          </p>
        </div>

        {/* Información del RNM */}
        <div style={{ padding: 20, background: '#f9f9f9', borderRadius: 8, marginBottom: 20 }}>
          <h3>Qué es el RNM</h3>
          <p>
            El Registro Nacional Migratorio (RNM) es un número de identificación otorgado a inmigrantes en Brasil, que permite la emisión de la 
            <strong> Carteira de Registro Nacional Migratório (CRNM)</strong>. Es necesario para residir legalmente y realizar trámites administrativos.
          </p>
        </div>

        {/* Pasos para tramitar el RNM */}
        <div style={{ padding: 20, background: '#f0f0f0', borderRadius: 8, marginBottom: 20 }}>
          <h3>Pasos para solicitar el RNM</h3>
          <ol>
            <li>Verificar que tienes autorización de residencia o visto temporal.</li>
            <li>Reunir la documentación requerida: <a href="https://www.gov.br/pt-br/servicos/obter-autorizacao-de-residencia-e-carteira-de-registro-migratorio" target="_blank" rel="noreferrer">Documentación oficial</a>.</li>
            <li>Rellenar el formulario en línea y generar la GRU (pago de tasas) si corresponde.</li>
            <li>Agendar cita en la unidad de la Policía Federal de tu domicilio.</li>
            <li>Acudir a la cita con los documentos y recibir tu CRNM con el RNM asignado.</li>
          </ol>
        </div>

        {/* Costos y tiempos */}
        <div style={{ padding: 20, background: '#e9e9e9', borderRadius: 8, marginBottom: 20 }}>
          <h3>Costos y tiempos</h3>
          <ul>
            <li>Taxa de Processamento: R$ 168,13</li>
            <li>Emisión de la CRNM: R$ 204,77</li>
            <li>Tiempo estimado: hasta 180 días corridos para completar todo el proceso</li>
          </ul>
        </div>

        {/* Canales de atención */}
        <div style={{ padding: 20, background: '#f0f0f0', borderRadius: 8 }}>
          <h3>Canales de atención</h3>
          <ul>
            <li>Web: completar formularios y agendar citas en la <a href="https://www.gov.br/pt-br/servicos/obter-autorizacao-de-residencia-e-carteira-de-registro-migratorio" target="_blank" rel="noreferrer">página oficial del Gobierno</a></li>
            <li>Presencial: acudir a la unidad de la Policía Federal correspondiente</li>
          </ul>
          <p>Para más información sobre servicios para inmigrantes: <a href="https://www.gov.br/pt-br/temas/servicios-para-inmigrantes" target="_blank" rel="noreferrer">Página oficial de servicios para inmigrantes</a></p>
        </div>
      </div>
    </section>
  );
}
