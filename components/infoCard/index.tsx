import { FC } from 'react'
import * as SC from './styles'

export interface IInfoCardProps {
  imageSource?: string
}

const InfoCard: FC<IInfoCardProps> = ({ children, imageSource }) => (
  <SC.InfoCard>
    {imageSource && <SC.HeroImage imageSource={imageSource} />}
    <div>{children}</div>
  </SC.InfoCard>
)

export default InfoCard
