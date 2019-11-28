import styled from 'styled-components'

export const InfoCard = styled.article`
  z-index: 2;
  margin-bottom: 4em;
  display: flex;
  height: 310px;
  align-items: center;
  max-width: 1000px;
  border: 1px solid rgb(231, 235, 238);

  p {
    font-size: 2rem;
  }

  div:nth-of-type(2) {
    width: 50%;
    padding-right: 10em;
  }
`

interface IHeroImageProps {
  imageSource: string
}

export const HeroImage = styled.div<IHeroImageProps>`
  width: 50%;
  height: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => `url('${props.imageSource}')`};
`
