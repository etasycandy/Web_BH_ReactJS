import React from "react";

import productData from "../assets/fake-data/products";

import ProductCard from "./ProductCard";

const Suggestions = (props) => {
  return (
    <div className="suggestions">
      <h2>{props.title}</h2>
      <div className="row suggestions__products">
        {productData.getProducts(8).map((item) => (
          <ProductCard
            class="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            key={item.id}
            img01={item.image01}
            img02={item.image02}
            name={item.title}
            price={Number(item.price)}
            priceOld={Number(item.priceOld)}
            slug={item.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
