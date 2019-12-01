import { FC, ButtonHTMLAttributes } from 'react'
import * as SC from './styles'

export interface IButtonProps {
  primary: boolean
  btnType?: 'submit' | 'reset' | 'button'
}

const Button: FC<IButtonProps> = ({ children, primary, btnType }) => (
  <SC.Button type={btnType} primary={primary}>
    {children}
  </SC.Button>
)

export default Button
