import React from "react";

import Helmet from "../Helmet";
import { Link } from "react-router-dom";

import cart from "../../assets/fake-data/cart";
import CartView from "../CartView";

import numberWithCommas from "../../utils/numberWithCommas";

function Cart() {
  return (
    <Helmet title="Cart">
      <div className="row cart mt-5 mb-5">
        <div className="col-md-12 col-lg-8 cart__list-product">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Name product</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <CartView
                  key={item.id}
                  name={item.name}
                  image={item.image}
                  price={Number(item.price)}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-12 col-lg-4 cart__bill">
          <div className="cart__bill__content">
            <p>Bạn đang có {0} sản phẩm trong giỏ hàng</p>
            <div className="cart__bill__content__sum">
              <p>Thành tiền</p>
              <p className="cart__bill__content__sum__price">
                {numberWithCommas(100000)}
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
