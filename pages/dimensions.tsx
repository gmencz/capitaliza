import { FC } from 'react'
import Layout from '../components/layout'

const Dimensions: FC = () => {
  return (
    <Layout title="Capitaliza - Dimensiones">
      <section className="obligations__wrapper penalty">
        <h1>Dimensiones</h1>
        <p>
          El concepto de{' '}
          <span className="bold">Responsabilidad Social Corporativa</span>{' '}
          comprende las siguientes <span className="bold">dimensiones:</span>
        </p>
        <div>
          <article>
            <h2>Interna</h2>
            <ol>
              <li>
                Gestión de <span className="bold">Recursos Humanos.</span>
              </li>
              <li>
                <span className="bold">Salud y seguridad en el trabajo.</span>
              </li>
              <li>
                <span className="bold">Adaptación al cambio.</span>
              </li>
              <li>
                <span className="bold">Gestión del impacto ambiental</span> y de
                los recursos naturales.
              </li>
            </ol>
          </article>
          <article>
            <h2>Externa</h2>
            <ol>
              <li>Comunidades locales.</li>
              <li>
                Inversores, socios comerciales, proveedores y consumidores.
              </li>
              <li>Derechos humanos.</li>
              <li>Problemas ecológicos mundiales.</li>
            </ol>
          </article>
        </div>
        <p>
          "Ser <span className="bold">socialmente responsable</span> no
          significa solamente cumplir plenamente las obligaciones jurídicas (o
          legislativas), sino ir más allá de su cumplimiento{' '}
          <span className="bold">
            invirtiendo más en el capital humano, el entorno y las relaciones
            con los interlocutores".
          </span>
        </p>
      </section>
    </Layout>
  )
}

export default Dimensions
