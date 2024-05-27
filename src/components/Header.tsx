import React, { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { RiMenuFill } from "react-icons/ri";
import { animateScroll as scroll, Link as ScrollLink } from "react-scroll";
import { Dialog, DialogPanel } from "@headlessui/react";

import { headerNavLinks } from "../entities";
import SocialIcons from "./ui/SocialIcons";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-primary-950/50">
      <nav
        className="flex items-center justify-between px-6 py-3 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <button onClick={handleScrollToTop} className="flex items-center">
            <span className="sr-only">Logo</span>
            <img src="/logo.svg" alt="Logo" />
          </button>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <RiMenuFill className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden md:flex gap-x-12">
          {headerNavLinks.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.href}
              smooth={true}
              offset={-100}
              duration={500}
              className="flex items-center gap-2 text-sm font-normal leading-6 transition duration-150 ease-in-out cursor-pointer"
              activeClass="active-link"
              spy={true}
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>
      </nav>
      <Dialog
        className="-m-2.5 md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50 bg-primary-950 bg-opacity-50 transition-opacity" />
        <DialogPanel className="fixed inset-y-0 bg-primary-950  right-0 z-50 w-full overflow-y-auto px-6 py-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition duration-300 ease-out">
          <div className="flex justify-between sm:justify-end">
            <div className="flex sm:hidden">
              <button onClick={handleScrollToTop} className="flex items-center">
                <span className="sr-only">Logo</span>
                <img src="/logo.svg" alt="Logo" />
              </button>
            </div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <HiMiniXMark className="w-8 h-8 sm:mt-3" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {headerNavLinks.map((item) => (
                  <ScrollLink
                    key={item.name}
                    to={item.href}
                    smooth={true}
                    duration={500}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-6 transition duration-150 ease-in-out cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                    activeClass="text-primary-500  md:active-link"
                    spy={true}
                  >
                    {item.name}
                  </ScrollLink>
                ))}
              </div>
              <div className="lg:hidden pt-8">
                <SocialIcons className="gap-x-8" />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
