import { FC } from 'react'
import * as SC from './styles'

interface IInputProps {
  type: string
  name: string
  id: string
  required: boolean
  placeholder?: string
}

const Input: FC<IInputProps> = ({ ...props }) => <SC.Input {...props} />

export default Input
