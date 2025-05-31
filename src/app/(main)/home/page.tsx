"use client";

import Image from "next/image";
import LogoSection from "./components/LogoSection";
import { useState } from "react";
import TeamSection from "./components/TeamSection";
import HeroSlider from "./components/HeroSlider";
import {
  contactInfo,
  faqData,
  highlightData,
  logosData,
  servicesData,
  sliderData,
} from "../data";

export default function HomePage() {
  const [activeId, setActiveId] = useState("faq1");

  return (
    <>
      <HeroSlider data={sliderData} />

      <section className="service-two">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-6">
            {highlightData.map((item) => {
              return (
                <div key={item.id}>
                  <div className="service-two__card">
                    <i className="pylon-icon-consumer-behavior"></i>
                    <h3>
                      <a href="service-details.html">{item.title}</a>
                    </h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-two">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-6">
            <div
              className="lg:col-span-5 wow fadeInLeft"
              data-wow-duration="1500ms"
            >
              <div className="about-two__image">
                <Image
                  src="/images/resources/about-2-2.png"
                  alt=""
                  width={500}
                  height={602}
                />
                <div className="about-two__box">
                  <i className="pylon-icon-assets"></i>
                  <h3>10 Years of Working Expericence</h3>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="about-two__content">
                <div className="block-title text-left">
                  <p>Company Introductions</p>
                  <h2>About Us</h2>
                </div>
                <p>
                  We specialize in providing end-to-end support for individuals
                  and families seeking medical travel, embassy documentation,
                  visa and passport assistance, and local real estate services.
                  Whether you&apos;re planning a treatment journey, securing
                  official documents, or finding a new home, we’re here to make
                  the process smooth, safe, and stress-free.
                </p>
                <ul className="list-unstyled about-two__list">
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Medical Tourism Support
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Comprehensive travel planning and support
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Property sales, purchases, and rental assistance
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Passport and visa application support
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Professional interpretation and job recruitment assistance
                  </li>
                </ul>
                <div className="button-wrap">
                  <div className="main-header__info-phone">
                    <i className="pylon-icon-tech-support"></i>
                    <div className="main-header__info-phone-content">
                      <span>Call US</span>
                      <h3>
                        <a href={contactInfo.phone.link}>
                          {contactInfo.phone.value}
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="call-to-action">
        <div className="container">
          <div className="left-content">
            <h3>Need Help?</h3>
          </div>
          <div className="right-content">
            <a href="apply-now.html" className="thm-btn">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="service-one__home-two">
        <div className="container">
          <div className="block-title text-center">
            <p>What We’re Offering</p>
            <h2>All Services</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {servicesData.map((service) => {
              return (
                <div
                  className="service-second lg:basis-[calc(33%-16px)]"
                  key={service.id}
                >
                  <div className="service-second-info-icon">
                    <div className="service-icon2">
                      <i className="flaticon-car-loan"></i>
                    </div>
                    <h3>
                      <a href={`services/${service.link}`}>{service.title}</a>
                    </h3>
                  </div>
                  <div className="service-second__content">
                    {/* <p>{service.description}</p> */}
                    <a
                      href={`services/${service.link}`}
                      className="service-two__card-link"
                    >
                      <i className="pylon-icon pylon-icon-right-arrow"></i>Read
                      More
                    </a>
                    <div className="service-second-right-icon-box">
                      <div className="service-second-right-icon">
                        <i className="flaticon-car-loan"></i>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <LogoSection data={logosData} />

      <section className="faq-one">
        <div
          className="faq-one__bg"
          style={{
            backgroundImage: `url(/images/shapes/trust-bg-1-1.png)`,
          }}
        />
        <div className="container">
          <div className="grid lg:grid-cols-2">
            <div>
              <div className="faq-one__content">
                <div className="block-title text-left">
                  <p>What We’re Offering</p>
                  <h2>Most of the People Trust on Us For Fast Services</h2>
                </div>
                <p>
                  Scelerisque eleifend donec pretium vulputate sapien. Nibh
                  tellus molestie nunc non. Tristique risus nec feugiat in
                  fermentum posuere urna. Duis aute irure dolor lipsum is
                  simply. quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidata sunt in culpa qui
                  offia deserunt mollit anim id est laborum.Phasellus faucibus
                  scelerisque eleifend donec. Tincidunt arcu non sodales neque
                  sodales ut.
                </p>
              </div>
            </div>
            <div>
              <ul id="accordion" className="space-y-4">
                {faqData.map((faq) => (
                  <li key={faq.id} className="border-b border-gray-200">
                    <h2
                      className={`para-title cursor-pointer ${
                        activeId === faq.id ? "active" : ""
                      }`}
                      onClick={() =>
                        setActiveId(activeId === faq.id ? "" : faq.id)
                      }
                    >
                      <span className="flex items-center gap-2">
                        <i
                          className={`fas ${
                            activeId === faq.id ? "fa-minus" : "fa-plus"
                          }`}
                        ></i>
                        {faq.question}
                      </span>
                    </h2>
                    <div
                      className={`transition-all duration-300 overflow-hidden ${
                        activeId === faq.id ? "max-h-40" : "max-h-0"
                      }`}
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />
    </>
  );
}
