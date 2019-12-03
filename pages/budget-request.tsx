import { FC, useState } from 'react'
import Layout from '../components/layout'
import Form from '../components/form'
import Radio from '../components/radio'
import Input from '../components/form/input'
import { Button } from '../components/button/styles'

const BudgetRequest: FC = () => {
  const [firstSelectedOption, setFirstSelectedOption] = useState('cliente')
  const [secondSelectedOption, setSecondSelectedOption] = useState('sugerencia')

  const changeHandler = e => {
    setFirstSelectedOption(e.target.value)
  }

  const changeHandler2 = e => {
    setSecondSelectedOption(e.target.value)
  }

  return (
    <Layout title="Capitaliza - Solicitud presupuesto">
      <section className="contact__wrapper">
        <h1>Solicítanos presupuesto</h1>
        <Form>
          <div className="form-group">
            <label htmlFor="tipo-presupuesto">Tipo de presupuesto</label>
            <select name="tipo-presupuesto" id="tipo-presupuesto">
              <option value="consultoria-rsc">Consultoría RSC</option>
              <option value="auditoria-rsc">Auditoría RSC</option>
              <option value="formacion">Formación</option>
              <option value="Consultoria en Prevencion del Blanqueo de Capitales y FT">
                Consultoría en Prevención del Blanqueo de Capitales y FT
              </option>
              <option value="Auditoria en Prevencion del Blanqueo de Capitales y FT">
                Auditoría en Prevención del Blanqueo de Capitales y FT
              </option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="nombre-entidad">
              Nombre de la entidad (Las entidades de grupo deberán cubrir una
              ficha por cada una)
            </label>
            <Input
              type="text"
              required
              name="nombre-entidad"
              id="nombre-entidad"
            />
          </div>
          <div className="form-group">
            <label htmlFor="persona-contacto">
              Persona de contacto / Cargo
            </label>
            <Input
              type="text"
              required
              name="persona-contacto"
              id="persona-contacto"
            />
          </div>
          <div className="form-group">
            <label htmlFor="domicilio-social">Domicilio Social</label>
            <Input
              type="text"
              required
              name="domicilio-social"
              id="domilicio-social"
            />
          </div>
          <div className="form-group">
            <label htmlFor="domicilio-actividad">Domicilio Actividad</label>
            <Input
              type="text"
              required
              name="domicilio-actividad"
              id="domilicio-actividad"
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefono-email">Teléfono - Email</label>
            <Input
              type="text"
              required
              name="telefono-email"
              id="telefono-email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="sector-tipoactividad">
              Sector - Tipo de actividad
            </label>
            <Input
              type="text"
              name="sector-tipoactividad"
              id="sector-tipoactividad"
              required
            />
          </div>
          <div className="form-group">
            <label style={{ alignSelf: 'flex-start' }} htmlFor="observaciones">
              Observaciones
            </label>
            <textarea
              name="observaciones"
              id="observaciones"
              rows={5}
              required
            ></textarea>
          </div>
          <Button btnType="submit" primary>
            Solicitar
          </Button>
        </Form>
        <div className="normative-contact">
          <p>
            <strong>Normativa:</strong> Reglamento (UE) 2016/679 RGPD.
          </p>
          <br />
          <p>
            <strong>Responsable:</strong> EQUANTIA GLOBAL BUSINESS, S.L.
          </p>
          <br />
          <p>
            <strong>Finalidad:</strong> Gestionar las solicitudes de información
            que se realizan a través de la página web.
          </p>
          <br />
          <p>
            <strong>Legitimación:</strong> El consentimiento prestado.
          </p>
          <br />
          <p>
            <strong>Destinatarios:</strong> No se realizarán cesiones de datos.
          </p>
          <br />
          <p>
            <strong>Derechos:</strong> Podrá ejercitar los derechos de acceso,
            rectificación, supresión y portabilidad de sus datos, y la
            limitación u oposición a su tratamiento, a revocar el consentimiento
            prestado y a presentar reclamación ante la Agencia Española
            Protección de Datos.
          </p>
          <br />
          <p>
            <strong>Información adicional:</strong> Toda la información
            facilitada podrá encontrarla ampliada en la información adicional
            que está a su disposición la política de privacidad
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default BudgetRequest
