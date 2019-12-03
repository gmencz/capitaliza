import { FC } from 'react'
import Layout from '../components/layout'

const PenaltySystem: FC = () => {
  return (
    <Layout title="Capitaliza - Régimen Sancionador">
      <section className="obligations__wrapper penalty">
        <h1>Régimen Sancionador</h1>
        <p>
          Las infracciones administrativas previstas se clasifican en{' '}
          <span className="bold">muy graves, graves y leves</span>, y tienen el
          siguiente régimen sancionador:
        </p>
        <div>
          <article>
            <h2>Infracciones muy graves</h2>
            <ol>
              <li>Amonestación pública</li>
              <li>
                Sanción de 150.000 € hasta 5% del patrimonio neto del sujeto
                obligado, el doble del contenido de la operación o 1.500.000€
              </li>
              <li>Revocación de autorizaciones administrativas para operar</li>
            </ol>
            <p>(La 2 es obligatoria y se simultánea con la 1 ó la 3)</p>
            <br />
            <p>
              Se podrá imponer también sanción al administrador o dirección si
              fuese responsable de la infracción:
            </p>
            <br />
            <ol>
              <li>Multa a cada uno entre 60.000€ y 600.000€ y</li>
              <li>
                Separación del cargo, con inhabilitación en plazo máximo de 10
                años, tanto en la propia entidad como en otras distintas
              </li>
            </ol>
          </article>
          <article>
            <h2>Infracciones graves</h2>
            <ol>
              <li>Amonestación privada</li>
              <li>Amonestación pública</li>
              <li>
                Multa mínima de 60.001€ y máxima alguna de las siguientes: 1%
                del patrimonio del sujeto obligado, más un 50% o 150.000€
              </li>
            </ol>
            <p>(La 3 es obligatoria y se simultanea con la 1 o la 3)</p>
            <br />
            <p>
              Se podrá imponer sanción al administrador o dirección si fuesen
              responsables de la operación
            </p>
            <br />
            <ol>
              <li>Amonestacón privada</li>
              <li>Amonestación pública</li>
              <li>
                Multa a cada uno por un importe entre 3.000€ y hasta 60.000€
              </li>
              <li>Suspensión en el cargo por plazo no superior a un año</li>
            </ol>
            <p>(La 4 es obligatoria y se simultanea con las otras tres)</p>
            <br />
            <p>
              Por incumplimiento de la obligación de declarar, se sanciona desde
              600€ hasta el valor duplo de los medios de pago empleados.
            </p>
          </article>
          <article>
            <h2>Infracciones leves</h2>
            <ol>
              <li>Amonestación privada</li>
              <li>Multa por importe de hasta 600.000€</li>
            </ol>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default PenaltySystem
