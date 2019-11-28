import Head from 'next/head'
import { GlobalStyle } from '../globalStyles'
import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'
import { SidebarProvider } from '../../context/Sidebar/Provider'

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

      <Header />
      <Main>
        <Sidebar />
        {children}
      </Main>
      <footer>Footer</footer>
    </SidebarProvider>
  )
}

export default Layout
