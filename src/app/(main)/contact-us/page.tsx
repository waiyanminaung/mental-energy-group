import EntryHeader from "../../components/EntryHeader";

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
                    <a href="tel:+660906394022">090 639 4022</a>
                  </div>
                </div>
                <div className="contact-one__box">
                  <i className="pylon-icon-email1  shrink-0"></i>
                  <div className="contact-one__box-content">
                    <h4>Write Email</h4>
                    <a href="mailto:needhelp@company.com">
                      smallbusinesslike@gmail.com
                    </a>
                  </div>
                </div>
                <div className="contact-one__box">
                  <i className="pylon-icon-pin1 shrink-0"></i>
                  <div className="contact-one__box-content">
                    <h4>Visit Office</h4>
                    <a href="#">
                      29 Sathorn 11 Alley, Soi Saint Louis 3 Yaek 9, Yannawa,
                      Sathorn, Bangkok, Thailand, Bangkok
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-7">
              <form
                action="contact.php"
                method="post"
                className="contact-one__form"
              >
                <div className="row low-gutters">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="form-control contact-one__form-input"
                        name="name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="form-control contact-one__form-input"
                        name="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="form-control contact-one__form-input"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Subject"
                        className="form-control contact-one__form-input"
                        name="subject"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="Write Message"
                        className="contact-one__form-input"
                      ></textarea>
                    </div>
                    <button className="thm-btn" type="submit">
                      Send A Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
