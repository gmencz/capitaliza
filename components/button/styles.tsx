import styled from 'styled-components'
import { IButtonProps } from './index'

export const Button = styled.button<IButtonProps>`
  background-color: ${({ primary }) => (primary ? '#0D47A1' : 'red')};
  padding: 0.75em 1.5em;
  color: white;
  min-width: ${({ primary }) => (primary ? '300px' : 'initial')};
  font-size: 1.5rem;
  text-transform: uppercase;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  outline: none;
  position: relative;
  transition: all 100ms ease-in-out;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

  &:hover {
    background-color: ${({ primary }) => (primary ? '#4687EC' : 'red')};
    transform: translateY(-1px);
  }
`
