import React, { useEffect, useState } from "react";
import { animateScroll as scroll, Link as ScrollLink } from "react-scroll";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

import SocialIcons from "./SocialIcons";

const navigation = [
  { name: "About", href: "about" },
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          setShowHeader(false);
        } else {
          setShowHeader(true);
        }
        setLastScrollY(window.scrollY);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);

      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <motion.header
      className={"fixed inset-x-0 top-0 z-50"}
      initial={{ y: 0 }}
      animate={{ y: showHeader ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <nav
        className="flex items-center bg-primary-950 justify-between px-6 py-3 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" onClick={() => scroll.scrollToTop()}>
            <span className="sr-only">Mupa's Logo</span>
            <img src="/logo.svg" alt="Logo" />
          </a>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden md:flex gap-x-12">
          {navigation.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.href}
              smooth={true}
              duration={500}
              className="text-sm font-normal leading-6 transition duration-150 ease-in-out cursor-pointer"
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
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity" />
        <DialogPanel className="fixed inset-y-0 bg-primary-950 right-0 z-50 w-full overflow-y-auto px-6 py-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition duration-300 ease-out">
          <div className="flex justify-between sm:justify-end">
            <div className="flex sm:hidden">
              <a href="/" onClick={() => scroll.scrollToTop()}>
                <span className="sr-only">Mupa's Logo</span>
                <img src="/logo.svg" alt="Logo" />
              </a>
            </div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 sm:mt-3" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <ScrollLink
                    key={item.name}
                    to={item.href}
                    smooth={true}
                    duration={500}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 transition duration-150 ease-in-out cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                    activeClass="active-link"
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
    </motion.header>
  );
};

export default Header;
