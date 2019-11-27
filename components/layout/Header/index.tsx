import * as SC from './styles'

const Header: React.FC = (): JSX.Element => (
  <SC.Header>
    <div>
      <SC.Burger>
        <div></div>
        <div></div>
        <div></div>
      </SC.Burger>
      <h1>capitaliza &reg;</h1>
    </div>
  </SC.Header>
)

export default Header
