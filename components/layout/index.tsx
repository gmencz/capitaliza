import { Fragment } from 'react'
import Head from 'next/head'
import { GlobalStyle } from '../globalStyles'
import Header from './Header'

interface LayoutProps {
  title: string
}

const Layout: React.FC<LayoutProps> = ({ children, title }): JSX.Element => (
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
    <main>{children}</main>
    <footer>Footer</footer>
  </Fragment>
)

export default Layout
