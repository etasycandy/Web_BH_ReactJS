import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";

import { SiShopify } from "react-icons/si";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { VscAccount } from "react-icons/vsc";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="container-fluid navbar">
          <div className="container navbar__container">
            <div className="navbar__container">
              <Link
                to="/"
                className="navbar__container__logo"
                onClick={closeMobileMenu}
              >
                <SiShopify size={40} className="navbar__container__icon" />
                ECshop
              </Link>

              <div
                className="navbar__container__menu-icon"
                onClick={handleClick}
              >
                {click ? <FaTimes size={40} /> : <FaBars size={40} />}
              </div>

              <ul
                className={
                  click
                    ? "navbar__container__menu active"
                    : "navbar__container__menu"
                }
              >
                <li className="navbar__container__menu__item">
                  <Link
                    to="/"
                    className="navbar__container__menu__item__links"
                    onClick={closeMobileMenu}
                  >
                    Home
                  </Link>
                </li>
                <li className="navbar__container__menu__item">
                  <Link
                    to="/products"
                    className="navbar__container__menu__item__links"
                    onClick={closeMobileMenu}
                  >
                    Products
                  </Link>
                </li>
                <li className="navbar__container__menu__item">
                  <Link
                    to="/contact"
                    className="navbar__container__menu__item__links"
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </Link>
                </li>
                <li className="navbar__container__menu__btn">
                  <Link
                    to="/cart"
                    className="navbar__container__menu__btn-link"
                  >
                    <Button
                      buttonStyle="btn--outline"
                      onClick={closeMobileMenu}
                    >
                      Cart&nbsp;
                      <BsCart4
                        className="cart-icon"
                        size={21}
                        style={{
                          marginBottom: "5px",
                          padding: 0,
                          strokeWidth: "0.5px",
                        }}
                      />
                    </Button>
                  </Link>
                </li>
                <li className="navbar__container__menu__btn">
                  <Link
                    to="/accounts"
                    className="navbar__container__menu__btn-link"
                  >
                    <Button
                      buttonStyle="btn--outline"
                      onClick={closeMobileMenu}
                    >
                      Account&nbsp;
                      <VscAccount
                        className="cart-icon"
                        size={21}
                        style={{
                          marginBottom: "5px",
                          padding: 0,
                          strokeWidth: "0.5px",
                        }}
                      />
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
