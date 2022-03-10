import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";

// import react icons
import { SiShopify } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsYoutube, BsTwitter, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      <section className="footer__subscr">
        <p className="footer__subscr__heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer__subscr__text">You can unsubscribe at any time.</p>
        <div className="footer__subscr__form">
          <form className="row">
            <div
              style={{ height: "100%", marginBottom: "16px" }}
              className="col-sm-12 col-md-8"
            >
              <input
                className="footer__subscr__input"
                name="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div style={{ height: "100%" }} className="col-sm-12 col-md-4">
              <Button
                buttonClassName="footer__subscr__form__btns "
                buttonStyle="btn--outline"
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </section>
      <div className="row footer__links">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          className="col-sm-12 col-md-6 col-lg-3"
        >
          <div className="footer__links__items">
            <h3>About Us</h3>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          className="col-sm-12 col-md-6 col-lg-3"
        >
          <div className="footer__links__items">
            <h3>Contact Us</h3>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          className="col-sm-12 col-md-6 col-lg-3"
        >
          <div className="footer__links__items">
            <h3>Videos</h3>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          className="col-sm-12 col-md-6 col-lg-3"
        >
          <div className="footer__links__items">
            <h3>Social Media</h3>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="row footer__media">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="col-sm-12 col-md-4"
        >
          <Link to="/" className="footer__media__logo">
            <SiShopify size={40} style={{ marginRight: ".2rem" }} />
            ECshop
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="col-sm-12 col-md-4 mt-4 mb-4"
        >
          <div className="footer__media__icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebookF size={25} />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <BsInstagram size={25} />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <BsYoutube size={25} />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <BsTwitter size={25} />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <BsLinkedin size={25} />
            </Link>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="col-sm-12 col-md-4"
        >
          <small className="footer__media__copyrights">
            Copyright © 2022 ECshop.
          </small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
