import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ROUTES } from './routes/router.jsx';
import './App.css';

// --- DATOS MOCKUP ---
const INFO_CARDS = [
  { id: 1, title: 'Papeles al día', icon: '📄', text: 'Guía paso a paso para tu residencia (RNM), CPF y refugio. ¡Legalízate rápido y fácil!' },
  { id: 2, title: 'Salud Gratuita', icon: '🏥', text: 'Aprende a usar el SUS. Tu salud es prioridad y aquí en Brasil la atención es pública.' },
  { id: 3, title: 'Chamba / Trabajo', icon: '💼', text: 'Cómo adaptar tu currículum al portugués y dónde buscar empleo en Salvador.' },
  { id: 4, title: 'Vivienda', icon: '🏠', text: 'Los mejores barrios para vivir bueno, bonito y barato. Consejos para alquilar.' },
];

const TESTIMONIOS = [
  { id: 1, name: 'Andrea González', origin: 'Caracas ➡️ Salvador', text: 'Al principio tenía miedo por el idioma, pero la gente de Bahía es tan cálida como nosotros. Esta página me ayudó a entender los trámites.' },
  { id: 2, name: 'José "El Chamo" Pérez', origin: 'Maracaibo ➡️ Salvador', text: 'Conseguí trabajo gracias a los tips de currículum. ¡Salvador tiene una energía brutal, me siento en casa!' },
  { id: 3, name: 'Valentina Méndez', origin: 'Barquisimeto ➡️ Salvador', text: 'La guía del SUS es fundamental. Pude vacunar a mis chamos sin problemas. Gracias por unir a la comunidad.' },
];

const IMAGENES_CARRUSEL = [
  'https://cdn.prod.rexby.com/image/cc1f49b0455844ea8d652f8673c75119?format=webp&width=1080&height=1350', // Farol da Barra
  'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?q=80&w=1200&auto=format&fit=crop', // Pelourinho
  'https://images.unsplash.com/photo-1569288063643-5d29ad64df09?q=80&w=1200&auto=format&fit=crop'  // Elevador Lacerda
];

// --- COMPONENTES UI ---

// Header: actualizo algunos links para usar react-router (Link)
function Header() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  // cierra el menú móvil al navegar
  useEffect(() => setOpen(false), [location.pathname]);

  const toggleDropdown = (key) => {
    setOpenDropdown(prev => (prev === key ? null : key));
  };

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
           VenBa <span className="logo-accent">| Bahía</span>
        </div>

        {/* Botón hamburguesa visible en móvil */}
        <button
          className="mobile-toggle"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          {open ? '✕' : '☰'}
        </button>

        <nav className={`nav ${open ? 'open' : ''}`}>
          <a href="/#inicio">Inicio</a>

          <div className={`dropdown ${openDropdown === 'legal' ? 'open' : ''}`}>
            <button className="dropbtn" type="button" onClick={() => toggleDropdown('legal')}>Legalización ▾</button>
            <div className="dropdown-content">
              <Link to="/cpf">CPF</Link>
              <Link to="/residencia">Residencia / Refugio</Link>
              <Link to="/documento-migratorio">Documento Migratorio (RNM.)</Link>
              <Link to="/carteira">Carteira de Trabalho</Link>
              <Link to="/naturalizacion">Naturalización</Link>
              <Link to="/pasaporte">Pasaporte Venezolano</Link>
              <Link to="/traduccion">Traducción de Documentos</Link>
            </div>
          </div>

          <div className={`dropdown ${openDropdown === 'educ' ? 'open' : ''}`}>
            <button className="dropbtn" type="button" onClick={() => toggleDropdown('educ')}>Educación ▾</button>
            <div className="dropdown-content">
              <Link to="/revalida">Revalida título universitario</Link>
              <Link to="/bachillerato">Bachillerato</Link>
              <Link to="/celpe-bras">Celpe-Bras</Link>
              <Link to="/encceja">Encceja</Link>
              <Link to="/enem">ENEM</Link>
              <Link to="/portugues">Curso de Português</Link>

            </div>
          </div>

          <div className={`dropdown ${openDropdown === 'vivir' ? 'open' : ''}`}>
            <button className="dropbtn" type="button" onClick={() => toggleDropdown('vivir')}>Vivir Aquí ▾</button>
            <div className="dropdown-content">
              <Link to="/empleo">Empleo</Link>
              <Link to="/salud">Salud (SUS)</Link>
              <Link to="/vivienda">Vivienda</Link>
              <Link to="/escuelas">Escuelas</Link>
            </div>
          </div>

          <div className={`dropdown ${openDropdown === 'vida' ? 'open' : ''}`}>
            <button className="dropbtn" type="button" onClick={() => toggleDropdown('vida')}>Vida Social ▾</button>
            <div className="dropdown-content">
              <Link to="/eventos">Eventos</Link>
              <Link to="/deportes">Deportes</Link>
              <Link to="/emprendedores">Emprendedores</Link>
            </div>
          </div>

          <a href="/#contacto" className="btn-nav">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

