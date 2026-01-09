import React from 'react';

export default function Eventos() {
  return (
    <section id="eventos" className="section bg-white">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="section-title">Agenda de Eventos</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Próximos eventos y encuentros de la comunidad venezolana en Salvador.</p>
        </div>

        <div style={{ padding: 40, background: '#fff', borderRadius: 8, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🚧</div>
          <h3 style={{ color: 'var(--ven-blue)', marginBottom: 12 }}>Página en Construcción</h3>
          <p style={{ color: 'var(--text-light)', marginBottom: 20 }}>
            Estamos preparando contenido detallado sobre:
          </p>
          <ul style={{ textAlign: 'left', maxWidth: 500, margin: '0 auto', color: 'var(--text-dark)' }}>
            <li>Calendario de eventos comunitarios</li>
            <li>Encuentros culturales venezolanos</li>
            <li>Festividades y celebraciones tradicionales</li>
            <li>Talleres y charlas informativas</li>
            <li>Eventos deportivos y recreativos</li>
            <li>Cómo organizar o proponer un evento</li>
          </ul>
          <p style={{ marginTop: 20, fontSize: 14, color: 'var(--text-light)' }}>
            ¿Tienes un evento que compartir? <a href="/#contacto" style={{ color: 'var(--ven-yellow)', fontWeight: 'bold' }}>Contáctanos</a>
          </p>
        </div>
      </div>
    </section>
  );
}