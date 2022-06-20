/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import {
  HiChartSquareBar,
  HiCurrencyDollar,
  HiOutlineBriefcase,
  HiOutlineCog,
  HiShoppingBag,
} from 'react-icons/hi';
import { RiVipCrownLine, RiVipDiamondLine } from 'react-icons/ri';

function MenuButton({ href, name, icon }: { href: string; name: string; icon: ReactElement }) {
  const router = useRouter();
  const style = `flex flex-row my-3 py-3 sidebarButton w-full pl-5 cursor-pointer items-center ${
    router.asPath === href && 'sidebarButtonActive'
  } transition ease-in-out duration-300`;

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick}>
      <div className={style}>
        <div className="pr-3 w-10">{icon}</div>
        <p className="text-lg">{name}</p>
      </div>
    </a>
  );
}

function SidebarComponent({ onClose }: any) {
  return (
    <div>
      <div className="menu-wrapper">
        <div className="w-full px-3 py-6">
          <button type="button" className="secondaryButton">
            Connect Wallet
          </button>

          <div className="w-full px-3 pt-6">
            <h1 className="text-lg pl-5 mb-5">Admin Tools</h1>
            <MenuButton href="/" name="Dashboard" icon={<HiChartSquareBar size={30} />} />
            <MenuButton href="/loanbook" name="Loanbook" icon={<HiShoppingBag size={30} />} />
            <MenuButton
              href="/collection"
              name="Collection"
              icon={<HiOutlineBriefcase size={30} />}
            />
            <MenuButton href="/settings" name="Settings" icon={<HiOutlineCog size={30} />} />
          </div>

          <h1 className="text-lg pl-5 my-5">Platform Option</h1>
          <MenuButton href="/lend" name="Lend" icon={<HiCurrencyDollar size={30} />} />
          <MenuButton href="/borrow" name="Borrow" icon={<RiVipDiamondLine size={30} />} />
          <MenuButton href="/crowd-loan" name="Crowd Loan" icon={<RiVipCrownLine size={30} />} />
        </div>
      </div>
      <a className="close-button" onClick={onClose}>
        <i className="fas fa-times" />
      </a>
    </div>
  );
}

export default SidebarComponent;