const Hero = () => (
  <section id="inicio" className="hero">
    <div className="hero-overlay">
      <div className="container hero-text">
        <span className="hero-tag">Comunidad Oficial</span>
        <h1>De Venezuela para<br/><span>Bahía -  Brasil</span></h1>
        <p>
          Si llegaste buscando un mejor futuro, llegaste al lugar correcto. 
          Unimos la fuerza venezolana con la alegría bahiana. 
          Aquí encontrarás apoyo, guías y paisanos.
        </p>
        <div className="hero-buttons">
          <a href="#informacion" className="btn btn-primary">Ver Guía de Trámites</a>
          <a href="#comunidad" className="btn btn-secondary">Leer Historias</a>
        </div>
      </div>
    </div>
  </section>
);

const InfoSection = () => {
  // Creamos una referencia para controlar el contenedor del carrusel
  const carouselRef = useRef(null);

  // Función para mover el carrusel a la izquierda
  const scrollLeft = () => {
    if (carouselRef.current) {
      // Desplaza el ancho de una tarjeta aprox (320px) hacia atrás
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  // Función para mover el carrusel a la derecha
  const scrollRight = () => {
    if (carouselRef.current) {
      // Desplaza el ancho de una tarjeta aprox (320px) hacia adelante
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  
};
const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c === IMAGENES_CARRUSEL.length - 1 ? 0 : c + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);
};

// --- DATOS DE LA GALERÍA ---
const GALERIA_IMAGENES = [
  { 
    id: 1, 
    src: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/159000/159367-Salvador-And-Vicinity.jpg', 
    title: 'Pelourinho', 
    desc: 'El corazón histórico',
    className: 'grid-col-span-2 grid-row-span-2' // Foto Grande Principal
  },
  { 
    id: 2, 
    src: 'https://www.costacruceros.com/content/dam/costa/costa-magazine/article-images/what-to-see-in-salvador-de-bahia/salvador-de-bahia-elevador-lacerda_Marcio%20Jose%20Bastos%20Silva-Shutterstock.jpg.image.694.390.low.jpg', 
    title: 'Elevador Lacerda', 
    desc: 'Conectando la ciudad',
    className: 'grid-col-span-1' // Foto Normal
  },
  { 
    id: 3, 
    src: 'https://cdn.prod.rexby.com/image/cc1f49b0455844ea8d652f8673c75119?format=webp&width=1080&height=1350', 
    title: 'Farol da Barra', 
    desc: 'Atardeceres mágicos',
    className: 'grid-row-span-2' // Foto Alta (Vertical)
  },
  { 
    id: 4, 
    src: 'https://www.farejaviagens.com.br/wp-content/uploads/2024/12/VIsta-a%CC%81erea-de-Salvador-na-Bahia.jpg', 
    title: 'Playas', 
    desc: 'Aguas cálidas todo el año',
    className: 'grid-col-span-1' // Foto Normal
  },
];

const GallerySection = () => {
  return (
    <section className="section bg-light">
      <div className="container">
        
        {/* Encabezado */}
        <div className="title-wrapper">
          <h2 className="section-title">Nuestra nueva casa</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Bahía: Una mezcla única de historia, playas y oportunidades.</p>
        </div>

        {/* Mosaico de Imágenes */}
        <div className="gallery-grid">
          {GALERIA_IMAGENES.map((item) => (
            <div key={item.id} className={`gallery-item ${item.className || ''}`}>
              <img src={item.src} alt={item.title} loading="lazy" />
              <div className="gallery-overlay">
                <div className="gallery-text">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const Testimonials = () => (
  <section id="comunidad" className="section bg-white">
    <div className="container">
      <div className="title-wrapper">
        <h2 className="section-title">Voces Venezolanas</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">Historias reales de paisanos que ya están construyendo su camino.</p>
      </div>

      {/* Usamos un contenedor Flex centrado en lugar de Grid */}
      <div className="testimonials-flex">
        {TESTIMONIOS.map((t) => {
          // Extraemos la primera letra del nombre para el avatar
          const initial = t.name.charAt(0);
          
          return (
            <div key={t.id} className="testimonial-card">
              {/* Decoración de comillas */}
              <div className="quote-icon">“</div>
              
              <p className="testimonial-text">{t.text}</p>
              
              <div className="testimonial-footer">
                <div className="avatar-circle">
                  {initial}
                </div>
                <div className="testimonial-info">
                  <h4>{t.name}</h4>
                  <span className="origin-badge">
                    📍 {t.origin}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mdakvjqq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSent(true);
        e.target.reset();
      }
    } catch (error) {
      console.error("Error enviando formulario", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="section bg-light">
      <div className="container">
        <div className="contact-container">
          <div className="contact-info">
            <h2>¿Tienes dudas?</h2>
            <p>
              Estamos aquí para echarnos una mano entre todos. Escríbenos si necesitas
              orientación específica o quieres sumarte al grupo de WhatsApp.
            </p>
            <ul className="contact-list">
              <li>📧 contacto@venba-salvador.com</li>
              <li>📱 +55 (71) 99999-9999</li>
              <li>📍 Salvador, Bahía</li>
            </ul>
          </div>

          {sent ? (
            <div className="contact-form card-info">
              <p style={{ color: "green", fontWeight: "bold", fontSize: "18px" }}>
                Mensaje enviado correctamente.  
                <br />
                Te responderemos pronto.
              </p>
            </div>
          ) : (
            <form className="contact-form card-info" onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  className="full-width"
                  style={{ padding: "12px", borderRadius: "8px" }}
                  placeholder="Tu nombre completo"
                  required
                />
              </div>

              <div className="form-group" style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="full-width"
                  style={{ padding: "12px", borderRadius: "8px" }}
                  placeholder="tucorreo@ejemplo.com"
                  required
                />
              </div>

              <div className="form-group" style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
                  Mensaje
                </label>
                <textarea
                  name="message"
                  rows="4"
                  className="full-width"
                  style={{ padding: "12px", borderRadius: "8px" }}
                  placeholder="Cuéntanos, ¿cómo podemos ayudarte?"
                  required
                ></textarea>
              </div>

              {/* Anti-spam */}
              <input type="text" name="_gotcha" style={{ display: "none" }} />

              <button type="submit" className="btn btn-primary full-width" disabled={loading}>
                {loading ? "Enviando..." : "Enviar Mensaje"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

function Footer() {
  const [pixOpen, setPixOpen] = useState(false);
  const pixKey = 'tu-clave-pix@ejemplo.com'; // <- cambia por tu clave PIX (email, CPF o teléfono)
  const pixQrSrc = '/pix-qr.png'; // coloca la imagen QR en public/pix-qr.png

  const copyPix = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      alert('Clave PIX copiada al portapapeles');
    } catch (err) {
      console.error('No se pudo copiar', err);
    }
  };

  return (
    <>
      <footer className="footer-modern">
        <div className="footer-tricolor-line"></div>

        <div className="container footer-grid">
          <div className="footer-col brand-col">
            <h3 className="footer-logo">VenBa <span className="logo-accent">Bahía</span></h3>
            <p className="footer-desc">Somos el punto de encuentro digital para la comunidad venezolana en Bahía.</p>
            <div className="social-icons">
              <a
                href="https://instagram.com/tu_usuario_instagram"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="icon-link"
                title="Instagram"
              >
                {/* Instagram SVG */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
              </a>

              <a
                href="https://facebook.com/tu_pagina_facebook"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="icon-link"
                title="Facebook"
              >
                {/* Facebook SVG */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
              </a>

              <a
                href="https://wa.me/5571999999999?text=Hola%20VenBa%20Salvador%2C%20tengo%20una%20consulta"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="icon-link"
                title="WhatsApp"
              >
                {/* WhatsApp SVG */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      <path d="M16.5 13.5c-.5-.2-1.1-.3-1.6-.1-.5.2-.9.6-1.2.9s-.8.5-1.3.2c-.5-.3-1.2-.9-1.9-1.7-.7-.8-1.3-1.9-1.4-2.4-.1-.6.1-1.1.4-1.5.4-.4.7-.5 1.1-.8.4-.3.6-.4.9-.1.3.2.9.7 1.3 1 .4.3.7.3 1 .2.3-.1.8-.3 1.2-.4.4-.1.8-.1 1.1.1.3.2.8.6 1 1 .2.4.2.9.1 1.4-.1.5-.5 1.2-.9 1.5z"></path>
    </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Explora</h4>
            <ul className="footer-links">
              <li><a href="/#inicio">Inicio</a></li>
              <li><a href="/#legalizacion">Legalización</a></li>
              <li><a href="/#educacion">Educación</a></li>
              <li><a href="/#viviraqui">Vivir aquí</a></li>
              <li><a href="/#vidasocial">Vida Social</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Ayuda Oficial</h4>
            <ul className="footer-links">
              <li><a href="https://arquidiocesesalvador.org.br/tag/pastoral-do-migrante/" target="_blank" rel="noreferrer">Pastoral do migrante </a></li>
              <li><a href="https://www.gov.br/pf/pt-br" target="_blank" rel="noreferrer">Policía Federal 🇧🇷</a></li>
              <li><a href="https://www.acnur.org/brasil" target="_blank" rel="noreferrer">ACNUR Brasil 🇺🇳</a></li>
              <li><a href="https://www.caritas.org.br/" target="_blank" rel="noreferrer">Cáritas Brasileira</a></li>
            </ul>
          </div>

          <div className="footer-col newsletter-col">
            <h4>Contribuye</h4>
            <p>Ayuda con mantenimiento y costos. Contribuciones pequeñas mantienen el proyecto vivo.</p>
            <button
              className="btn btn-secondary full-width"
              onClick={() => setPixOpen(true)}
              style={{ marginTop: 8 }}
            >
              Contribuir con PIX
            </button>

          </div>
        </div>

        <div className="footer-bottom">
          <div className="container bottom-content">
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
              <p>&copy; {new Date().getFullYear()} VenBa Salvador. Hecho con 💛💙❤️</p>
              <span className="separator" style={{ opacity: 0.5 }}>|</span>
              <p className="dev-credit">Desarrollado por <a href="https://www.linkedin.com/in/victorleafar/" target="_blank" rel="noreferrer" style={{ color: 'var(--ven-yellow)', fontWeight: 'bold' }}>Victor Martínez</a></p>
            </div>

            <div className="legal-links">
              <a href="#">Privacidad</a>
              <span className="separator">•</span>
              <a href="#">Términos</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal PIX */}
      {pixOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000
          }}
          onClick={() => setPixOpen(false)}
        >
          <div
            style={{
              width: 320,
              maxWidth: '90%',
              background: 'var(--bg-white)',
              borderRadius: 12,
              padding: 18,
              boxShadow: '0 12px 40px rgba(0,0,0,0.25)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ marginBottom: 8 }}>Contribuir con PIX</h3>
            <p style={{ marginTop: 0, color: 'var(--text-light)', fontSize: 14 }}>Escanea el QR o copia la clave.</p>

            <div style={{ textAlign: 'center', margin: '12px 0' }}>
              <img src={pixQrSrc} alt="PIX QR" style={{ width: 200, height: 200, objectFit: 'contain' }} />
            </div>

            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              {/* allow input to shrink on small widths with minWidth:0 */}
              <input readOnly value={pixKey} style={{ flex: 1, minWidth: 0, padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
              {/* prevent button from growing and reduce padding so it fits */}
              <button
                className="btn btn-primary"
                onClick={copyPix}
                style={{ flex: '0 0 auto', padding: '8px 10px', whiteSpace: 'nowrap' }}
              >
                Copiar
              </button>
            </div>

            <button onClick={() => setPixOpen(false)} className="btn" style={{ marginTop: 12, width: '100%' }}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
}

// HomePage atualizado: não renderiza mais as secciones placeholders duplicadas
const HomePage = () => (
  <>
    <Hero />
    <InfoSection />
    <GallerySection />
    <Testimonials />
    <ContactForm />
    {/* Não renderizar PlaceholderSections aqui para evitar duplicação com as rotas */}
  </>
);

// Componente que fuerza scroll al top en cada cambio de ruta / maneja hashes
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (hash) {
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50); // pequeño delay para esperar render
    return () => clearTimeout(timer);
  }, [pathname, hash]);
  return null;
};

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* Mapeo de rutas */}
            {ROUTES.map(r => {
              const Page = r.component;
              return <Route key={r.path} path={r.path} element={<Page />} />;
            })}

            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;