/* eslint-disable @next/next/no-img-element */

import { listMenu } from '@/constant';
import { FC, useEffect, useState } from 'react';
import { BiBell } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
const Navbar: FC = () => {
  const [isShow, setIsShow] = useState(false);

  const transitionHandler = () => {
    if (window.scrollY > 100) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionHandler);
    return () => window.removeEventListener('scroll', transitionHandler);
  }, []);
  return (
    <nav
      className={`${
        isShow && 'bg-netflix-black-primary'
      } ease-in transition-all text-white w-full fixed  px-20 py-7 z-40`}
    >
      <div className="lg:left-14 left-10 top-4 fixed flex">
        <img
          className="w-[92.5px] h-[25px] mr-10"
          src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png"
          alt="logo"
        />

        <ul className="flex gap-4">
          {listMenu?.map(val => (
            <li
              key={val}
              className="cursor-pointer hover:opacity-40 transition-all ease-in-out duration-[.5s]"
            >
              {val}
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:right-14 right-10 top-4 fixed flex items-center gap-5">
        <span className="cursor-pointer">
          <FiSearch />
        </span>
        <span className="cursor-pointer">
          <BiBell />
        </span>
        <img
          className="w-[25px] h-[25px]"
          alt="profile"
          src="https://occ-0-6710-64.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXC1t6lXR3HwUSdT-nYF2zx91GIsT6GsWmQjDwxHpe6MAqytIdpMfgxEiGthBOs1NJThmP9uZt-Onlrb8vDiN3GyXWeemq8.png?r=332"
        />
      </div>
    </nav>
  );
};

export default Navbar;
