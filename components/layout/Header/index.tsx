import * as SC from './styles';
import { useSidebarValue } from '../../../context/Sidebar/Provider';
import { FC, useState, useEffect } from 'react';
import Link from 'next/link';

interface IHeaderProps {
  scrollPosition: {
    prevX: number;
    prevY: number;
    currentX: number;
    currentY: number;
  };
  isHomepage: boolean;
}

const Header: FC<IHeaderProps> = ({
  scrollPosition,
  isHomepage,
}): JSX.Element => {
  const [_, dispatch] = useSidebarValue();
  let shouldShow = true;
  let isAfterHero = false;

  const { prevX, prevY, currentX, currentY } = scrollPosition;

  if (currentY < prevY && isHomepage) {
    shouldShow = false;
  } else {
    shouldShow = true;
  }

  if (currentY <= -520 && isHomepage) {
    isAfterHero = true;
  } else if (currentY > -520 && isHomepage) {
    isAfterHero = false;
  }

  return (
    <SC.Header
      isHomepage={!isHomepage ? isAfterHero : isHomepage}
      shouldShow={shouldShow}
      isAfterHero={isAfterHero}
    >
      <div>
        <SC.Burger
          isHomepage={!isHomepage ? isAfterHero : isHomepage}
          onClick={() => dispatch({ type: 'OPEN_SIDEBAR' })}
          inSidebar={false}
        >
          <div></div>
          <div></div>
          <div></div>
        </SC.Burger>
        <h1>capitaliza</h1>
      </div>
    </SC.Header>
  );
};

export default Header;
