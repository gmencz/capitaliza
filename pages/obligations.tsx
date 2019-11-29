import { FC } from 'react'
import Layout from '../components/layout'

const Obligations: FC = (): JSX.Element => {
  return (
    <Layout
      isHomepage={false}
      title="Capitaliza - Sujetos obligados / Obligaciones"
    >
      <section className="obligations__wrapper">
        <h1>Sujetos Obligados / Obligaciones</h1>
        <div>
          <article>
            <h2>Obligaciones</h2>
            <ol>
              <li>
                Diseño del Manual de Procedimientos. Elaboración de la
                documentación del Sistema de Prevención:
              </li>
            </ol>
            <ul>
              <li>
                Procedimiento de identificación y conocimiento del cliente.
                Formulario de recogida de información previo al establecimiento
                de cualquier relación de negocios, con definición y diseño de
                las fichas de cliente.
              </li>
              <li>Definición de la Política de Admisión de Clientes.</li>
              <li>
                Creación de perfiles siguiendo un enfoque basado en el riesgo:
                detección de niveles de riesgo en función de la tipología de
                clientes/sector de actividad.
              </li>
              <li>Órgano de control interno y externo (SEPBLAC).</li>
              <li>
                Procedimiento de comunicación interna de operaciones
                sospechosas.
              </li>
              <li>
                Análisis de operaciones. Comunicación por indicio al SEPBLAC.
              </li>
              <li>Examen especial.</li>
              <li>Colaboración con la Comisión o sus Órganos de apoyo.</li>
              <li>
                Procedimiento de tratamiento de la información, archivo y
                conservación de documentos y registros.
              </li>
              <li>
                Cobertura y diseño de declaraciones de movimientos de medios de
                pago.
              </li>
              <li>Planes de formación.</li>
            </ul>
            <ol start={2}>
              <li>
                Diseño del Órgano de Control Interno: composición, funciones y
                funcionamiento.
              </li>
              <li>
                Nombramiento de representante ante el SEPBLAC y, en su caso,
                autorizado/s.
              </li>
              <li>
                Información y formación para empleados y directivos
                (obligatoria).
              </li>
              <li>
                Depósito y registro de la documentación en el Servicio Ejecutivo
                de la Comisión.
              </li>
            </ol>
          </article>
          <article>
            <h2>Sujetos Obligados</h2>
            <ul>
              <li>Entidades de crédito</li>
              <li>Aseguradoras y brokers de seguros de vida</li>
              <li>Servicios postales</li>
              <li>Entidades de pago</li>
              <li>
                Empresas de servicios de inversión y entidades gestoras de
                fondos de pensiones
              </li>
              <li>
                Entidades de gestión de capital-riesgo y de garantía recíproca
              </li>
              <li>Auditores de cuentas</li>
              <li>Fundaciones y Asociaciones</li>
              <li>Promotores inmobiliarios como agentes de intermediación</li>
              <li>Notarios y registradores de la propiedad</li>
              <li>
                Abogados como gestores de cuentas, fondos, valores y creación de
                sociedades
              </li>
              <li>
                Casinos y responsables de gestión, explotación y
                comercialización de lotería y otros juegos de azar
              </li>
              <li>
                Personas que comercien con joyas, obras de arte y antigüedades
              </li>
              <li>
                Personas que realicen depósito, custodia y transporte de fondos
              </li>
              <li>Personas que comercien por valor mayor de 15.000€</li>
              <li>Personas que realicen cambio de moneda</li>
            </ul>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default Obligations
