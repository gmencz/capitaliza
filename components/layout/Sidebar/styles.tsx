import styled from 'styled-components';

export const Sidebar = styled.nav`
  background-color: white;
  width: 60%;
  max-width: 375px;
  height: 100vh;
  min-width: 275px;
  padding: 1.5em 2.75em 0 3.75em;
  top: 0;
  left: 0;
  z-index: 99;
  overflow-y: auto;
  position: fixed;
  box-shadow: 7px 0px 12px -9px rgba(0, 0, 0, 0.75);
  transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(-150%);

  &::-webkit-scrollbar {
    width: 7px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0d47a1;
    border-radius: 30px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  &.open {
    transform: translateX(0%);
  }

  & > div:first-of-type {
    margin-bottom: 2em;
    margin-left: 0.3em;
  }

  & > ul {
    display: flex;
    flex-direction: column;
    height: 100%;
    list-style-type: none;

    & > li {
      & > a {
        margin-bottom: 0.75em;
        padding: 0.7em;
        color: #0d47a1;
        &.active {
          background-color: rgba(60, 64, 67, 0.1);
          border-radius: 4px;
        }

        &:hover {
          background-color: rgba(160, 164, 167, 0.1);
        }
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
      cursor: pointer;
      font-size: 1.6rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      & + ul {
        list-style-type: none;

        a {
          color: rgb(17, 51, 85);
          margin-left: 0.5em;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
