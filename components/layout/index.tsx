import { Fragment } from 'react'
import Head from 'next/head'
import { GlobalStyle } from '../globalStyles'
import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'

interface ILayoutProps {
  title: string
}

const Layout: React.FC<ILayoutProps> = ({ children, title }): JSX.Element => (
  <Fragment>
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
  </Fragment>
)

export default Layout
