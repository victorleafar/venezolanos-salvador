import React from 'react';

export default function Vivienda() {
  return (
    <section id="vivienda" className="section bg-white">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="section-title">Vivienda</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Consejos para encontrar vivienda en Salvador, Bahía.</p>
        </div>

        <div style={{ padding: 40, background: '#fff', borderRadius: 8, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🚧</div>
          <h3 style={{ color: 'var(--ven-blue)', marginBottom: 12 }}>Página en Construcción</h3>
          <p style={{ color: 'var(--text-light)', marginBottom: 20 }}>
            Estamos preparando contenido detallado sobre:
          </p>
          <ul style={{ textAlign: 'left', maxWidth: 500, margin: '0 auto', color: 'var(--text-dark)' }}>
            <li>Barrios recomendados para venezolanos en Salvador</li>
            <li>Cómo buscar alquiler (plataformas, grupos de Facebook)</li>
            <li>Documentos necesarios para alquilar</li>
            <li>Precios promedio de alquiler por zona</li>
            <li>Consejos para evitar estafas</li>
            <li>Programas de vivienda social</li>
          </ul>
          <p style={{ marginTop: 20, fontSize: 14, color: 'var(--text-light)' }}>
            ¿Tienes información que quieras compartir? <a href="/#contacto" style={{ color: 'var(--ven-yellow)', fontWeight: 'bold' }}>Contáctanos</a>
          </p>
        </div>
      </div>
    </section>
  );
}