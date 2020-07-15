import styled from 'styled-components';

interface IMainProps {
  isHomepage?: boolean;
}

export const Main = styled.main<IMainProps>`
  display: flex;
  flex-direction: column;
  color: rgb(17, 51, 85);
  min-height: calc(100vh - 190px);
  margin-top: ${(props) => (props.isHomepage ? '0' : '100px')};
  padding: ${(props) => (!props.isHomepage ? '0 4.75em' : undefined)};

  article {
    a {
      text-decoration: none;
      color: rgb(20, 70, 153);

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media screen and (max-width: 400px) {
    padding: ${(props) => (!props.isHomepage ? '0 1.5em' : undefined)};
  }

  .contact__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 2.75rem;
      margin-bottom: 2em;
    }
  }

  .info-cards__wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 72px auto;
    z-index: 2;
    padding: 0 3.75em;

    @media screen and (max-width: 920px) {
      flex-direction: row;
      justify-content: space-between;
    }

    @media screen and (max-width: 400px) {
      padding: 0 1.5em;
    }
  }

  .hero {
    color: white;
    padding-left: 4.5rem;
    padding-right: 1.5rem;
    margin-top: 80px;

    h4 {
      font-size: 2.75rem;
      margin-bottom: 0.5em;
    }

    @media screen and (max-width: 430px) {
      font-size: 2.2rem;
    }

    @media screen and (max-width: 345px) {
      padding-left: 2rem;
    }
  }

  .obligations__wrapper {
    margin: 3rem 0;

    & > h2 {
      font-size: 2.5rem;
    }

    &.prevention-consult {
      article {
        flex-basis: 100%;
        max-width: initial;
        max-width: 1200px;
      }
    }
  }

  .obligations__wrapper {
    &.penalty {
      h1 {
        margin-bottom: 1em;
      }

      & > p {
        margin-bottom: 1em;
      }

      article {
        p {
          font-size: 1.55rem;
        }
      }
    }

    h1 {
      font-size: 2.4rem;
      margin-bottom: 2em;
    }

    & > div {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      article {
        h2 {
          font-size: 1.8rem;
          margin-bottom: 15px;
          margin-top: 30px;
          color: #0d47a1;
        }

        ul {
          list-style-type: none;

          li {
            margin-bottom: 15px;
            font-size: 1.55rem;
            display: flex;
            align-items: flex-start;
            &::before {
              content: '';
              display: inline-block;
              margin-top: 6px;
              min-width: 6px;
              border-radius: 50%;
              min-height: 6px;
              margin-right: 7px;
              background-color: #0d47a1;
            }
          }
        }
        ol {
          li {
            margin-bottom: 15px;
            margin-left: 1em;
            font-size: 1.55rem;
          }
        }
      }

      @media screen and (max-width: 680px) {
        article {
          min-width: 100%;
        }
      }
    }

    p {
      font-size: 1.6rem;
      font-weight: 500;
      text-align: justify;
    }
  }
`;
