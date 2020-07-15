import { FC } from 'react';
import * as SC from './styles';

export interface IInfoCardProps {
  imageSource?: string;
}

const InfoCard: FC<IInfoCardProps> = ({ children, imageSource }) => (
  <SC.InfoCard>
    {imageSource && <img src={imageSource} alt="Hero" />}
    <div>{children}</div>
  </SC.InfoCard>
);

export default InfoCard;
