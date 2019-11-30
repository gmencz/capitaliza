import { FC } from 'react'
import Layout from '../components/layout'

const Benefits: FC = () => {
  return (
    <Layout title="Capitaliza - Beneficios">
      <section className="obligations__wrapper prevention-consult">
        <h1>Beneficios</h1>
        <div>
          <article>
            <p>
              Su organización obtiene beneficios de la integración de una
              gestión socialmente responsable
            </p>
            <br />
            <ol>
              <li>
                Mejora la{' '}
                <span style={{ fontWeight: 'bolder' }}>imagen general</span> de
                la entidad.
              </li>
              <li>
                Facilita el{' '}
                <span style={{ fontWeight: 'bolder' }}>
                  acceso a la financiación.
                </span>
              </li>
              <li>
                Contribuye a la{' '}
                <span style={{ fontWeight: 'bolder' }}>
                  motivación de los empleados
                </span>
                , la identificación con la{' '}
                <span style={{ fontWeight: 'bolder' }}>
                  cultura de la entidad
                </span>
                , la cohesión y a una{' '}
                <span style={{ fontWeight: 'bolder' }}>
                  mayor seguridad y salud en el trabajo.
                </span>
              </li>
              <li>
                Contribuye a la{' '}
                <span style={{ fontWeight: 'bolder' }}>
                  fidelización de los clientes.
                </span>
              </li>
              <li>
                <span style={{ fontWeight: 'bolder' }}>
                  Facilita la confianza
                </span>{' '}
                de nuestras partes interesadas (proveedores, subcontratistas,
                inversores, etc).
              </li>
            </ol>
            <p>
              <span style={{ fontWeight: 'bolder' }}>CAPITALIZA</span> es una
              <span style={{ fontWeight: 'bolder' }}>
                {' '}
                consultora comprometida con el desarrollo
              </span>
              , difusión e implantación de actuaciones de gestión socialmente
              responsables que, por extensión, contribuyen al desarrollo
              sostenible. A nivel interno este compromiso está reflejado en
              nuestro Código Ético y de Responsabilidad Social.
            </p>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default Benefits
