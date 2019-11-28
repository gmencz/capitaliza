import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  p {
    font-size: 1.9rem;
    font-weight: 500;
    text-align: justify;
  }

  .hero {
    font-size: 2.75rem;
    color: white;
    padding-left: 4.5rem;
    padding-right: 1.5rem;

    h4 {
      margin-bottom: 0.5em;
    }

    @media screen and (max-width: 430px) {
      font-size: 2.2rem;
    }

    @media screen and (max-width: 345px) {
      padding-left: 2rem;
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
`
