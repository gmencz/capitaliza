import { FC } from 'react'
import * as SC from './styles'

interface IInfoCardProps {
  imageSource: string
}

const InfoCard: FC<IInfoCardProps> = ({ children, imageSource }) => (
  <SC.InfoCard>
    <SC.HeroImage imageSource={imageSource} />
    <div>{children}</div>
  </SC.InfoCard>
)

export default InfoCard
