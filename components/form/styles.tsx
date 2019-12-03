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

  @media screen and (max-width: 700px) {
    padding: 2em 0;
    width: 100%;
  }

  .form-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.75rem;

    @media screen and (max-width: 700px) {
      flex-direction: column;
      align-items: flex-start;

      label {
        margin-bottom: 0.5em;
        margin-right: 0;
        margin-left: 0.8em;
      }
    }

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

      @media screen and (max-width: 700px) {
        width: 100%;
        border-radius: 0px;
        background-color: transparent;
        min-width: 200px;
        transition: border-bottom 200ms ease-in-out;

        border-bottom: 1px solid #e6eef8;
        &:focus {
          box-shadow: none;
          border-bottom: 1px solid #0d47a1;
        }
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

      @media screen and (max-width: 700px) {
        width: 100%;
        border-radius: 0px;
        background-color: transparent;
        border-bottom: 1px solid #e6eef8;
        &:focus {
          box-shadow: none;
        }
      }
    }
  }
`
