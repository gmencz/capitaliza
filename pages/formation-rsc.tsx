import { FC } from 'react'
import Layout from '../components/layout'

const FormationRSC: FC = () => {
  return (
    <Layout title="Capitaliza - Formación RSC">
      <section className="obligations__wrapper prevention-consult">
        <h1>Formación RSC</h1>
        <div>
          <article>
            <p>
              Organización e impartición de formación orientada al cliente e
              integrada en las necesidades estratégicas de la empresa, mediante
              la elaboración de programas a medida.
            </p>
            <br />
            <p>Nuestra oferta de servicio integral incluye:</p>
            <br />
            <ol>
              <li>Detección de necesidades.</li>
              <li>
                Diseño de la acción formativa: selección y adaptación pedagógica
                de contenidos al nivel de las personas destinatarias.
              </li>
              <li>
                Ejecución del programa: “in company”, en aulas de formación
                externas o programas de inmersión.
              </li>
              <li>
                Evaluación final y de impacto: seguimiento de los resultados.
              </li>
              <li>Detección y gestión de ayudas en materia de formación.</li>
            </ol>
            <div style={{ width: '35%', minWidth: '270px' }}>
              <img
                style={{ width: '100%' }}
                src="/formation-rsc.png"
                alt="Formation RSC"
              />
            </div>
            <p>
              El ámbito de la formación continua, para actualización y
              desarrollo de nuevas competencias profesionales, está
              adecuadamente regulada y desarrollada en España. Hoy en día existe
              un amplio catálogo de acciones formativas dirigidas a personas
              trabajadoras en activo, a nivel sectorial y multisectorial, de
              carácter específico y transversal, así como un gran número de
              entidades dedicadas a la organización e impartición de dichas
              acciones.
            </p>
            <br />
            <p>
              Sin embargo, existe todavía una carencia importante de acciones de
              formación (tanto específica como transversal) orientada
              exclusivamente al colectivo de personas que ocupan la Dirección de
              las empresas o los puestos de mando intermedio. Éste es
              precisamente nuestro público destinatario y nuestra diferenciación
              en el mercado.
            </p>
            <br />
            <p>
              Nuestro objetivo es dotar de nuevas competencias profesionales,
              tanto específicas como transversales, a mandos intermedios y
              personal directivo de empresas, a través de un tipo de formación
              diseñada a medida (tanto en contenido como en modalidad de
              impartición) y que redunde en beneficio de la organización
              (manteniéndola en un alto nivel de competitividad en el mercado)
            </p>
            <p style={{ marginTop: '2rem' }}>Entidad colaboradora de:</p>
            <br />
            <div style={{ width: '35%', minWidth: '270px' }}>
              <img src="/fundacion.svg" style={{ width: '100%' }} alt="" />
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default FormationRSC
