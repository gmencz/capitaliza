import { FC, Fragment } from 'react'
import * as SC from './styles'

interface IRadioProps {
  value: string
  selectedOption: string
  label: string
  name: string
  changeHandler: (e) => void
}

const Radio: FC<IRadioProps> = ({
  value,
  label,
  selectedOption,
  changeHandler,
  name
}) => (
  <Fragment>
    <SC.Label>
      <SC.Radio
        type="radio"
        value={value}
        name={name}
        onChange={e => changeHandler(e)}
        checked={selectedOption === value}
      />
      <span>{label}</span>
    </SC.Label>
  </Fragment>
)

export default Radio
