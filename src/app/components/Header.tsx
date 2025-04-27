"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const isHomePage = pathname === "/";

  if (isHomePage) return;

  const toggleMobileNav = () => {
    setMobileNavVisible(!mobileNavVisible);
  };

  const mobileMenuClick = (link: string) => {
    router.push(link);
    setMobileNavVisible(false);
  };

  return (
    <>
      <header className="main-header main-header__two">
        <nav className="main-menu main-menu__two">
          <div className="container md:py-5 py-3.5">
            <div className="logo-box">
              <a href="/home" aria-label="logo image">
                <Image
                  src="/images/logo.png"
                  width={80}
                  height={80}
                  className="lg:size-20 size-16"
                  alt=""
                />
              </a>
              <span
                className={`fa fa-bars mobile-nav__toggler ${
                  mobileNavVisible ? "mobile-nav__toggler--active" : ""
                }`}
                onClick={toggleMobileNav}
              ></span>
            </div>
            <ul className="main-menu__list hidden lg:flex">
              <li>
                <Link href="/home">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>

            <div className="main-header__info">
              <div className="main-header__info-phone">
                <i className="pylon-icon-tech-support"></i>
                <div className="main-header__info-phone-content">
                  <span>Call US</span>
                  <h3>
                    <a href="tel:+660906394022">090 639 4022</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/25  transition-opacity duration-300 z-40 ${
          mobileNavVisible ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMobileNav}
      >
        <div
          className={`fixed top-0 right-0 w-full h-full bg-[#0c2139] transform transition-transform duration-300 ${
            mobileNavVisible ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <Image
                src="/images/logo.png"
                width={60}
                height={60}
                alt="Mobile Logo"
              />
              <button onClick={toggleMobileNav} className="text-2xl">
                ×
              </button>
            </div>

            <ul className="space-y-4">
              <li>
                <button
                  type="button"
                  onClick={() => mobileMenuClick("/home")}
                  className="block py-2 text-[#b0c2d7] hover:text-[#dbb481]"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => mobileMenuClick("/services")}
                  className="block py-2 text-[#b0c2d7] hover:text-[#dbb481]"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => mobileMenuClick("/contact-us")}
                  className="block py-2 text-[#b0c2d7] hover:text-[#dbb481]"
                >
                  Contact Us
                </button>
              </li>
            </ul>

            <div className="mt-8 pt-8 border-t">
              <div className="flex items-center gap-3">
                <i className="pylon-icon-tech-support text-[#dbb481]  text-3xl"></i>
                <div>
                  <span className="text-sm text-[#b0c2d7]">Call US</span>
                  <h3>
                    <a
                      href="tel:+660906394022"
                      className="text-lg font-bold text-white"
                    >
                      090 639 4022
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
