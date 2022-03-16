import React, { useState } from "react";

import Helmet from "../Helmet";

import Messages from "../Messages";

// icons
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { MdOutlineManageAccounts } from "react-icons/md";

import users from "../../assets/fake-data/users";

import messages from "../../assets/fake-data/message";

const Account = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Helmet title="Account">
      <div className="account mt-5">
        <div className="account__poster">
          <img
            className="account__poster__main"
            src={users[0].poster}
            alt="poster"
          />
          <div className="account__poster__mask"></div>
        </div>
        <div className="account__profile">
          <div className="row account__profile__main">
            <div className="col-md-12 col-lg-7 account__profile__main__info">
              <div className="account__profile__main__info__row1 mb-5">
                <img
                  className="account__profile__main__info__row1__avatar"
                  src={users[0].avatar}
                  alt="avatar"
                />
                <div className="account__profile__main__info__row1__contact">
                  <h5>{users[0].name}</h5>
                  <p>{users[0].work}</p>
                </div>
              </div>
              <div className="account__profile__main__info__row2">
                <div className="account__profile__main__info__row2__title mb-4">
                  <h5 className="m-0 p-0">Profile Information</h5>
                  <div style={{ position: "relative" }}>
                    <MdOutlineManageAccounts
                      size={20}
                      className="account__profile__main__info__row2__title__icon"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    />

                    <div
                      className={
                        isHovered
                          ? "account__profile__main__info__row2__title__noti d-block"
                          : "account__profile__main__info__row2__title__noti"
                      }
                    >
                      Edit Profile
                    </div>
                  </div>
                </div>
                <p>{users[0].description}</p>
              </div>
              <ul className="account__profile__main__info__row2">
                <li className="account__profile__main__info__row2__item">
                  <strong className="text-dark">Full Name:</strong> &nbsp;
                  {users[0].name}
                </li>
                <li className="account__profile__main__info__row2__item">
                  <strong className="text-dark">Mobile:</strong> &nbsp;{" "}
                  {users[0].phone}
                </li>
                <li className="account__profile__main__info__row2__item">
                  <strong className="text-dark">Email:</strong> &nbsp;
                  {users[0].email}
                </li>
                <li className="account__profile__main__info__row2__item">
                  <strong className="text-dark">Location:</strong> &nbsp;{" "}
                  {users[0].location}
                </li>
                <li className="account__profile__main__info__row2__social">
                  <strong className="text-dark text-sm">Social:</strong> &nbsp;
                  <a href="facebook.com/etasycandy.os">
                    <BsFacebook size={18} />
                  </a>
                  <a href="facebook.com/etasycandy.os">
                    <AiOutlineTwitter size={23} />
                  </a>
                  <a href="facebook.com/etasycandy.os">
                    <AiOutlineInstagram size={23} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-12 col-lg-5 account__profile__main__second">
              <h5 className="mb-4">Conversations</h5>
              <ul className="account__profile__main__second__message">
                {messages.map((item) => (
                  <Messages
                    key={item.id}
                    name={item.name}
                    avatar={item.avt}
                    content={item.content}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Account;
