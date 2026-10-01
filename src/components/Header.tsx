import { LOGO_IMG } from '../utils/constants';
import { NAV_LINKS } from '../data/navbarData';
import { Link } from 'react-router-dom';
import AnimationButton from './AnimationButton';
import NavigationMenu from './NavigationMenu';
import { useState } from 'react';

export const Header = () => {
  const [navigationMenuActive, setNavigationMenuActive] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className=" w-full">
      <nav className="!mt-[35px] hidden w-full relative wrapper lg:flex items-center justify-between">
        <img className="max-w-[200px] w-full h-[65px]  object-cover" src={LOGO_IMG}></img>
        <ul className="flex items-center gap-[35px]">
          <Link className="font-nohemi uppercase font-medium text-[14px] text-[#FFFFFF]" to="/about">
            About
          </Link>
          <div
            onMouseEnter={() => setNavigationMenuActive(true)}
            className=" group font-nohemi flex items-center gap-1 uppercase font-medium text-[14px] text-[#FFFFFF]">
            Industries
            <img
              className={` ${navigationMenuActive ? 'transition-transform duration-300 rotate-180' : 'transition-transform duration-300 '}`}
              src="/images/downarrow.svg"
              alt=""
            />
            {navigationMenuActive && (
              <div
                onMouseEnter={() => setNavigationMenuActive(true)}
                onMouseLeave={() => setNavigationMenuActive(false)}
                className="absolute top-[70px] right-0    w-fit ">
                <div className="w-full flex justify-end  relative">
                  <NavigationMenu />
                </div>
              </div>
            )}
          </div>

          {NAV_LINKS.map(navItem => (
            <Link
              className="font-nohemi uppercase font-medium text-[14px] text-[#FFFFFF]"
              to={navItem.href}
              key={navItem.id}>
              {navItem.label}
            </Link>
          ))}
          <AnimationButton
            children="Contact"
            bg="#F05430"
            hoverBg="#dc3d20"
            circleBg="#ffffff"
            buttonclass="h-[56px] w-[158px] p-[4px] pl-[16px] text-[14px] "
            arrow="/icons/arrow-icon-orange.svg"
          />
        </ul>
      </nav>

      <nav className="lg:hidden   w-full">
        <div
          className={`fixed top-0 right-0 z-0 h-screen w-full sm:w-[350px] bg-black transform transition-transform duration-300 ease-in-out lg:hidden ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          <ul className="flex mt-[70px] flex-col items-center gap-[50px]">
            <Link className="font-nohemi uppercase font-medium text-[14px] text-[#FFFFFF]" to="/about">
              About
            </Link>
            <button
              onClick={() => setNavigationMenuActive(prev => !prev)}
              className=" group cursor-pointer font-nohemi flex items-center gap-1 uppercase font-medium text-[14px] text-[#FFFFFF]">
              Industries
              <img
                className={` ${navigationMenuActive ? 'transition-transform duration-300 rotate-180' : 'transition-transform duration-300 '}`}
                src="/images/downarrow.svg"
                alt=""
              />
            </button>
            {navigationMenuActive && (
              <div className="     w-fit ">
                <div className="w-full flex justify-end  relative">
                  <NavigationMenu />
                </div>
              </div>
            )}

            {NAV_LINKS.map(navItem => (
              <Link
                className="font-nohemi uppercase font-medium text-[14px] text-[#FFFFFF]"
                to={navItem.href}
                key={navItem.id}>
                {navItem.label}
              </Link>
            ))}
            <AnimationButton
              children="Contact"
              bg="#F05430"
              hoverBg="#dc3d20"
              circleBg="#ffffff"
              buttonclass="h-[56px] w-[158px] p-[4px] pl-[16px] text-[14px] "
              arrow="/icons/arrow-icon-orange.svg"
            />
          </ul>
        </div>
        <div className="!mt-[35px] w-full wrapper  flex items-center justify-between">
          <img className="max-w-[200px] w-full h-[65px]  object-cover" src={LOGO_IMG}></img>

          <label
            className={`z-50  cursor-pointer inline-block cursor-pointer select-none ${
              open ? 'fixed top-[55px] right-[3%]' : 'relative'
            }`}>
            <input
              type="checkbox"
              checked={open}
              onChange={e => setOpen(e.target.checked)}
              className="peer absolute h-0 w-0 cursor-pointer opacity-0"
            />
            <div className="relative h-6 w-8">
              <span
                className={`absolute left-0 h-[2px] w-full bg-white transition-all duration-300 ease-in-out ${open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-[10%]'}`}
              />
              <span
                className={`absolute left-0 top-1/2 h-[2px] w-full bg-white transition-all duration-300 ease-in-out ${open ? '-translate-y-1/2 -rotate-45' : '-translate-y-1/2'}`}
              />
              <span
                className={`absolute left-0 top-[82%] h-[2px] w-full bg-white transition-all duration-300 ease-in-out ${open ? '-translate-x-full opacity-0' : ''}`}
              />
            </div>
          </label>
        </div>
      </nav>
    </header>
  );
};
