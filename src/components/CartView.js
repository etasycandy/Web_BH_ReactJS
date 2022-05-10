import React, { useEffect, useState } from "react";
import numberWithCommas from "../utils/numberWithCommas";
import { useSelector, useDispatch } from "react-redux"
import cartSlice from "./slices/cartSlice";


import { Button } from "./Button";

// icons
import { GrSubtract, GrAdd } from "react-icons/gr";

const CartView = (props) => {
  const {id, index, image, name, price, color, size, quantity, priceTotal} = props
  let [quantityUpdate, setQuantityUpdate] = useState(quantity)
  let [priceTotalUpdate, setPriceTotalUpdate] = useState(priceTotal)

  const dispatch = useDispatch()
  //const listOrderProduct = useSelector(selectRemainingOrderProducts)

  useEffect((id, color, size) => {
    if(quantityUpdate < 1) {
      return dispatch(cartSlice.actions.updateOrderProducts({id: id, color: color, size: size}))
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
    return dispatch(cartSlice.actions.updateOrderProducts({id: id, color: color, size: size, product: updateProduct}))
  }, [quantityUpdate])

  const handleIncreament = () => {
    setQuantityUpdate(() => quantityUpdate+=1)
    setPriceTotalUpdate(() => priceTotalUpdate += price)
    console.log(index)
  }
  
  const handleDecreament = () => {
    setQuantityUpdate(() => quantityUpdate-=1)
    setPriceTotalUpdate(() => priceTotalUpdate -= price)
    console.log(index)
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
          {numberWithCommas(priceTotalUpdate)}
        </div>
      </td>
    </tr>
  );
};

export default CartView;
