import styled from 'styled-components'

export const Header = styled.header`
  background-color: var(--primary-clr);
  min-height: 80px;
  color: white;
  padding: 0 3em;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
  }

  h1 {
    font-size: 2.7rem;
  }
`

export const Burger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 35px;
  height: 20px;
  margin-right: 1.8em;

  & > div {
    background-color: white;
    width: 100%;
    height: 3px;
  }
`
