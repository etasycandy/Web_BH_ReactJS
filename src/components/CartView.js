import React, { useEffect, useState } from "react";
import numberWithCommas from "../utils/numberWithCommas";
import { useSelector, useDispatch } from "react-redux"
import cartSlice from "./slices/cartSlice";


import { Button } from "./Button";

// icons
import { GrSubtract, GrAdd } from "react-icons/gr";
import { selectRemainingOrderProducts } from "../redux/selector";

const CartView = (props) => {
  const {id, image, name, price, color, size, quantity, priceTotal} = props
  let [quantityUpdate, setQuantityUpdate] = useState(quantity)
  let [priceTotalUpdate, setPriceTotalUpdate] = useState(priceTotal)

  const dispatch = useDispatch()
  const listOrderProduct = useSelector(selectRemainingOrderProducts)

  useEffect(() => {
    console.log(quantityUpdate)
    console.log(priceTotalUpdate)
  }, [quantityUpdate])

  const handleIncreament = (idUp, colorUp, sizeUp) => {
    setQuantityUpdate(() => quantityUpdate+=1)
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
    return dispatch(cartSlice.actions.updateOrderProducts({idUp, colorUp, sizeUp, product: updateProduct}))
  }
  
  const handleDecreament = (idUp, colorUp, sizeUp) => {
    setQuantityUpdate(() => quantityUpdate-=1)
    setPriceTotalUpdate(() => priceTotalUpdate -= price)
    if(quantityUpdate === 1) {
      console.log(listOrderProduct);
      return dispatch(cartSlice.actions.updateOrderProducts({idUp, colorUp, sizeUp}))
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
    return dispatch(cartSlice.actions.updateOrderProducts({idUp, colorUp, sizeUp, product: updateProduct}))
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
          onClick={() => handleDecreament(id, color, size)}
        >
          <GrSubtract />
        </Button>
        <div className="font__family">{quantityUpdate}</div>
        <Button
          buttonStyle="btn--outline"
          buttonClassName="cart__list-product__btn"
          buttonColor="add"
          onClick={() => handleIncreament(id, color, size)}
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
