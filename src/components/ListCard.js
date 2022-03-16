import React from "react";
import Card from "./Card";

import { HiOutlineShoppingBag } from "react-icons/hi";
import { ImCreditCard } from "react-icons/im";
import { IoDiamondOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";

class ListCard extends React.Component {
  render() {
    return (
      <div className="row list">
        <div className="col-sm-12 col-md-6 col-lg-3">
          <Card
            icon={
              <HiOutlineShoppingBag
                size={40}
                color="#4267b2"
                strokeWidth="0.5px"
              />
            }
            title="Free ship"
            content="Free delivery for orders >= 239K"
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <Card
            icon={
              <ImCreditCard size={40} color="#4267b2" strokeWidth="0.5px" />
            }
            title="COD payment"
            content="Payment on delivery (COD)"
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <Card
            icon={
              <IoDiamondOutline size={40} color="#4267b2" strokeWidth="0.5px" />
            }
            title="VIP customers"
            content="Offers for VIP customers"
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <Card
            icon={<BiSupport size={40} color="#4267b2" strokeWidth="0.1px" />}
            title="Warranty support"
            content="Exchange, repair at all stores"
          />
        </div>
      </div>
    );
  }
}

export default ListCard;
