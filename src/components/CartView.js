import React from "react";
import numberWithCommas from "../utils/numberWithCommas";

import { Button } from "./Button";

// icons
import { GrSubtract, GrAdd } from "react-icons/gr";

const CartView = (props) => {
  return (
    <tr>
      <td className="cart__list-product__image ">
        <div className="d-flex justify-content-center align-items-center">
          <img src={props.image} alt="" />
        </div>
      </td>
      <td>
        <div
          className="font__family d-flex justify-content-center align-items-center"
          style={{ height: "5rem" }}
        >
          {props.name}
        </div>
      </td>
      <td
        className="d-flex justify-content-center align-items-center"
        style={{ height: "7.5rem" }}
      >
        <Button
          buttonStyle="btn--outline"
          buttonClassName="cart__list-product__btn"
          buttonColor="subtract"
        >
          <GrSubtract />
        </Button>
        <div className="font__family">{1}</div>
        <Button
          buttonStyle="btn--outline"
          buttonClassName="cart__list-product__btn"
          buttonColor="add"
        >
          <GrAdd />
        </Button>
      </td>
      <td>
        <div
          className="font__family d-flex justify-content-center align-items-center"
          style={{ height: "5rem" }}
        >
          {numberWithCommas(props.price)}
        </div>
      </td>
    </tr>
  );
};

export default CartView;
