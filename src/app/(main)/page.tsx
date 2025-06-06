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
} from "./data";

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
                    <Image src={item.icon} alt="" width={60} height={60} />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-two" id="about-us-section">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-6">
            <div
              className="lg:col-span-5 wow fadeInLeft"
              data-wow-duration="1500ms"
            >
              <div className="about-two__image">
                <Image
                  src="/images/about.jpg"
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
                    Medical Tourism Assistance
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Travel and Tour
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Passport, Visa and Document Assistance
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Manpower Service
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Document Translation and Interpreter
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
            <a href="/contact-us" className="thm-btn">
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
                  className="service-second lg:basis-[calc(33%-16px)] basis-full"
                  key={service.id}
                >
                  <div className="service-second-info-icon">
                    <div className="service-icon2">
                      <Image src={service.icon} alt="" width={50} height={50} />
                    </div>
                    <h3>
                      <a href={`services/${service.link}`}>{service.title}</a>
                    </h3>
                  </div>
                  <div className="service-second__content">
                    <a
                      href={`services/${service.link}`}
                      className="service-two__card-link"
                    >
                      <i className="pylon-icon pylon-icon-right-arrow"></i>Read
                      More
                    </a>
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
                  <p>Frequently Asked Questions </p>
                  <h2>Most of the People Trust on Us For Fast Services</h2>
                </div>
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
