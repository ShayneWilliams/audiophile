import React from 'react';
import MobileNav from './MobileNav';
import TabletNav from './TabletNav';
import DesktopNav from './DesktopNav';
import useMediaQuery from '../useMediaQuery';

export default function Nav() {
  const isMobile = useMediaQuery(500);
  const isTablet = useMediaQuery(800);
  let output = <MobileNav />;

  if (isMobile === false && isTablet === true) {
    output = <TabletNav />;
  }

  if (isMobile === false && isTablet === false) {
    output = <DesktopNav />;
  }

  return (
    <>
      <nav className="  w-full absolute left-0 ">
        <div className="w-full text-white">{output}</div>
      </nav>
      <div className="w-full h-[90px]" />
    </>
  );
}
