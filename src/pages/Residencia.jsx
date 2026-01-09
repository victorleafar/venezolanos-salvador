import React from 'react';

export default function Residencia() {
  return (
    <section id="residencia" className="section bg-white">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="section-title">Residencia / Refugio</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Información sobre tipos de residencia, requisitos y procesos de refugio en Brasil.
          </p>
        </div>

        {/* Autorización de Residencia */}
        <div style={{ padding: 20, background: '#f9f9f9', borderRadius: 8, marginBottom: 20 }}>
          <h3>Obtener Autorización de Residencia</h3>
          <p><strong>Opciones:</strong> Solicitar, Renovar o Transformar residencia</p>
          <p><strong>Qué es:</strong> Documento necesario para vivir o trabajar en Brasil.</p>
          <p><strong>Quién puede utilizar:</strong> Inmigrantes en Brasil, para renovaciones temporarias o permanentes.</p>
          <p><strong>Documentación:</strong> <a href="https://www.gov.br/pt-br/servicos/obter-autorizacao-de-residencia-e-carteira-de-registro-migratorio" target="_blank" rel="noreferrer">Ver documentación requerida</a></p>
          <p><strong>Costos:</strong></p>
          <ul>
            <li>Taxa de Processamento: R$ 168,13</li>
            <li>Emisión de la CRNM: R$ 204,77</li>
          </ul>
          <p><strong>Tiempo estimado:</strong> Hasta 180 días corridos</p>
          <p><strong>Canais:</strong> Web y presencial (Polícia Federal)</p>
        </div>

        {/* Registrar-se como Extranjero */}
        <div style={{ padding: 20, background: '#f0f0f0', borderRadius: 8, marginBottom: 20 }}>
          <h3>Registrar-se como Extranjero</h3>
          <p><strong>Opciones:</strong> Registro de Visto, Registro de Residencia, Registro de Refugiado</p>
          <p><strong>Quién debe registrarse:</strong> Personas con visto temporario o autorización de residencia aprobada, refugiados/asílados.</p>
          <p><strong>Plazos:</strong></p>
          <ul>
            <li>Visto temporario: 90 días desde la entrada en Brasil</li>
            <li>Autorización de residencia: 30 días desde publicación en DOU</li>
          </ul>
          <p><strong>Costos:</strong> Emisión de la CRNM: R$ 204,77</p>
          <p><strong>Canais:</strong> Web (formulario) y presencial (Polícia Federal)</p>
          <p><strong>Tiempo estimado:</strong> Registro ~20 minutos, espera ~30 minutos</p>
        </div>

        {/* Solicitar Refugio */}
        <div style={{ padding: 20, background: '#e9e9e9', borderRadius: 8 }}>
          <h3>Solicitar Refúgio en Brasil</h3>
          <p><strong>Qué es:</strong> Protección legal para personas perseguidas por raza, religión, nacionalidad, grupo social u opiniones políticas, o víctimas de graves violaciones de derechos humanos.</p>
          <p><strong>Quién puede utilizar:</strong> Inmigrantes con temor fundado de persecución o apátridas, o víctimas de violaciones de derechos humanos.</p>
          <p><strong>Etapas:</strong></p>
          <ol>
            <li>Crear o verificar acceso a un email.</li>
            <li>Registrarse en <a href="https://www.gov.br/pt-br/servicos/solicitar-refugio" target="_blank" rel="noreferrer">Sisconare</a>.</li>
            <li>Definir la contraseña desde el email de confirmación.</li>
            <li>Realizar login en Sisconare.</li>
            <li>Llenar el formulario de solicitud de refugio y finalizar.</li>
            <li>Agendar cita en la Policía Federal para emisión del Protocolo de Refugio.</li>
          </ol>
          <p><strong>Costos:</strong> R$ 0,00</p>
          <p><strong>Tiempo estimado:</strong> Entre 10 y 60 minutos para el registro inicial, no estimado para emisión del protocolo.</p>
        </div>

        {/* Información general */}
        <div style={{ marginTop: 20, textAlign: 'center' }}>
          <p>Para más información sobre servicios para inmigrantes en Brasil: <a href="https://www.gov.br/pt-br/temas/servicios-para-inmigrantes" target="_blank" rel="noreferrer">Visitar página oficial</a></p>
        </div>
      </div>
    </section>
  );
}
