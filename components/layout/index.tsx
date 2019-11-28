import Head from 'next/head'
import { GlobalStyle } from '../globalStyles'
import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'
import { SidebarProvider } from '../../context/Sidebar/Provider'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { useState } from 'react'

interface ILayoutProps {
  title: string
}

const Layout: React.FC<ILayoutProps> = ({ children, title }): JSX.Element => {
  const initialState = {
    isSidebarOpen: false
  }

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'OPEN_SIDEBAR':
        return { ...state, isSidebarOpen: true }
      case 'CLOSE_SIDEBAR':
        return { ...state, isSidebarOpen: false }
      default:
        return state
    }
  }

  const [scrollPos, setScrollPos] = useState<{
    prevX: number
    prevY: number
    currentX: number
    currentY: number
  }>({
    prevX: 0,
    prevY: 0,
    currentX: 0,
    currentY: 0
  })

  useScrollPosition(({ prevPos, currPos }) => {
    setScrollPos({
      prevX: prevPos.x,
      prevY: prevPos.y,
      currentX: currPos.x,
      currentY: currPos.y
    })
  })

  return (
    <SidebarProvider initialState={initialState} reducer={reducer}>
      <GlobalStyle />
      <Head>
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header scrollPosition={scrollPos} />
      <Main>
        <Sidebar />
        {children}
      </Main>
      <footer>Footer</footer>
    </SidebarProvider>
  )
}

export default Layout
