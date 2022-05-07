import React, { useEffect, useState } from "react";
import numberWithCommas from "../utils/numberWithCommas";
import { useSelector, useDispatch } from "react-redux"
import cartSlice from "./slices/cartSlice";


import { Button } from "./Button";

// icons
import { GrSubtract, GrAdd } from "react-icons/gr";
import { selectRemainingOrderProducts } from "../redux/selector";

const CartView = (props) => {
  const {index, id, image, name, price, color, size, quantity, priceTotal} = props
  let [quantityUpdate, setQuantityUpdate] = useState(quantity)
  let [priceTotalUpdate, setPriceTotalUpdate] = useState(priceTotal+price)

  const dispatch = useDispatch()
  const listOrderProduct = useSelector(selectRemainingOrderProducts)

  const handleIncreament = () => {
    // eslint-disable-next-line no-const-assign
    setQuantityUpdate(() => quantityUpdate ++)
    setPriceTotalUpdate(() => priceTotalUpdate += price)
    const updateProduct = {
      id: id,
      image: image,
      name: name,
      price: price,
      color: color,
      size: size,
      quantity: quantityUpdate,
      priceTotal: priceTotalUpdate
    }
    return dispatch(cartSlice.actions.updateOrderProducts({index, product: updateProduct}))
  }
  
  const handleDecreament = () => {
    setQuantityUpdate(() => quantityUpdate--)
    setPriceTotalUpdate(() => priceTotalUpdate -= price)
    if(quantityUpdate === 1) {
      console.log(listOrderProduct);
      return dispatch(cartSlice.actions.updateOrderProducts({index}))
    } 
    const updateProduct = {
      id: id,
      image: image,
      name: name,
      price: price,
      color: color,
      size: size,
      quantity: quantityUpdate,
      priceTotal: priceTotalUpdate
    }
    return dispatch(cartSlice.actions.updateOrderProducts({index, product: updateProduct}))
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
          onClick={() => handleDecreament()}
        >
          <GrSubtract />
        </Button>
        <div className="font__family">{quantityUpdate}</div>
        <Button
          buttonStyle="btn--outline"
          buttonClassName="cart__list-product__btn"
          buttonColor="add"
          onClick={() => handleIncreament()}
        >
          <GrAdd />
        </Button>
      </td>
      <td>
        <div
          className="font__family d-flex justify-content-center align-items-center"
          style={{ height: "5rem" }}
        >
          {numberWithCommas(priceTotalUpdate-price)}
        </div>
      </td>
    </tr>
  );
};

export default CartView;
