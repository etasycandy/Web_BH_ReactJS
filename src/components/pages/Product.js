import React from "react";

import productData from "../../assets/fake-data/products";

import Helmet from "../Helmet";
import ProductView from "../ProductView";
import Suggestions from "../Suggestions";

const Product = (props) => {
  const product = productData.getProductBySlug(props.match.params.slug);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={product.title}>
      <div className="product-page">
        <ProductView product={product} />

        <div className="product-page__suggestion">
          <Suggestions title="Discover more" />
        </div>
      </div>
    </Helmet>
  );
};

export default Product;
