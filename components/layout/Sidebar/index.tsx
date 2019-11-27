import { FC, useState, Fragment } from 'react'
import * as SC from './styles'
import Link from 'next/link'
import { Burger } from '../Header/styles'
import {
  subLinksPBC,
  subLinksAC,
  subLinksSRS,
  subLinksRSC,
  subLinksSPB
} from './subLinks'
import Arrow from './Arrow'
import { useSidebarValue } from '../../../context/Sidebar/Provider'
import { useClickOutside } from '../../../hooks/useClickOutside'

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
                <li key={idx} style={{ marginBottom: '1em' }}>
                  <Link href={subLink.to}>
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
  const [{ isSidebarOpen }, dispatch] = useSidebarValue()
  const { ref } = useClickOutside('CLOSE_SIDEBAR')

  return (
    <SC.Sidebar ref={ref} className={isSidebarOpen ? 'open' : undefined}>
      <Burger
        onClick={() => dispatch({ type: 'CLOSE_SIDEBAR' })}
        inSidebar={true}
      >
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
