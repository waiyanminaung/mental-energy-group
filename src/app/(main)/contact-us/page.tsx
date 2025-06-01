import EntryHeader from "../../components/EntryHeader";
import { contactInfo } from "../data";
import ContactFrom from "./components/ContactFrom";

export default function ContactUsPage() {
  return (
    <div>
      <EntryHeader title="Contact Us" />

      <section className="contact-one">
        <div className="container">
          <div className="grid lg:grid-cols-12">
            <div className="col-span-5">
              <div className="contact-one__content">
                <div className="block-title">
                  <p className="small-title">Get in touch with us</p>
                  <h2 className="title-block">Ask for your query</h2>
                </div>
                <div className="contact-one__box">
                  <i className="pylon-icon-telephone  shrink-0"></i>
                  <div className="contact-one__box-content">
                    <h4>Call Anytime</h4>
                    <a href={contactInfo.phone.link}>
                      {contactInfo.phone.value}
                    </a>
                  </div>
                </div>
                <div className="contact-one__box">
                  <i className="pylon-icon-email1  shrink-0"></i>
                  <div className="contact-one__box-content">
                    <h4>Write Email</h4>
                    <a href={contactInfo.email.link}>
                      {contactInfo.email.value}
                    </a>
                  </div>
                </div>
                <div className="contact-one__box">
                  <i className="pylon-icon-pin1 shrink-0"></i>
                  <div className="contact-one__box-content">
                    <h4>Visit Office</h4>
                    <a href={contactInfo.address.link}>
                      {contactInfo.address.value}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-7">
              <ContactFrom />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
