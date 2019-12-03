import { FC } from 'react'
import Layout from '../components/layout'

const PreventionAudit: FC = () => {
  return (
    <Layout title="Auditoría en Prevención del Blanqueo de Capitales y FT">
      <section className="obligations__wrapper prevention-consult">
        <h1>
          Auditoría en Prevención del Blanqueo de Capitales y Financiacion del
          Terrorismo
        </h1>
        <div>
          <article>
            <p>
              El objetivo de la Auditoría de Prevención del Blanqueo de
              Capitales es el examen y verificación de los procedimientos y
              medidas de control interno, con carácter anual, y el informe
              estará a disposición de la Comisión de Prevención del Blanqueo de
              Capitales e Infracciones Monetarias o de sus Órganos de apoyo
              durante los cinco años siguientes a la fecha de emisión. Por
              tanto,{' '}
              <span className="bold">
                se someterán a examen las políticas y procedimientos en materia
                de diligencia debida, información, conservación de documentos,
                control interno, evaluación, gestión de riesgos y comunicación
              </span>
              , implantados por la entidad. El objetivo es la prevención e
              impedimento de todo tipo de operaciones relacionadas con el
              blanqueo de capitales o la financiación del terrorismo. El
              informe, podrá ser sustituido por un informe de seguimiento
              emitido por el experto externo, en los dos años sucesivos a su
              elaboración.
            </p>
            <br />
            <p>
              La Orden Ministerial EHA/2444/2007 fija el alcance de la revisión
              del sistema de Prevención, en relación con el informe del experto
              externo, describiendo detalladamente las medidas de control
              interno existentes, valorando su eficacia operativa y proponiendo,
              en su caso, eventuales rectificaciones o mejoras.
            </p>
            <br />
            <p>
              Para la elaboración del informe de auditoría, nuestro equipo
              auditor llevará a cabo un trabajo de campo que le permitirá
              verificar el estado de cumplimiento de la organización auditada
              para obtener las evidencias en las que deberá basarse según la
              normativa.
            </p>
            <br />
            <ol>
              <li>Análisis de la documentación</li>
              <li>Comprobación de los registros</li>
              <li>
                Observación directa del sistema de información y entorno físico
                en el ámbito auditado
              </li>
              <li>
                Entrevistas personales a personal de las diferentes áreas de la
                organización
              </li>
              <li>
                Otras fuentes que se consideren pertinentes y/o necesarias
              </li>
            </ol>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default PreventionAudit
