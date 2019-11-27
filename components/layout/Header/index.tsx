import * as SC from './styles'

const Header: React.FC = (): JSX.Element => (
  <SC.Header>
    <div>
      <SC.Burger inSidebar={false}>
        <div></div>
        <div></div>
        <div></div>
      </SC.Burger>
      <h1>capitaliza &reg;</h1>
    </div>
    <SC.LanguageSelector>ES</SC.LanguageSelector>
  </SC.Header>
)

export default Header
