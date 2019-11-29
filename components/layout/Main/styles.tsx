import styled from 'styled-components'

interface IMainProps {
  isHomepage?: boolean
}

export const Main = styled.main<IMainProps>`
  display: flex;
  flex-direction: column;
  color: rgb(17, 51, 85);
  min-height: 100vh;
  margin-top: ${props => (props.isHomepage ? '0' : '100px')};
  padding: ${props => (!props.isHomepage ? '0 4.75em' : undefined)};

  @media screen and (max-width: 400px) {
    padding: ${props => (!props.isHomepage ? '0 1.5em' : undefined)};
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
    h1 {
      font-size: 2.4rem;
      margin-bottom: 2em;
    }

    & > div {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      article {
        flex-basis: 49%;
        border: 2px solid rgb(245, 247, 248);
        padding: 1.75em 1.5em 1.75em 1.75em;
        margin-bottom: 20px;
        max-width: 700px;

        h2 {
          font-size: 2.15rem;
          margin-bottom: 25px;
        }

        ul {
          list-style-type: none;

          li {
            margin-bottom: 15px;
            font-weight: bold;
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
            font-weight: bold;
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
      font-size: 1.9rem;
      font-weight: 500;
      text-align: justify;
    }
  }
`
