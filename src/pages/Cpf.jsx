import React from 'react';

export default function Cpf() {
  return (
    <section id="cpf" className="section bg-white">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="section-title">CPF para extranjeros</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Guía práctica sobre qué es, cuándo y cómo obtener el CPF para extranjeros en Brasil.
          </p>
        </div>

        <div style={{ padding: 20, background: '#fff', borderRadius: 8 }}>
          <p>
            El <strong>Cadastro de Pessoa Física (CPF)</strong> es un documento esencial para cualquier persona que desee mantener relaciones económicas, financieras o jurídicas en Brasil. 
            Esto no se limita solo a brasileños: los extranjeros también pueden obtener su CPF.
          </p>

          <h3 style={{ marginTop: 24, marginBottom: 12 }}>¿Por qué un extranjero necesita un CPF?</h3>
          <p>
            Aunque el CPF es un registro fiscal de los brasileños, también es importante para extranjeros que tengan vínculos jurídicos, financieros o patrimoniales en Brasil. 
            Situaciones comunes que requieren CPF incluyen:
          </p>
          <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
            <li>Abrir cuenta bancaria en Brasil</li>
            <li>Comprar o vender inmuebles</li>
            <li>Participar en inventario o herencia</li>
            <li>Declarar impuestos en Brasil</li>
            <li>Invertir en bolsa o activos financieros</li>
            <li>Firmar contratos o participar en negocios jurídicos</li>
            <li>Solicitar residencia temporal o permanente</li>
          </ul>

          <h3 style={{ marginTop: 24, marginBottom: 12 }}>Función del CPF</h3>
          <p>
            El CPF identifica al contribuyente ante la Receita Federal, permitiendo control fiscal, declaraciones de impuestos, apertura de cuentas, operaciones bancarias, emisión de facturas y participación en negocios legales en Brasil.
          </p>

          <h3 style={{ marginTop: 24, marginBottom: 12 }}>Cuándo un extranjero puede obtener el CPF</h3>
          <p>
            Cualquier extranjero que tenga interés fiscal o patrimonial en Brasil puede solicitar el CPF. Situaciones comunes:
          </p>
          <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
            <li>Adquisición de bienes muebles o inmuebles</li>
            <li>Apertura de cuentas bancarias</li>
            <li>Ingreso a universidades o programas de intercambio</li>
            <li>Participación en procesos de naturalización</li>
            <li>Representación en procesos judiciales o administrativos</li>
            <li>Recibir herencia o donaciones</li>
            <li>Realización de inversiones o negocios comerciales</li>
          </ul>
          <p>No hay edad mínima: menores y recién nacidos también pueden ser inscritos mediante representante legal.</p>

          <h3 style={{ marginTop: 24, marginBottom: 12 }}>¿Es necesario ir a Brasil para obtener el CPF?</h3>
          <p>
            No es obligatorio: la inscripción puede hacerse en los <strong>Consulados Brasileños</strong> en el exterior. Algunos trámites incluso pueden realizarse online, según la disponibilidad del sistema de la Receita Federal y el consulado. Más información oficial: <a href="https://www.gov.br/pt-br/servicos/inscrever-no-cpf" target="_blank" rel="noopener noreferrer">sitio de la Receita Federal</a>.
          </p>

          <h3 style={{ marginTop: 24, marginBottom: 12 }}>Cómo solicitar el CPF</h3>
          <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
            <li>Completar el formulario de inscripción en el sitio de la Receita Federal o en el consulado.</li>
            <li>Presentar documentos requeridos (pasaporte, documento de identidad extranjero, etc.).</li>
            <li>Pagar la tasa consular si corresponde (algunas emisiones en el exterior son gratuitas).</li>
            <li>Recibir el número de CPF por correo electrónico o físicamente según el consulado.</li>
          </ul>
          <p>En Brasil, la solicitud puede hacerse presencialmente en unidades de Correios, Banco do Brasil o Caixa Econômica Federal.</p>

          <h3 style={{ marginTop: 24, marginBottom: 12 }}>Documentos requeridos</h3>
          <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
            <li>Pasaporte válido</li>
            <li>Documento de identidad extranjero (si lo posee)</li>
            <li>Certificado de nacimiento o matrimonio, según corresponda</li>
            <li>Formulario de inscripción al CPF completado</li>
            <li>Comprobante de dirección en el exterior o en Brasil</li>
            <li>Procura (si la solicitud es realizada por representante legal)</li>
            <li>En algunas situaciones se pueden solicitar documentos adicionales, como declaración de motivos o prueba de relación fiscal con Brasil</li>
          </ul>

          <h3 style={{ marginTop: 24, marginBottom: 12 }}>Tiempo de emisión</h3>
          <p>
            En Brasil, el CPF se libera generalmente en <strong>24 horas</strong> tras la solicitud presencial.  
            En el exterior, el plazo varía entre <strong>5 y 15 días hábiles</strong>, según el consulado.
          </p>

          <h3 style={{ marginTop: 24, marginBottom: 12 }}>Cómo solicitar la 2ª vía</h3>
          <p>
            El extranjero puede acceder al sitio de la Receita Federal para emitir gratuitamente el comprobante de inscripción usando el número del CPF y la fecha de nacimiento.  
            Si no tiene el número, debe acudir al consulado o a una unidad de la Receita Federal para solicitar la reemisión.
          </p>
        </div>
      </div>
    </section>
  );
}
