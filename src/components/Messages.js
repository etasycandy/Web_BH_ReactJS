import React from "react";

const Messages = (props) => {
  return (
    <a href="/">
      <li className="d-flex account__profile__main__second__message__main">
        <div className="account__profile__main__second__message__main__avt">
          <img src={props.avatar} alt="avatar" />
        </div>
        <div className="account__profile__main__second__message__main__content">
          <h5>{props.name}</h5>
          <p>{props.content}</p>
        </div>
      </li>
    </a>
  );
};

export default Messages;
