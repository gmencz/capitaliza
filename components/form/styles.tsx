import styled from 'styled-components'

export const Form = styled.form`
  box-shadow: 0px 0px 20px -14px rgba(0, 0, 0, 0.75);
  background-color: white;
  width: 630px;
  padding: 2em;
  display: flex;
  flex-direction: column;

  button[type='submit'] {
    align-self: flex-end;
  }

  .form-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.75rem;

    &:last-of-type {
      label {
        align-self: flex-start;
      }
    }

    label {
      font-size: 1.6rem;
      font-weight: bold;
    }

    textarea {
      min-width: 300px;
      background-color: #f6f9fc;
      border: none;
      outline: none;
      font-family: 'Raleway', sans-serif;
      padding: 0.65em;
      font-size: 1.65rem;
      border-radius: 4px;
      &:focus {
        box-shadow: 0 0 0 1px #e4effa;
      }
    }
  }
`
