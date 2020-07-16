import { FC, FormHTMLAttributes } from 'react';
import * as SC from './styles';

interface IFormProps extends FormHTMLAttributes<any> {}

const Form: FC<IFormProps> = ({ children, ...props }) => (
  <SC.Form {...props}>{children}</SC.Form>
);

export default Form;
