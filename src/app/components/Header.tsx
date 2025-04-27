"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) return;

  return (
    <header className="main-header main-header__two">
      <nav className="main-menu main-menu__two">
        <div className="container md:py-5 py-3.5">
          <div className="logo-box">
            <a href="\" aria-label="logo image">
              <Image
                src="/images/logo.png"
                width={80}
                height={80}
                className="lg:size-20 size-16"
                alt=""
              />
            </a>
            <span className="fa fa-bars mobile-nav__toggler"></span>
          </div>
          <ul className="main-menu__list">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/services">Service</a>
            </li>
            <li>
              <a href="/contact-us">Contact Us</a>
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
  );
};

export default Header;
