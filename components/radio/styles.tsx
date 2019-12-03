import styled from 'styled-components'

export const Label = styled.label`
  display: block;
  cursor: pointer;
  input {
    display: none;
    & + span {
      line-height: 18px;
      height: 18px;
      padding-left: 30px;
      display: block;
      margin-bottom: 10px;
      position: relative;
      &:not(:empty) {
        padding-left: calc(22px + 8);
      }
      &:before,
      &:after {
        content: '';
        width: 18px;
        height: 18px;
        display: block;
        border-radius: 50%;
        left: 0;
        top: 0;
        position: absolute;
      }
      &:before {
        background: #d1d7e3;
        transition: background 0.2s ease,
          transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 2);
      }
      &:after {
        background: #fff;
        transform: scale(0.78);
        transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.4);
      }
    }
    &:checked + span {
      &:before {
        transform: scale(1.04);
        background: #0d47a1;
      }
      &:after {
        transform: scale(0.4);
        transition: transform 0.3s ease;
      }
    }
  }
  &:hover {
    input {
      & + span {
        &:before {
          transform: scale(0.92);
        }
        &:after {
          transform: scale(0.74);
        }
      }
      &:checked + span {
        &:after {
          transform: scale(0.4);
        }
      }
    }
  }
`

export const Radio = styled.input`
  margin-right: 10px;
`
