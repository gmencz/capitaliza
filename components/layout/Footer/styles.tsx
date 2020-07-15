import styled from 'styled-components';

export const Footer = styled.footer`
  border-top: 2px solid rgb(245, 247, 248);
  min-height: 90px;
  padding: 7rem;

  & > div {
    justify-content: space-between;
    display: flex;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
  }

  nav {
    + div {
      span {
        color: rgb(18, 29, 51);
        font-size: 1.4rem;

        time {
          font-size: 1.7rem;
        }
      }
    }

    & > div h3 {
      text-transform: uppercase;
      font-size: 1.6rem;
      margin-bottom: 1.4rem;
    }

    ul {
      list-style: none;

      li {
        &:not(:last-of-type) {
          margin-bottom: 1.4rem;
        }
      }

      a {
        text-decoration: none;
        font-size: 1.5rem;
        color: rgb(18, 29, 51);

        &:hover {
          color: rgb(20, 70, 153);
        }
      }
    }
  }
`;
