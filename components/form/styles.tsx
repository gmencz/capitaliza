import styled from 'styled-components'

export const Form = styled.form`
  box-shadow: 0px 0px 20px -14px rgba(0, 0, 0, 0.75);
  background-color: white;
  width: 630px;
  padding: 2em;
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;

  button[type='submit'] {
    align-self: flex-end;
    width: 100%;
  }

  .form-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.75rem;

    label {
      font-size: 1.6rem;
      margin-right: 1em;
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
      resize: none;
      &:focus {
        box-shadow: 0 0 0 1px #e4effa;
      }
    }

    select {
      width: 300px;
      padding: 0.65em;
      outline: none;
      border: none;
      background-color: #f6f9fc;
      border-radius: 4px;
      color: #0d47a1;
      font-family: 'Raleway', sans-serif;
      font-size: 1.65rem;

      &:focus {
        box-shadow: 0 0 0 1px #e4effa;
      }
    }
  }
`
