import React from 'react';

const servicios = [
  {
    id: 1,
    nombre: 'Asesoría Contable',
    descripcion: 'Servicios de contabilidad y gestión financiera para emprendedores.',
    foto: 'https://via.placeholder.com/200', // Reemplaza con URL real
    contacto: '+55 71 99999-9999',
    ubicacion: 'Salvador - BA',
  },
  {
    id: 2,
    nombre: 'Marketing Digital',
    descripcion: 'Estrategias de marketing online y redes sociales para pequeñas empresas.',
    foto: 'https://via.placeholder.com/200',
    contacto: '+55 71 98888-8888',
    ubicacion: 'Salvador - BA',
  },
  {
    id: 3,
    nombre: 'Desarrollo Web',
    descripcion: 'Creación de páginas web y tiendas online personalizadas.',
    foto: 'https://via.placeholder.com/200',
    contacto: '+55 71 97777-7777',
    ubicacion: 'Salvador - BA',
  },
  {
    id: 4,
    nombre: 'Consultoría Legal',
    descripcion: 'Asesoría jurídica para emprendedores y registro de empresas.',
    foto: 'https://via.placeholder.com/200',
    contacto: '+55 71 96666-6666',
    ubicacion: 'Salvador - BA',
  },
  {
    id: 5,
    nombre: 'Consultoría Legal',
    descripcion: 'Asesoría jurídica para emprendedores y registro de empresas.',
    foto: 'https://via.placeholder.com/200',
    contacto: '+55 71 96666-6666',
    ubicacion: 'Salvador - BA',
  },
  {
    id: 6,
    nombre: 'Consultoría Legal',
    descripcion: 'Asesoría jurídica para emprendedores y registro de empresas.',
    foto: 'https://via.placeholder.com/200',
    contacto: '+55 71 96666-6666',
    ubicacion: 'Salvador - BA',
  },
  {
    id: 7,
    nombre: 'Consultoría Legal',
    descripcion: 'Asesoría jurídica para emprendedores y registro de empresas.',
    foto: 'https://via.placeholder.com/200',
    contacto: '+55 71 96666-6666',
    ubicacion: 'Salvador - BA',
  },
  {
    id: 8,
    nombre: 'Consultoría Legal',
    descripcion: 'Asesoría jurídica para emprendedores y registro de empresas.',
    foto: 'https://via.placeholder.com/200',
    contacto: '+55 71 96666-6666',
    ubicacion: 'Salvador - BA',
  },
];

export default function Emprendedores() {
  return (
    <section id="emprendedores" className="section bg-white">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="section-title">Emprendedores</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Servicios de Emprendedores Venezolanos en Bahía.</p>
          <p className="section-subtitle">
            Descubre servicios ofrecidos por venezolanos/as viviendo en Bahía, comida típica, clases, asesorías y más.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginTop: '20px',
          }}
        >
          {servicios.map((servicio) => (
            <div
              key={servicio.id}
              style={{
                background: '#f9f9f9',
                borderRadius: '8px',
                padding: '15px',
                textAlign: 'center',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              }}
            >
              <img
                src={servicio.foto}
                alt={servicio.nombre}
                style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
              />
              <h3 style={{ margin: '10px 0' }}>{servicio.nombre}</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '10px' }}>{servicio.descripcion}</p>
              <p style={{ fontSize: '0.85rem', marginBottom: '5px' }}>
                <strong>Contacto:</strong> {servicio.contacto}
              </p>
              <p style={{ fontSize: '0.85rem' }}>
                <strong>Ubicación:</strong> {servicio.ubicacion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
