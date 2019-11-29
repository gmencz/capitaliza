import * as SC from './styles'
import { FC } from 'react'

interface IMainProps {
  isHomepage?: boolean
}

const Main: FC<IMainProps> = ({ children, isHomepage }): JSX.Element => (
  <SC.Main isHomepage={isHomepage}>{children}</SC.Main>
)

export default Main
