import React from 'react';

export default function Empleo() {
  return (
    <section id="empleo" className="section bg-white">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="section-title">Empleo y CV</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Guía práctica para encontrar empleo en Salvador, Bahía.</p>
        </div>

        <div style={{ padding: 40, background: '#fff', borderRadius: 8, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🚧</div>
          <h3 style={{ color: 'var(--ven-blue)', marginBottom: 12 }}>Página en Construcción</h3>
          <p style={{ color: 'var(--text-light)', marginBottom: 20 }}>
            Estamos preparando contenido detallado sobre:
          </p>
          <ul style={{ textAlign: 'left', maxWidth: 500, margin: '0 auto', color: 'var(--text-dark)' }}>
            <li>Cómo adaptar tu CV al formato brasileño</li>
            <li>Portales de empleo más utilizados en Bahía</li>
            <li>Consejos para entrevistas de trabajo</li>
            <li>Derechos laborales y Carteira de Trabalho</li>
            <li>Programas de empleabilidad para migrantes</li>
          </ul>
          <p style={{ marginTop: 20, fontSize: 14, color: 'var(--text-light)' }}>
            ¿Tienes información que quieras compartir?{' '}
            <a
              href="/#contacto"
              style={{ color: 'var(--ven-yellow)', fontWeight: 'bold' }}
            >
              Contáctanos
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}