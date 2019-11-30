import { FC } from 'react'
import Layout from '../components/layout'

const AuditoryRSC: FC = () => {
  return (
    <Layout title="Capitaliza - Servicios de auditoría">
      <section className="obligations__wrapper prevention-consult">
        <h1>Servicios de auditoría</h1>
        <div>
          <article>
            <ol>
              <li>RSC</li>
              <li>SGE21</li>
            </ol>
            <div style={{ width: '35%', minWidth: '270px' }}>
              <img
                style={{ width: '100%' }}
                src="/bug-fixing.png"
                alt="Audit"
              />
            </div>
            <p>
              Auditoría es el análisis detallado de la estructura de una
              empresa, en cuanto a los planes y objetivos, métodos y controles,
              su forma de operación y sus equipos humanos y físicos, con el
              objetivo de determinar en qué medida la organización está
              cumpliendo los objetivos establecidos e identificar aquellos que
              es necesario mejorar. Por tanto, en un proceso en una “auditoría”
              damos respuesta a las cuestiones siguientes:
            </p>
            <br />
            <p>
              ¿La estructura y funcionamiento de nuestra empresa están
              orientados hacia una gestión socialmente responsable? ¿Qué medidas
              correctoras tenemos que adoptar para reconducir nuestra política
              empresarial hacia la Responsabilidad Social? ¿Nuestro Sistema de
              Gestión Ética está cumpliendo los objetivos para los cuales se ha
              implantado?
            </p>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default AuditoryRSC
