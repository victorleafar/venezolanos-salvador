import React from 'react';

export default function Carteira() {
  return (
    <section id="carteira" className="section bg-white">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="section-title">Carteira de Trabalho</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Guía práctica para obtener la Carteira de Trabalho en Brasil.
          </p>
        </div>

        {/* Qué es */}
        <div style={{ padding: 20, background: '#f9f9f9', borderRadius: 8, marginBottom: 20 }}>
          <h3>Qué es la Carteira de Trabalho</h3>
          <p>
            La <strong>Carteira de Trabalho e Previdência Social (CTPS)</strong> es el documento que registra la vida profesional del trabajador y garantiza el acceso a los derechos laborales previstos por la ley.  
            Se emite prioritariamente en formato digital (<strong>CTPS Digital</strong>) y excepcionalmente en formato físico para registros antiguos.  
          </p>
          <p>
            La CTPS Digital ha recibido reconocimientos como el <strong>Selo Ouro de Modernización del Estado</strong> y fue ganadora del Concurso de Innovación en el Sector Público 2020.
          </p>
        </div>

        {/* Quién puede utilizar */}
        <div style={{ padding: 20, background: '#f0f0f0', borderRadius: 8, marginBottom: 20 }}>
          <h3>Quién puede utilizar este servicio</h3>
          <p>
            Cualquier persona inscrita en el <strong>Cadastro de Pessoas Físicas (CPF)</strong>.
          </p>
        </div>

        {/* Pasos para obtener la CTPS */}
        <div style={{ padding: 20, background: '#e9e9e9', borderRadius: 8, marginBottom: 20 }}>
          <h3>Pasos para obtener la Carteira de Trabalho Digital</h3>
          <ol>
            <li>Tener tu número de CPF.</li>
            <li>Crear una cuenta autenticada en <a href="https://www.gov.br/pt-br" target="_blank" rel="noreferrer">gov.br</a>.</li>
            <li>Solicitar la CTPS Digital por <strong>aplicativo móvil</strong> (Android o iOS) o por la <strong>web</strong>.</li>
            <li>Seguir los pasos indicados en la plataforma para completar tu registro.</li>
          </ol>
          <p><strong>Tiempo estimado:</strong> Atención inmediata.</p>
        </div>

        {/* Obtener atención */}
        <div style={{ padding: 20, background: '#f0f0f0', borderRadius: 8, marginBottom: 20 }}>
          <h3>Obtener atención y contacto</h3>
          <p>
            Para atención por medio de formulario del Ministerio del Trabajo y Empleo:
          </p>
          <ul>
            <li>Web: <a href="https://www.gov.br/trabalho-e-emprego/pt-br/canais_atendimento/formulario-de-contato" target="_blank" rel="noreferrer">Formulario de contacto</a></li>
          </ul>
          <p><strong>Tiempo estimado:</strong> No determinado.</p>
        </div>

        {/* Enlace oficial */}
        <div style={{ marginTop: 20, textAlign: 'center' }}>
          <p>
            Para más información oficial: <a href="https://www.gov.br/pt-br/servicos/obter-a-carteira-de-trabalho" target="_blank" rel="noreferrer">Obtener Carteira de Trabalho</a>
          </p>
        </div>
      </div>
    </section>
  );
}
