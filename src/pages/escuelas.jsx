import React from 'react';

export default function Escuelas() {
  return (
    <section id="escuelas" className="section bg-white">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="section-title">Escuelas para Niños</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Guía para matricular a tus hijos en escuelas de Salvador, Bahía.</p>
        </div>

        <div style={{ padding: 40, background: '#fff', borderRadius: 8, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🚧</div>
          <h3 style={{ color: 'var(--ven-blue)', marginBottom: 12 }}>Página en Construcción</h3>
          <p style={{ color: 'var(--text-light)', marginBottom: 20 }}>
            Estamos preparando contenido detallado sobre:
          </p>
          <ul style={{ textAlign: 'left', maxWidth: 500, margin: '0 auto', color: 'var(--text-dark)' }}>
            <li>Cómo matricular a tus hijos en escuelas públicas</li>
            <li>Documentos necesarios para inscripción</li>
            <li>Escuelas recomendadas en Salvador por barrio</li>
            <li>Diferencias entre escuelas públicas y privadas</li>
            <li>Programas de apoyo para niños migrantes</li>
            <li>Validación de estudios cursados en Venezuela</li>
          </ul>
          <p style={{ marginTop: 20, fontSize: 14, color: 'var(--text-light)' }}>
            ¿Tienes información que quieras compartir? <a href="/#contacto" style={{ color: 'var(--ven-yellow)', fontWeight: 'bold' }}>Contáctanos</a>
          </p>
        </div>
      </div>
    </section>
  );
}