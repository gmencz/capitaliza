import { FC } from 'react'
import Layout from '../components/layout'

const ConsultoryRSC: FC = () => {
  return (
    <Layout title="Capitaliza - Servicios de consultoría">
      <section className="obligations__wrapper prevention-consult">
        <h1>Servicios de consultoría</h1>
        <div>
          <article>
            <ol>
              <li>Consultoría Estratégica RSC</li>
              <li>SGE21</li>
              <li>Códigos Éticos</li>
              <li>Memorias de Sostenibilidad</li>
              <li>Planes de Igualdad</li>
              <li>Programas Sociales y/o de colaboración con ONG'S</li>
            </ol>
            <div style={{ width: '35%', minWidth: '270px' }}>
              <img
                style={{ width: '100%' }}
                src="/consultory-draw.png"
                alt="Consultory RSC"
              />
            </div>
            <p style={{ fontWeight: 'bold' }}>
              En la comunicación al Parlamento Europeo, al Consejo y al Comité
              Económico y Social Europeo, de 22 de marzo de 2006, la Comisión
              Europea advertía que “Europa precisa de{' '}
              <span className="bold">
                empresas que hagan aquello que hacen mejor:
              </span>{' '}
              suministrar productos y servicios que den valor añadido a la
              sociedad y desplegar el espíritu empresarial y la creatividad para
              crear valor y empleo. Pero no necesita empresas sin más, sino
              <span className="bold">empresas socialmente responsables</span>,
              que asuman su cuota de responsabilidad en la marcha de los asuntos
              europeos”.
            </p>
            <br />
            <br />
            <p>
              Asumir los principios de la RSC no significa únicamente estar de
              acuerdo con los mismos, sino que empresas y organizaciones deben
              llevar dichos principios a la práctica, mediante la
              adaptación/reorientación de sus políticas y a través de la
              introducción de medidas que posibilitan una gestión socialmente
              responsable eficaz y rentable.
            </p>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default ConsultoryRSC
