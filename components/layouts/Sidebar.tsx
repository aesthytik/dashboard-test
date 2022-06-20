import PropTypes from 'prop-types';
import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { HiChartSquareBar, HiShoppingBag, HiOutlineBriefcase, HiOutlineCog } from 'react-icons/hi';

const responsive = `hidden sm:hidden md:hidden lg:block xl:block 2xl:block`;
const padding = `py-4 sm:py-6 md:py-8 lg:py-8 xl:py-8 2xl:py-8`;
function MenuButton({ href, name, icon }: { href: string; name: string; icon: ReactElement }) {
  const router = useRouter();
  const style = `flex flex-row my-3 py-3 hover:bg-gray-600 hover:rounded-2xl w-full pl-5 cursor-pointer items-center transition ease-in-out duration-300`;

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick}>
      <div className={style}>
        <div className="pr-3 w-10">{icon}</div>
        <p className={`text-lg ${responsive}`}>{name}</p>
      </div>
    </a>
  );
}

function Sidebar() {
  return (
    <div className="flex flex-col items-start sticky top-0 px-5">
      <div className={`${padding} pl-6`}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Wikimedia-logo.svg/800px-Wikimedia-logo.svg.png"
          alt="logo"
          width={80}
          className={responsive}
        />
        <img
          src="/logo2.png"
          alt="logo"
          className="block sm:block md:block lg:hidden xl:hidden 2xl:hidden"
        />
      </div>

      <div className="w-full px-3">
        <MenuButton href="/" name="Home" icon={<HiChartSquareBar size={30} />} />
        <MenuButton href="/loanbook" name="Visitor" icon={<HiShoppingBag size={30} />} />
        <MenuButton href="/collection" name="Analytics" icon={<HiOutlineBriefcase size={30} />} />
        <MenuButton href="/settings" name="Settings" icon={<HiOutlineCog size={30} />} />
      </div>
    </div>
  );
}

MenuButton.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Sidebar;
