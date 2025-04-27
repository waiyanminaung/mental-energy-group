import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="grid sm:grid-cols-3 grid-cols-2 gap-6 justify-content-between">
            <div>
              <div className="footer-widget footer-widget__about">
                <a href="#">
                  <Image src="/images/logo.png" width={80} height={80} alt="" />
                </a>
                <p>
                  Welcome to Mental Energy company we are provide medical
                  tourism, travel and transport embassy document, passport,
                  visa, work Permit and real estate agent.
                </p>
                <div className="footer-widget__about-phone">
                  <i className="pylon-icon-tech-support"></i>
                  <div className="footer-widget__about-phone-content">
                    <span>Call US</span>
                    <h3>
                      <a href="tel:+660906394022">+66 090 639 4022</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:ps-16">
              <div className="footer-widget footer-widget__link">
                <h3 className="footer-widget__title">Explore</h3>
                <ul className="list-unstyled footer-widget__link-list">
                  <li>
                    <a href="#">
                      <i className="fa fa-arrow-right"></i>About
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-arrow-right"></i>Our Services
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fa fa-arrow-right"></i>Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="footer-widget footer-widget__contact">
                <h3>Contact</h3>
                <ul className="list-unstyled footer-widget__contact-list">
                  <li>
                    <a href="mailto:smallbusinesslike@gmail.com">
                      <i className="pylon-icon-email1"></i>
                      smallbusinesslike@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="pylon-icon-clock2"></i>Mon - Sat 8:00 AM -
                      6:00 PM
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="pylon-icon-pin1"></i>29 Sathorn 11 Alley,
                      Soi Saint Louis 3 Yaek 9, Yannawa, Sathorn, Bangkok,
                      Thailand, Bangkok
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bottom-footer">
        <div className="container">
          <p>© Copyright 2025 by Mental Energy Group</p>
          <div className="bottom-footer__social">
            <a
              href="https://www.facebook.com/smallbusinesslike"
              className="fab fa-facebook-f"
            ></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-pinterest-p"></a>
            <a href="#" className="fab fa-instagram"></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
