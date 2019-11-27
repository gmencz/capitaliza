import styled from 'styled-components'

export const Header = styled.header`
  background-color: var(--primary-clr);
  min-height: 80px;
  color: white;
  padding: 0 3.75em;
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

interface IBurgerProps {
  inSidebar: boolean
}

export const Burger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  width: 50px;
  height: 50px;
  transition: background-color 0.3s cubic-bezier(0, 0, 0.2, 1);
  padding: 1em;
  border-radius: 50%;
  margin-right: 1.8em;
  margin-left: ${(props: IBurgerProps) =>
    props.inSidebar ? '-1em' : undefined};
  margin-top: ${(props: IBurgerProps) =>
    !props.inSidebar ? '.3em' : undefined};

  &:hover {
    background-color: rgba(60, 64, 67, 0.1);
  }

  & > div {
    background-color: ${(props: IBurgerProps) =>
      props.inSidebar ? 'var(--primary-clr)' : 'white'};
    width: 100%;
    height: 3px;
    margin-bottom: 0.35em;

    &:first-of-type {
      margin-top: 0.35em;
    }
  }
`

export const LanguageSelector = styled.button`
  background-color: white;
  color: var(--primary-clr);
  padding: 0.4em;
  font-size: 1.65rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
`
