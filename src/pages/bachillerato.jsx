import React from 'react';

export default function Bachillerato() {
  return (
    <section id="bachillerato" className="section bg-white">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="section-title">Revalidación de Bachillerato</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Guía práctica para revalidar tu título de Bachillerato en Brasil.
          </p>
        </div>

        {/* Información general */}
        <div style={{ padding: 20, background: '#f9f9f9', borderRadius: 8, marginBottom: 20 }}>
          <h3>Información general</h3>
          <p>
            Para revalidar tu título de Bachillerato en Brasil, es necesario que tus notas estén certificadas y apostilladas. 
            Luego deberás acudir a un colegio estadual autorizado para realizar las equivalencias y, si corresponde, presentar exámenes de algunas disciplinas.
          </p>
        </div>

        {/* Pasos del proceso */}
        <div style={{ padding: 20, background: '#e9e9e9', borderRadius: 8, marginBottom: 20 }}>
          <h3>Pasos para revalidar tu Bachillerato</h3>
          <ol>
            <li>Preparar tus notas certificadas y apostilladas.</li>
            <li>Dar entrada en el proceso de revalidación en un colegio estadual autorizado.</li>
            <li>Presentar los exámenes requeridos, que pueden incluir: 
              <ul>
                <li>Portugués</li>
                <li>Historia</li>
                <li>Geografía</li>
                <li>Filosofía</li>
                <li>Sociología</li>
                <li>Literatura</li>
                <li>Otras materias según equivalencias</li>
              </ul>
            </li>
            <li>Esperar los resultados de los exámenes y la aprobación del proceso.</li>
            <li>Obtener los documentos de revalidación emitidos por el colegio estadual.</li>
          </ol>
        </div>

        {/* Ejemplo de colegio */}
        <div style={{ padding: 20, background: '#f0f0f0', borderRadius: 8, marginBottom: 20 }}>
          <h3>Ejemplo de colegio estadual</h3>
          <p>
            Como referencia, algunas personas han realizado este proceso en: <strong>Colégio Estadual Raphael Serravalle</strong> en Salvador, BA.
          </p>
          <p><strong>Dirección:</strong> Rua Guillard Muniz, s/n - Pituba, Salvador - BA, 41205-042, Brazil</p>
          <p><strong>Teléfono:</strong> +55 71 3452-3972</p>
          <p>Este colegio es solo un ejemplo; el proceso puede hacerse en cualquier colegio estadual autorizado en tu localidad.</p>
        </div>

        {/* Nota adicional */}
        <div style={{ marginTop: 20, textAlign: 'center' }}>
          <p>
            Es importante planificar con antelación y asegurarse de tener todos los documentos requeridos correctamente apostillados.
          </p>
        </div>
      </div>
    </section>
  );
}
