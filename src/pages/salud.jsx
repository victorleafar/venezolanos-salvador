import React from 'react';

export default function Salud() {
  return (
    <section id="salud" className="section bg-white">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="section-title">Salud (SUS)</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Acceso al Sistema Único de Salud en Salvador, Bahía.</p>
        </div>

        <div style={{ padding: 40, background: '#fff', borderRadius: 8, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🚧</div>
          <h3 style={{ color: 'var(--ven-blue)', marginBottom: 12 }}>Página en Construcción</h3>
          <p style={{ color: 'var(--text-light)', marginBottom: 20 }}>
            Estamos preparando contenido detallado sobre:
          </p>
          <ul style={{ textAlign: 'left', maxWidth: 500, margin: '0 auto', color: 'var(--text-dark)' }}>
            <li>Cómo registrarte en el SUS (Sistema Único de Salud)</li>
            <li>Documentos necesarios para atención médica</li>
            <li>Ubicación de UBS (Unidades Básicas de Salud) en Salvador</li>
            <li>Hospitales y emergencias</li>
            <li>Vacunación y programas de salud</li>
            <li>Acceso a medicamentos gratuitos</li>
          </ul>
          <p style={{ marginTop: 20, fontSize: 14, color: 'var(--text-light)' }}>
            ¿Tienes información que quieras compartir? <a href="/#contacto" style={{ color: 'var(--ven-yellow)', fontWeight: 'bold' }}>Contáctanos</a>
          </p>
        </div>
      </div>
    </section>
  );
}