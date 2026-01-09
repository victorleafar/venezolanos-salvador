import React from 'react';

export default function Celpebras() {
  return (
    <section id="celpebras" className="section bg-white">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="section-title">CELPE-Bras</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Guía práctica para el examen CELPE-Bras, certificación oficial de portugués para extranjeros.
          </p>
        </div>

        {/* Información general */}
        <div style={{ padding: 20, background: '#f9f9f9', borderRadius: 8, marginBottom: 20 }}>
          <h3>Información general</h3>
          <p>
            El CELPE-Bras se realiza dos veces al año, generalmente en abril y octubre, con inscripciones en febrero/marzo y agosto/septiembre, respectivamente. 
            Es un examen oficial para certificar la competencia en portugués para extranjeros y se aplica de forma simultánea en Brasil y otros países.
          </p>
        </div>

        {/* Fechas clave */}
        <div style={{ padding: 20, background: '#e9e9e9', borderRadius: 8, marginBottom: 20 }}>
          <h3>Fechas clave (Ejemplos recientes/próximos)</h3>
          <ul>
            <li>Convocatoria 2025/1: Aplicación en marzo 2025, inscripciones en enero.</li>
            <li>Convocatoria 2025/2: Inscripciones en agosto 2025, aplicación en octubre 2025.</li>
            <li>Próxima convocatoria 2026/1: Inscripciones en febrero/marzo 2026, aplicación en abril 2026 (ejemplo: 28, 29 y 30 de abril).</li>
          </ul>
        </div>

        {/* Cómo funciona */}
        <div style={{ padding: 20, background: '#f0f0f0', borderRadius: 8, marginBottom: 20 }}>
          <h3>Cómo funciona el examen</h3>
          <ol>
            <li>
              <strong>Inscripción:</strong> Se realiza en línea a través del portal del INEP.
            </li>
            <li>
              <strong>Pago:</strong> Se paga la tasa de inscripción en el banco indicado.
            </li>
            <li>
              <strong>Confirmación:</strong> Entregar el comprobante de pago a la institución aplicadora local (Instituto Guimarães Rosa, universidades, etc.) para confirmar la inscripción.
            </li>
            <li>
              <strong>Pruebas:</strong> Incluyen una parte escrita colectiva y una parte oral individual, realizadas en sedes autorizadas.
            </li>
          </ol>
        </div>

        {/* Dónde consultar fechas */}
        <div style={{ padding: 20, background: '#f9f9f9', borderRadius: 8, marginBottom: 20 }}>
          <h3>Dónde consultar fechas y convocatorias</h3>
          <ul>
            <li>
              <a href="https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/celpe-bras" target="_blank" rel="noreferrer">
                Sistema oficial del INEP
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/celpe.bras/" target="_blank" rel="noreferrer">
                Instagram CELPE-Bras
              </a>
            </li>
            <li>
              Consultar las redes sociales o sitios web de los centros aplicadores en tu país, como embajadas, institutos culturales brasileños o universidades.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
