import React, { useEffect, useState } from "react";
import numberWithCommas from "../utils/numberWithCommas";

import { Button } from "./Button";

// icons
import { GrSubtract, GrAdd } from "react-icons/gr";
import cart from "../assets/fake-data/cart";

const CartView = (props) => {
  const {id, image, name, price, color, size, quantity, priceTotal} = props

  let [updateQuantity, setUpdateQuantity] = useState(quantity)
  const [updatePriceTotal, setUpdatePriceTotal] = useState(priceTotal)

  const handleIncreament = () => {
    setUpdateQuantity(updateQuantity+=1)
  }
  
  const handleDecreament = () => {
    const index = cart.findIndex(({i}) => i === id) + 1;
    if(updateQuantity <= 1) {
      cart.splice(index, 1)
      console.log(cart);
      return cart
    }
    setUpdateQuantity(updateQuantity-=1)
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
        <div className="font__family">{updateQuantity}</div>
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
          {numberWithCommas(updatePriceTotal)}
        </div>
      </td>
    </tr>
  );
};

export default CartView;
