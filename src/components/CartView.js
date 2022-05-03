import React, { useEffect, useState } from "react";
import numberWithCommas from "../utils/numberWithCommas";


import { Button } from "./Button";

// icons
import { GrSubtract, GrAdd } from "react-icons/gr";

const CartView = (props) => {
  const {id, image, name, price, color, size, quantity, priceTotal} = props

  const handleIncreament = () => {

  }
  
  const handleDecreament = () => {

  }
  return (
    <tr>
      <td className="cart__list-product__image ">
        <div className="d-flex justify-content-center align-items-center">
          <img src={image} alt="" />
        </div>
      </td>
      <td>
        <div
          className="font__family d-flex justify-content-center align-items-center"
          style={{ height: "5rem" }}
        >
          {name}
        </div>
      </td>
      <td>
        <div
          className="font__family d-flex justify-content-center align-items-center"
          style={{ height: "5rem", textTransform: "uppercase" }}
        >
          {color}
        </div>
      </td>
      <td>
        <div
          className="font__family d-flex justify-content-center align-items-center"
          style={{ height: "5rem", textTransform: "uppercase" }}
        >
          {size}
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
          onClick={handleDecreament}
        >
          <GrSubtract />
        </Button>
        <div className="font__family">{quantity}</div>
        <Button
          buttonStyle="btn--outline"
          buttonClassName="cart__list-product__btn"
          buttonColor="add"
          onClick={handleIncreament}
        >
          <GrAdd />
        </Button>
      </td>
      <td>
        <div
          className="font__family d-flex justify-content-center align-items-center"
          style={{ height: "5rem" }}
        >
          {numberWithCommas(priceTotal)}
        </div>
      </td>
    </tr>
  );
};

export default CartView;
