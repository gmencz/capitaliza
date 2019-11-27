import { FC, useState, Fragment } from 'react'
import * as SC from './styles'
import Link from 'next/link'
import { Burger } from '../Header/styles'

const Arrow: FC = (): JSX.Element => (
  <svg className="svg-icon" width="20" height="20" viewBox="0 0 20 20">
    <path
      fill="#0F93DB"
      d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"
    ></path>
  </svg>
)

interface ISubLink {
  to: string
  text: string
}

interface IMenuItemProps {
  to?: string
  isOpenable?: boolean
  subLinks?: ISubLink[]
}

const MenuItem: FC<IMenuItemProps> = ({
  to,
  isOpenable,
  subLinks,
  children
}): JSX.Element => {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <li
      onClick={() => setIsToggled(!isToggled)}
      className={isToggled ? 'toggled' : undefined}
    >
      {isOpenable ? (
        <Fragment>
          <a>
            {children} <Arrow />
          </a>
          {isToggled && (
            <ul style={{ marginLeft: '1em' }}>
              {subLinks.map((subLink, idx) => (
                <li style={{ marginBottom: '1em' }}>
                  <Link key={idx} href={subLink.to}>
                    <a style={{ fontSize: '1.5rem', color: 'black' }}>
                      {subLink.text}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Fragment>
      ) : (
        <Link href={to}>
          <a>{children}</a>
        </Link>
      )}
    </li>
  )
}

const Sidebar: FC = (): JSX.Element => {
  const subLinksPBC: Array<ISubLink> = [
    {
      to: '/obligations',
      text: 'Sujetos Obligados / Obligaciones'
    },
    {
      to: '/penalty-system',
      text: 'Régimen Sancionador'
    }
  ]

  const subLinksSPB: Array<ISubLink> = [
    {
      to: '/prevention-consult',
      text: 'Consultoría en Prevención del Blanqueo de Capitales y FT'
    },
    {
      to: '/prevention-audit',
      text: 'Auditoría en Prevención del Blanqueo de Capitales y FT'
    },
    {
      to: '/formation',
      text: 'Formación'
    }
  ]

  const subLinksRSC: Array<ISubLink> = [
    {
      to: '/dimensions',
      text: 'Dimensiones'
    },
    {
      to: '/benefits',
      text: 'Beneficios'
    }
  ]

  const subLinksSRS: Array<ISubLink> = [
    {
      to: '/consultory-rsc',
      text: 'Consultoría RSC'
    },
    {
      to: '/auditory-rsc',
      text: 'Auditoría RSC'
    },
    {
      to: '/formation-rsc',
      text: 'Formación'
    }
  ]

  const subLinksAC: Array<ISubLink> = [
    {
      to: '/contact',
      text: 'Contacta'
    },
    {
      to: '/suggestions',
      text: 'Sugerencias'
    },
    {
      to: '/budget-request',
      text: 'Solicítanos un presupuesto'
    }
  ]

  return (
    <SC.Sidebar>
      <Burger inSidebar={true}>
        <div></div>
        <div></div>
        <div></div>
      </Burger>
      <ul>
        <MenuItem to="/">Inicio</MenuItem>
        <MenuItem to="/equantia-group">Grupo equantia</MenuItem>
        <MenuItem subLinks={subLinksPBC} isOpenable>
          Prevención Blanqueo Capitales
        </MenuItem>
        <MenuItem subLinks={subLinksSPB} isOpenable>
          Servicios Prevención Blanqueo
        </MenuItem>
        <MenuItem subLinks={subLinksRSC} isOpenable>
          Responsabilidad Social Corp.
        </MenuItem>
        <MenuItem subLinks={subLinksSRS} isOpenable>
          Servicios Responsabilidad Social
        </MenuItem>
        <MenuItem subLinks={subLinksAC} isOpenable>
          Atención al Cliente
        </MenuItem>
      </ul>
    </SC.Sidebar>
  )
}

export default Sidebar
