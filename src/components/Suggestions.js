import React from "react";

import productData from "../assets/fake-data/products";

import ProductCard from "./ProductCard";

class Suggestions extends React.Component {
  render() {
    const rows = [];

    productData.getProducts(8).forEach((item, index) => {
      rows.push(
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <ProductCard
            key={index}
            img01={item.image01}
            img02={item.image02}
            name={item.title}
            price={Number(item.price)}
            priceOld={Number(item.priceOld)}
            slug={item.slug}
          />
        </div>
      );
    });

    return (
      <div className="suggestions">
        <h2>Suggestions for you</h2>
        <div className="row suggestions__products">{rows}</div>
      </div>
    );
  }
}

export default Suggestions;
