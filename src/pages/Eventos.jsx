import React from 'react';

export default function Eventos() {
  return (
    <section id="eventos" className="section bg-white">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="section-title">Eventos</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Guía práctica para obtener el CPF (Cadastro de Pessoas Físicas) en Brasil.</p>
        </div>

        <div style={{ padding: 20, background: '#fff', borderRadius: 8 }}>
          <h3>Resumen rápido</h3>
          <ul>
            <li>Requisitos: documento de identidad y, en algunos casos, comprobante de residencia.</li>
            <li>Dónde solicitar: Policía Federal, Banco do Brasil o por Internet (según caso).</li>
            <li>Costos y tiempos: variable — consulta la guía oficial.</li>
          </ul>
          <p>Reemplaza este contenido con pasos detallados, enlaces oficiales y ejemplos de formularios.</p>
        </div>
      </div>
    </section>
  );
}