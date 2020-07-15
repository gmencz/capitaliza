import styled from 'styled-components';
import { IInfoCardProps } from './index';

export const InfoCard = styled.article<IInfoCardProps>`
  z-index: 2;
  display: flex;
  align-items: center;
  max-width: 1100px;
  width: 100%;

  &:not(:last-of-type) {
    margin-bottom: 10rem;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.4;
    color: rgb(17, 51, 85);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.95rem;
    font-weight: 400;
    line-height: 1.5;
    opacity: 0.75;
    color: #000;
  }

  & > img {
    width: 100%;
    max-width: 375px;
    margin-right: 5rem;
    height: 300px;
    object-fit: cover;
  }

  & > div {
    flex: 1;
  }

  &:nth-of-type(even) {
    & > img {
      order: 2;
      margin-right: 0;
      margin-left: 5rem;
    }
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;

    & > img {
      order: 2;
      margin-top: 3rem;
      max-width: 100%;
    }

    &:nth-of-type(even) {
      & > img {
        order: 2;
        margin-right: 0;
        margin-left: 0;
      }
    }
  }
`;
