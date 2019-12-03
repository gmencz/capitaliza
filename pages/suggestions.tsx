import { FC, useState } from 'react'
import Layout from '../components/layout'
import Form from '../components/form'
import Radio from '../components/radio'
import Input from '../components/form/input'
import Button from '../components/button'
import InfoCard from '../components/infoCard'

const Suggestions: FC = () => {
  const [firstSelectedOption, setFirstSelectedOption] = useState('cliente')
  const [secondSelectedOption, setSecondSelectedOption] = useState('sugerencia')

  const changeHandler = e => {
    setFirstSelectedOption(e.target.value)
  }

  const changeHandler2 = e => {
    setSecondSelectedOption(e.target.value)
  }

  return (
    <Layout title="Capitaliza - Sugerencias">
      <section className="contact__wrapper">
        <h1>Sugerencias</h1>
        <Form action="#">
          <div className="form-group">
            <label style={{ alignSelf: 'flex-start' }}>
              Relación con CAPITALIZA
            </label>
            <div className="radio-group" style={{ minWidth: '300px' }}>
              <Radio
                value="cliente"
                name="relacion"
                label="Cliente"
                changeHandler={changeHandler}
                selectedOption={firstSelectedOption}
              />
              <Radio
                value="proveedor"
                name="relacion"
                changeHandler={changeHandler}
                label="Proveedor / Subcontratista"
                selectedOption={firstSelectedOption}
              />
              <Radio
                value="otro"
                name="relacion"
                changeHandler={changeHandler}
                label="Otro"
                selectedOption={firstSelectedOption}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="nombre-empresa">Nombre de la empresa</label>
            <Input
              type="text"
              name="nombre-empresa"
              id="nombre-empresa"
              placeholder="Google LLC"
              required={false}
            />
          </div>
          <div className="form-group">
            <label htmlFor="nombre-empresa">Nombre de la persona*</label>
            <Input
              type="text"
              name="nombre-empresa"
              id="nombre-empresa"
              placeholder="Elena"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="puesto-empresa">Puesto en la empresa</label>
            <Input
              type="text"
              name="puesto-empresa"
              id="puesto-empresa"
              placeholder="Responsable de marketing"
              required={false}
            />
          </div>
          <div className="form-group">
            <label htmlFor="departamento-empresa">Departamento</label>
            <Input
              type="text"
              name="departamento-empresa"
              id="departamento-empresa"
              placeholder="Marketing"
              required={false}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico de contacto*</label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="elena.hernandez@ejemplo.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="tlfn">Teléfono directo</label>
            <Input
              type="tel"
              name="tlfn"
              id="tlfn"
              placeholder="937 37 29 07"
              required
            />
          </div>
          <div className="form-group">
            <label style={{ alignSelf: 'flex-start' }}>
              Tipo de comunicación
            </label>
            <div className="radio-group" style={{ minWidth: '300px' }}>
              <Radio
                value="sugerencia"
                label="Sugerencia"
                name="comunicacion"
                changeHandler={changeHandler2}
                selectedOption={secondSelectedOption}
              />
              <Radio
                name="comunicacion"
                value="reclamacion"
                changeHandler={changeHandler2}
                label="Reclamación"
                selectedOption={secondSelectedOption}
              />
              <Radio
                name="comunicacion"
                value="queja"
                changeHandler={changeHandler2}
                label="Queja"
                selectedOption={secondSelectedOption}
              />
            </div>
          </div>
          <div className="form-group">
            <label style={{ alignSelf: 'flex-start' }} htmlFor="mensaje">
              Descripción (Mensaje)
            </label>
            <textarea
              name="mensaje"
              id="mensaje"
              placeholder="Mensaje"
              cols={30}
              rows={5}
            ></textarea>
          </div>
          <Button btnType="submit" primary>
            Enviar
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

export default Suggestions
