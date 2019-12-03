import styled from 'styled-components'

export const Input = styled.input`
  padding: 0.65em;
  font-size: 1.65rem;
  border-radius: 4px;
  border: none;
  font-family: 'Raleway', sans-serif;
  background-color: #f6f9fc;
  outline: none;
  min-width: 300px;

  &:focus {
    box-shadow: 0 0 0 1px #e4effa;
  }

  @media screen and (max-width: 700px) {
    background-color: transparent;
    border-bottom: 1px solid #e6eef8;
    border-radius: 0px;
    width: 100%;
    padding: 0.65em 0.8em;
    transition: border-bottom 200ms ease-in-out;
    min-width: 200px;

    &:focus {
      box-shadow: none;
      border-bottom: 1px solid #0d47a1;
    }
  }
`
