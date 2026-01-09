import React from 'react';

export default function Deportes() {
  return (
    <section id="deportes" className="section bg-white">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="section-title">Deportes</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Actividades deportivas y ligas locales para la comunidad venezolana.</p>
        </div>

        <div style={{ padding: 40, background: '#fff', borderRadius: 8, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🚧</div>
          <h3 style={{ color: 'var(--ven-blue)', marginBottom: 12 }}>Página en Construcción</h3>
          <p style={{ color: 'var(--text-light)', marginBottom: 20 }}>
            Estamos preparando contenido detallado sobre:
          </p>
          <ul style={{ textAlign: 'left', maxWidth: 500, margin: '0 auto', color: 'var(--text-dark)' }}>
            <li>Ligas de fútbol y equipos venezolanos en Salvador</li>
            <li>Canchas y espacios deportivos públicos</li>
            <li>Torneos y competencias comunitarias</li>
            <li>Grupos de running, ciclismo y otros deportes</li>
            <li>Academias y entrenamientos gratuitos</li>
            <li>Cómo unirte o formar un equipo deportivo</li>
          </ul>
          <p style={{ marginTop: 20, fontSize: 14, color: 'var(--text-light)' }}>
            ¿Organizas actividades deportivas? <a href="/#contacto" style={{ color: 'var(--ven-yellow)', fontWeight: 'bold' }}>Contáctanos</a>
          </p>
        </div>
      </div>
    </section>
  );
}