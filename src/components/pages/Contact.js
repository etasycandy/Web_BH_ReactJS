import React from "react";

import Helmet from "../Helmet";
import Map from "../Map";

function Contact() {
  return (
    <Helmet title="Contact">
      <div className="contact">
        <div className="contact__content">
          <div className="contact__content__introduce">
            <h2>Contact us</h2>
            <p>
              In order to continuously improve service quality and better meet
              your requirements, we look forward to receiving your feedback. If
              you have any questions or comments, please contact us using the
              information below. We will respond to you as soon as possible.
            </p>
          </div>
          <div className="contact__content__line"></div>
          <div className="row contact__content__main">
            <div className="col-sm-12 col-md-7 contact__content__main__infomation">
              <h2>Contact information</h2>
              <div className="contact__content__main__infomation__info-our">
                <b>Address : </b>
                <a
                  href="https://goo.gl/maps/Qh795D4R3XKtZQqDA"
                  target="blank"
                  id="address"
                >
                  {" "}
                  33 Xô Viết Nghệ Tĩnh, Hải Châu, Đà Nẵng
                </a>
              </div>
              <div className="contact__content__main__infomation__info-our">
                <b>Tel : </b>
                <a href="tel:0394105261" id="tel">
                  {" "}
                  +84 394 105 261
                </a>
              </div>
              <div className="contact__content__main__infomation__info-our">
                <b>Email : </b>
                <a href="mailto:hoang44004@donga.edu.vn" id="email">
                  {" "}
                  hoang44004@donga.edu.vn
                </a>
              </div>
              <p className="contact__content__main__infomation__info-our">
                Learn to love yourself, simply buy something new then enjoy a
                cool, beautiful self. Why not? Let us advise you!!!
              </p>
            </div>
            <div className="col-sm-12 col-md-5 contact__content__main__ggmap">
              <h2>Address</h2>
              <div className="map">
                <Map
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.6414424651944!2d108.21885611536088!3d16.032170144687267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421946f79555fb%3A0x5c8b97c38afc659d!2zMzMgWMO0IFZp4bq_dCBOZ2jhu4cgVMSpbmgsIEhvw6AgQ8aw4budbmcgTmFtLCBI4bqjaSBDaMOidSwgxJDDoCBO4bq1bmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1625304955296!5m2!1svi!2s"
                  width={250}
                  height={250}
                  style={{ border: "none" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
}

export default Contact;
