import Head from 'next/head'
import { GlobalStyle } from '../globalStyles'
import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'
import { SidebarProvider } from '../../context/Sidebar/Provider'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { useState } from 'react'
import Footer from './Footer'

interface ILayoutProps {
  title: string
  isHomepage?: boolean
}

const Layout: React.FC<ILayoutProps> = ({
  children,
  title,
  isHomepage
}): JSX.Element => {
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
          href="https://fonts.googleapis.com/css?family=Raleway:400,700,900&disp lay=swap"
          rel="stylesheet"
        />
        <meta name="description" content="CAPITALIZA les va a ayudar a tener entidades más rentables, a obtener mayores beneficios, a mejorar su imagen global y a obtener el reconocimiento en el mercado tan deseado, partiendo de una gestión socialmente responsable." />
        <meta name=”robots” content=”index, follow” />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header isHomepage={isHomepage} scrollPosition={scrollPos} />
      <Main isHomepage={isHomepage}>
        <Sidebar />
        {children}
      </Main>
      <Footer />
    </SidebarProvider>
  )
}

export default Layout
