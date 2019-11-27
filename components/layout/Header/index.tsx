import * as SC from './styles'
import { useSidebarValue } from '../../../context/Sidebar/Provider'

const Header: React.FC = (): JSX.Element => {
  const [_, dispatch] = useSidebarValue()

  return (
    <SC.Header>
      <div>
        <SC.Burger
          onClick={() => dispatch({ type: 'OPEN_SIDEBAR' })}
          inSidebar={false}
        >
          <div></div>
          <div></div>
          <div></div>
        </SC.Burger>
        <h1>capitaliza &reg;</h1>
      </div>
      <SC.LanguageSelector>ES</SC.LanguageSelector>
    </SC.Header>
  )
}

export default Header
