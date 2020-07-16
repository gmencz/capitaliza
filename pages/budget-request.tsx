import { FC, useState } from 'react';
import Layout from '../components/layout';
import Form from '../components/form';
import Input from '../components/form/input';
import { Button } from '../components/button/styles';

const BudgetRequest: FC = () => {
  return (
    <Layout title="Capitaliza - Solicitud presupuesto">
      <section className="contact__wrapper">
        <h1>Solicítanos presupuesto</h1>
        <Form method="POST" action="https://formspree.io/xpzyoybw">
          <div className="form-group">
            <label htmlFor="tipo-presupuesto">Tipo de presupuesto</label>
            <select name="tipo-presupuesto" id="tipo-presupuesto">
              <option value="Consultoria RSC">Consultoría RSC</option>
              <option value="Auditoria RSC">Auditoría RSC</option>
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
              placeholder="Sociedades Fundamentales S.L."
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
              placeholder="Elena"
            />
          </div>
          <div className="form-group">
            <label htmlFor="domicilio-social">Domicilio Social</label>
            <Input
              type="text"
              required
              name="domicilio-social"
              id="domilicio-social"
              placeholder="Plaza Pablo Ruiz Picasso"
            />
          </div>
          <div className="form-group">
            <label htmlFor="domicilio-actividad">Domicilio Actividad</label>
            <Input
              type="text"
              required
              name="domicilio-actividad"
              id="domilicio-actividad"
              placeholder="Pintor Sorolla, 2-4 46002 Valencia"
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefono-email">Teléfono o email</label>
            <Input
              type="text"
              required
              name="telefono-email"
              id="telefono-email"
              placeholder="937 37 29 07"
            />
          </div>
          <div className="form-group">
            <label htmlFor="sector-tipo-actividad">
              Sector - Tipo de actividad
            </label>
            <Input
              type="text"
              name="sector-tipo-actividad"
              id="sector-tipo-actividad"
              placeholder="Transportes"
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
              placeholder="Escriba sus observaciones"
              rows={5}
              required
            ></textarea>
          </div>
          <Button btnType="submit" primary>
            Solicitar
          </Button>
        </Form>
      </section>
    </Layout>
  );
};

export default BudgetRequest;
