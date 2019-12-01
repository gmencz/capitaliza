import { FC } from 'react'
import * as SC from './styles'

interface IFormProps {
  action?: string
}

const Form: FC<IFormProps> = ({ children, action = '#' }) => (
  <SC.Form action={action}>{children}</SC.Form>
)

export default Form
