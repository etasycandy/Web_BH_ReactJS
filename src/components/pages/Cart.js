import React, { useEffect, useState } from "react";

import Helmet from "../Helmet";
import { Link } from "react-router-dom";
import CartView from "../CartView";
import {useSelector} from 'react-redux'
import { selectRemainingOrderProducts } from "../../redux/selector";
import numberWithCommas from "../../utils/numberWithCommas";


function Cart() {
  let [subTotalPrice, setSubTotalPrice] = useState(0)
  const listOrderProduct = useSelector(selectRemainingOrderProducts)


  useEffect(() => {
    setSubTotalPrice(() => {
      let total = 0
      for(let product of listOrderProduct) {
        total += product.priceTotal
      }
      return total.toFixed(1)
    })
  }, [listOrderProduct])


  return (
    <Helmet title="Cart">
      <div className="row cart mt-5 mb-5">
        <div className="col-md-12 col-lg-8 cart__list-product">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Name product</th>
                <th scope="col">Color</th>
                <th scope="col">Size</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {
                listOrderProduct.map((item, index) => (
                  <CartView
                    key={index}
                    index={index}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    color={item.color}
                    size={item.size}
                    quantity={item.quantity}
                    priceTotal={Number(item.priceTotal)}
                  />
                ))
              }
            </tbody>
          </table>
        </div>
        <div className="col-md-12 col-lg-4 cart__bill">
          <div className="cart__bill__content">
            <p>Bạn đang có {listOrderProduct.length} sản phẩm trong giỏ hàng</p>
            <div className="cart__bill__content__sum">
              <p>Thành tiền</p>
              <p className="cart__bill__content__sum__price">
                {numberWithCommas(subTotalPrice)}
              </p>
            </div>
            <div className="cart__bill__content__order mb-3">
              <button>ORDER</button>
            </div>
            <div className="cart__bill__content__order">
              <Link to="/products">
                <button>KEEP BUYING</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
}

export default Cart;
