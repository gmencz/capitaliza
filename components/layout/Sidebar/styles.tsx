import styled from 'styled-components'

export const Sidebar = styled.nav`
  background-color: white;
  width: 60%;
  max-width: 375px;
  height: 100vh;
  min-width: 275px;
  padding: 1.5em 2.75em 0 3.75em;
  top: 0;
  position: fixed;
  box-shadow: 7px 0px 12px -9px rgba(0, 0, 0, 0.75);
  transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(-150%);

  &.open {
    transform: translateX(0%);
  }

  & > div:first-of-type {
    margin-bottom: 2em;
  }

  & > ul {
    display: flex;
    flex-direction: column;
    height: 100%;
    list-style-type: none;

    & > li {
      margin-bottom: 3em;

      & > a {
        margin-bottom: 0.75em;
      }

      svg {
        transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);
        min-width: 20px;
      }

      &.toggled svg {
        transform: rotate(90deg);
      }
    }

    a {
      color: var(--primary-clr);
      text-decoration: none;
      font-weight: bold;
      cursor: pointer;
      font-size: 1.6rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      & + ul {
        list-style-type: none;
      }
    }
  }
`
