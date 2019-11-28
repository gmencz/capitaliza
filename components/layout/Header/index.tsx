import * as SC from './styles'
import { useSidebarValue } from '../../../context/Sidebar/Provider'
import { FC, useState } from 'react'

interface IHeaderProps {
  scrollPosition: {
    prevX: number
    prevY: number
    currentX: number
    currentY: number
  }
}

const Header: FC<IHeaderProps> = ({ scrollPosition }): JSX.Element => {
  const [_, dispatch] = useSidebarValue()
  let shouldShow = true
  let isAfterHero = false

  const { prevX, prevY, currentX, currentY } = scrollPosition

  console.log(currentY)

  if (currentY < prevY) {
    shouldShow = false
  } else {
    shouldShow = true
  }

  if (currentY <= -520) {
    isAfterHero = true
  } else {
    isAfterHero = false
  }

  return (
    <SC.Header shouldShow={shouldShow} isAfterHero={isAfterHero}>
      <div>
        <SC.Burger
          onClick={() => dispatch({ type: 'OPEN_SIDEBAR' })}
          inSidebar={false}
        >
          <div></div>
          <div></div>
          <div></div>
        </SC.Burger>
        <h1>capitaliza &reg;</h1>
      </div>
      <SC.LanguageSelector>ES</SC.LanguageSelector>
    </SC.Header>
  )
}

export default Header
