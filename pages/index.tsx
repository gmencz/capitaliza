import Layout from '../components/layout';
import InfoCard from '../components/infoCard';
import { FC } from 'react';

const Home: FC = (): JSX.Element => (
  <Layout isHomepage={true} title="Capitaliza - Inicio">
    <div
      style={{
        backgroundColor: '#1976d2',
        backgroundImage:
          'linear-gradient(0deg,rgba(0,0,0,.375),rgba(0,0,0,.375)),url(/homepage.jpg)',
        minHeight: '80vh',
        display: 'flex',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="hero">
        <h4>Entidades más rentables.</h4>
        <h4>Mayores beneficios.</h4>
        <h4>Mejor imagen global.</h4>
        <h4>Reconocimiento en el mercado deseado.</h4>
        <h4>Gestión socialmente responsable.</h4>
      </div>
    </div>
    <section className="info-cards__wrapper">
      <InfoCard imageSource="/benefits.jpg">
        <h2>Beneficios</h2>
        <p>
          El retorno máximo para el accionista y la maximización del beneficio a
          corto plazo ya no son los únicos objetivos de una empresa, aunque
          constituyan alguna de sus prioridades. La empresa no puede ser ajena a
          los efectos que causa, sus impactos medioambientales y socio-laborales
          son cada vez mayores.
        </p>
      </InfoCard>
      <InfoCard imageSource="/power.jpg">
        <h2>Poder e influencia</h2>
        <p>
          Las empresas han incrementado su poder económico y su influencia
          sociopolítica sobre comunidades y países enteros, pasando a ser
          observadas y censuradas por nuevos agentes sociales, tercer sector,
          consumidores, órganos institucionales, medios de comunicación,
          internet…
        </p>
      </InfoCard>
      <InfoCard imageSource="/manage.jpg">
        <h2>Gestión responsable</h2>
        <p>
          Para integrar un sistema de gestión socialmente responsable deben
          identificarse los intereses particulares de cada empresa o entidad,
          así como sus debilidades y fortalezas, dentro del campo de la
          Responsabilidad Social Corporativa (RSC), que es muy extenso, y
          dedicarse a ello.
        </p>
      </InfoCard>
      <InfoCard imageSource="/integrity.jpg">
        <h2>Integridad</h2>
        <p>
          En una sociedad globalizada como la actual y en un contexto de
          responsabilidad social, toma relevancia el sector finaciero y
          relacionados, con una regulación homogénea que aporte un sistema de
          Prevención del Blanqueo de Capitales y Financiación del Terrorismo
          (PBC), que contribuya a la protección de la integridad del sistema
          financiero y de otros sectores de actividad económica relacionados.
        </p>
      </InfoCard>
      <InfoCard imageSource="/decision-making.jpg">
        <h2>Toma de decisiones</h2>
        <p>
          Existen muchas iniciativas y recomendaciones sobre las que se puede
          trabajar en estas materias pero se deben elegir los objetivos con
          cuidado, centrándose en ellos y nunca subestimando las dificultades de
          incorporar la RSC o el PBC al eje central de la estrategia el primero
          y sus procedimientos de gestión, el segundo.
        </p>
      </InfoCard>
      <InfoCard imageSource="/integration.jpg">
        <h2>Integración RSC</h2>
        <p>
          El verdadero desafío no es aceptar la RSC, sino integrarla en toda la
          organización. Sin duda en un futuro no muy lejano las empresas que no
          la adopten, el mercado y los consumidores las considerarán
          “marginales”.
        </p>
      </InfoCard>
    </section>
  </Layout>
);

export default Home;
