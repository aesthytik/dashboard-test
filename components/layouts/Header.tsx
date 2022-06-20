import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { useState } from 'react';
import MySidebar from './MobileSidebar';

const padding =
  'px-4 py-4 sm:px-6 sm:py-4 md:px-8 md:py-6 lg:px-8 lg:py-6 xl:px-8 xl:py-6 2xl:px-8 2xl:py-6';
const hiddenMobile = `hidden sm:block md:block lg:block xl:block 2xl:block`;
const showMobile = `block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden`;

const responsivePadding = `${padding}`;
function Header({ headerName }: { headerName: string }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={`flex w-ful justify-between items-center sticky top-0 bg-backgroundLight z-10 ${responsivePadding}`}
    >
      <h1 className={`text-4xl font-bold ${hiddenMobile}`}>{headerName}</h1>
      <img
        src="/https://www.adobe.com/creativecloud/design/discover/mascot-logo-design.html"
        alt="logo"
        className={showMobile}
      />

      <MySidebar isActive={isActive} onSetOpen={(value: boolean) => setIsActive(value)} />
      <div className={`${showMobile} `}>
        <HiOutlineMenuAlt2 color="#ffffff" size={32} onClick={() => setIsActive(true)} />
      </div>
      <div className={hiddenMobile}>
        <button type="button" className="secondaryButton">
          Connect Wallet
        </button>
      </div>
    </div>
  );
}

Header.defaultProps = {};

Header.propTypes = {};

export default Header;
