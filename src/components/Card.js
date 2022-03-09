import React from "react";

class Card extends React.Component {
  render() {
    const icon = this.props.icon;
    const title = this.props.title;
    const content = this.props.content;

    return (
      <div className="list-card">
        <div className="row card">
          <div className="col-3 card__image">{icon}</div>
          <div className="col-9 card__main">
            <h4 className="card__main__title">{title}</h4>
            <small className="card__main__content">{content}</small>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
