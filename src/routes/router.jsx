import React from 'react';
import Cpf from '../pages/Cpf';
import Residencia from '../pages/Residencia';
import DocumentoMigratorio from '../pages/DocumentoMigratorio';

import Naturalizacion from '../pages/Naturalizacion';
import Pasaporte from '../pages/Pasaporte';
import Carteira from '../pages/carteira';
import Revalida from '../pages/Revalida';
import Bachillerato from '../pages/Bachillerato';
import CelpeBras from '../pages/CelpeBras';
import Encceja from '../pages/encceja';
import Enem from '../pages/Enem';
import Empleo from '../pages/Empleo';
import Salud from '../pages/Salud';
import Vivienda from '../pages/Vivienda';
import Escuelas from '../pages/Escuelas';
import Eventos from '../pages/Eventos';
import Deportes from '../pages/Deportes';
import Emprendedores from '../pages/Emprendedores';
import Portugues from '../pages/portugues';
import Traduccion from '../pages/traduccion';

export const ROUTES = [
  { path: '/cpf', id: 'cpf', title: 'CPF', text: 'Información sobre cómo sacar el CPF en Brasil.', component: Cpf },
  { path: '/residencia', id: 'residencia', title: 'Residencia / Refugio', text: 'Guía para residencia y procesos de refugio.', component: Residencia },
  { path: '/documento-migratorio', id: 'documento-migratorio', title: 'Documento Migratorio (RNM)', text: 'Información sobre RNM.', component: DocumentoMigratorio },
  { path: '/naturalizacion', id: 'naturalizacion', title: 'Naturalización', text: 'Pasos para iniciar la naturalización.', component: Naturalizacion },
  { path: '/pasaporte', id: 'pasaporte', title: 'Pasaporte Venezolano', text: 'Trámites y renovación de pasaporte.', component: Pasaporte },
  { path: '/carteira', id: 'carteira-trabalho', title: 'Carteira de Trabalho', text: 'Cómo obtener la Carteira de Trabalho en Brasil.', component: Carteira },
  { path: '/revalida', id: 'revalida', title: 'Revalida de Título', text: 'Cómo revalidar tu título universitario en Brasil.', component: Revalida },
  { path: '/bachillerato', id: 'bachillerato', title: 'Validar Bachillerato', text: 'Información para validar estudios de secundaria.', component: Bachillerato },
  { path: '/celpe-bras', id: 'celpe-bras', title: 'Celpe-Bras', text: 'Preparación y registro para el examen de portugués.', component: CelpeBras },
  { path: '/portugues', id: 'portugues', title: 'Curso de Portugués', text: 'Recursos y cursos para aprender portugués.', component: Portugues },
  { path: '/encceja', id: 'encceja', title: 'ENCCEJA', text: 'Guía para el examen de ENCCEJA.', component: Encceja },
  { path: '/enem', id: 'enem', title: 'ENEM / Universidad', text: 'Cómo usar ENEM para entrar a la universidad.', component: Enem },
  { path: '/empleo', id: 'empleo', title: 'Empleo y CV', text: 'Consejos para buscar empleo y adaptar tu CV.', component: Empleo },
  { path: '/salud', id: 'salud', title: 'Salud (SUS)', text: 'Cómo acceder al SUS en Salvador.', component: Salud },
  { path: '/vivienda', id: 'vivienda', title: 'Vivienda', text: 'Consejos para alquilar y barrios recomendados.', component: Vivienda },
  { path: '/escuelas', id: 'escuelas', title: 'Escuelas para niños', text: 'Opciones educativas y matriculación.', component: Escuelas },
  { path: '/eventos', id: 'eventos', title: 'Agenda de Eventos', text: 'Próximos eventos de la comunidad.', component: Eventos },
  { path: '/deportes', id: 'deportes', title: 'Deportes', text: 'Actividades deportivas y ligas locales.', component: Deportes },
  { path: '/emprendedores', id: 'emprendedores', title: 'Emprendedores', text: 'Recursos y comunidad para emprender.', component: Emprendedores },
  { path: '/traduccion', id: 'traduccion', title: 'Traducción de Documentos', text: 'Guía práctica para la traducción de documentos en Brasil.', component: Traduccion }
];

const PlaceholderPage = ({ title, text, id }) => (
  <section id={id} className="section bg-white">
    <div className="container">
      <div className="title-wrapper">
        <h2 className="section-title">{title}</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">{text}</p>
      </div>
      <div style={{ padding: '12px', background: '#fff', borderRadius: '8px' }}>
        <p>Contenido de ejemplo para la sección <strong>#{id}</strong>. Reemplaza esto con la guía detallada o con un componente real.</p>
      </div>
    </div>
  </section>
);

/**
 * RouteList devuelve un fragmento con <Route/>s que deben colocarse dentro de <Routes> en App.jsx
 */
export const RouteList = () => (
  <>
    {ROUTES.map(r => (
      <Route key={r.path} path={r.path} element={<PlaceholderPage {...r} />} />
    ))}
  </>
);