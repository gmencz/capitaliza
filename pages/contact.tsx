import { FC } from 'react'
import Layout from '../components/layout'
import Form from '../components/form'
import Input from '../components/form/input'
import Button from '../components/button'

const Contact: FC = () => {
  return (
    <Layout title="Capitaliza - Contacta con nosotros">
      <section className="contact__wrapper">
        <h1>Contacta con nosotros</h1>
        <Form action="lmao">
          <div className="form-group">
            <label htmlFor="nombre">Nombre de pila</label>
            <Input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Elena"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="apellidos">Apellidos</label>
            <Input
              type="text"
              name="apellidos"
              id="apellidos"
              placeholder="Hernández"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="elena.hernandez@ejemplo.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Tema del mensaje</label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Sobre qué nos contactas?"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              name="mensaje"
              placeholder="Comentanos un poco sobre el tema indicado"
              id="mensaje"
              cols={30}
              rows={6}
            ></textarea>
          </div>
          <Button btnType="submit" primary>
            Contactar con Capitaliza
          </Button>
        </Form>
      </section>
    </Layout>
  )
}

export default Contact
