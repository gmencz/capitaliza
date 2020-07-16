import { FC, InputHTMLAttributes } from 'react';
import * as SC from './styles';

interface IInputProps extends InputHTMLAttributes<any> {}

const Input: FC<IInputProps> = ({ ...props }) => <SC.Input {...props} />;

export default Input;
