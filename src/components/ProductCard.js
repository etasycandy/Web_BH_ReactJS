import React from "react";

import { Link } from "react-router-dom";

// import { Button } from "./Button";
import numberWithCommas from "../utils/numberWithCommas";

const ProductCard = (props) => {
  const priceOld = [];

  if (props.priceOld > 0) {
    priceOld.push(
      <span key={1} className="product-card__info__price-old">
        <del>{numberWithCommas(props.priceOld)}</del>
      </span>
    );
  } else {
    priceOld.push(<span key={1} className="d-none"></span>);
  }

  return (
    <div className={props.class}>
      <div className="product-card">
        <div className="product-card__info">
          <Link to={`/products/${props.slug}`}>
            <div className="product-card__info__image">
              <img src={props.img01} alt="" />
              <img src={props.img02} alt="" />
            </div>
            <h3 className="product-card__info__name">{props.name}</h3>
            <div className="product-card__info__price">
              {numberWithCommas(props.price)}
              {priceOld}
            </div>
          </Link>
          {/* <div className="product-card__btn">
            <Button buttonStyle="btn--primary" buttonColor="blue">
              Add to cart
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
