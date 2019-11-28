import styled from 'styled-components'

export const InfoCard = styled.article`
  z-index: 2;
  margin-bottom: 4em;
  display: flex;
  height: 310px;
  min-height: 310px;
  align-items: center;
  max-width: 1000px;
  border: 1px solid rgb(231, 235, 238);

  p {
    font-size: 2rem;
  }

  div:nth-of-type(2) {
    flex: 1;
    padding-right: 10em;
  }

  @media screen and (max-width: 920px) {
    max-width: 350px;
    flex-direction: column;
    padding: 0 2em;
    justify-content: center;
    height: initial;
    min-height: 730px;

    div:nth-of-type(2) {
      padding-right: 0;
      display: flex;
    }
  }

  @media screen and (max-width: 780px) {
    max-width: 1000px;
    min-height: initial;
    height: fit-content;
    padding: 2em;
  }
`

interface IHeroImageProps {
  imageSource: string
}

export const HeroImage = styled.div<IHeroImageProps>`
  flex: 1;
  height: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => `url('${props.imageSource}')`};

  @media screen and (max-width: 920px) {
    width: 100%;
    background-position: left;
    min-height: 50%;
  }

  @media screen and (max-width: 780px) {
    margin-bottom: 3em;
    min-height: 200px;
  }
`
