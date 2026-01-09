import React from 'react';

const servicios = [
  {
    id: 1,
    nombre: 'Victor Martinez',
    descripcion: 'Servicios de desarrollo web.',
    foto: 'https://scontent.fscl19-1.fna.fbcdn.net/v/t39.30808-6/498152336_24566000572989131_6192973097166490137_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGQrxmdLbWGmAhRyHputtgDZSwCzSvG8t9lLALNK8by33cJBbJetwAjd_pdY5BrVGCRpVvpvKpgY2mEwIqHFoyv&_nc_ohc=JnNNiqqI9ukQ7kNvwF2I2iW&_nc_oc=Adke4fuqRhTkexKokvt-5KrQkskp0_ZhfGT3L4JhtTI8scIDXszMUKRy6pkTeMaunB4&_nc_zt=23&_nc_ht=scontent.fscl19-1.fna&_nc_gid=3NBrZVbeFmvDtsVBhHTZ5Q&oh=00_AfqODaM9beIyPH9RYz9qmuWGGlwVR6rxkm57Ve7TKPCzPw&oe=69670D7D', // Reemplaza con URL real
    contacto: '+55 71 983242706',
    ubicacion: 'Salvador - BA y Actuación Remota',
  },
  {
    id: 2,
    nombre: 'Deliana Maria Mast Rodríguez',
    descripcion: 'Graduada en Tecnologías de Alimentos y cantante.',
    foto: 'https://st2.depositphotos.com/2703645/7676/v/950/depositphotos_76762419-stock-illustration-avatar-icon-singer-woman.jpg',
    contacto: '+55 75 992175370, delianamast@gmail.com',
    ubicacion: 'Seabra, Centro. Rua Manoel Teixeira Leite ',
  },
  {
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
              <div style={{ width: '200px', height: '200px', margin: '0 auto', background: '#fff', borderRadius: '50%', padding: 0, overflow: 'hidden' }}>
                <img
                  src={servicio.foto}
                  alt={servicio.nombre}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
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
