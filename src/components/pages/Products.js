import React, { useCallback, useState, useEffect, useRef } from "react";

import Helmet from "../Helmet";
import CheckBox from "../CheckBox";
import { Button } from "../Button";
import ProductCard from "../ProductCard";

// data
import productData from "../../assets/fake-data/products";
import category from "../../assets/fake-data/category";
import colors from "../../assets/fake-data/product-color";
import size from "../../assets/fake-data/product-size";

// icons
import { MdOutlineArrowBackIos } from "react-icons/md";

const Products = () => {
  const initFilter = {
    category: [],
    color: [],
    size: [],
  };

  const productList = productData.getAllProducts();

  const [products, setProducts] = useState(productList);

  const [filter, setFilter] = useState(initFilter);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.categorySlug],
          });
          break;
        case "COLOR":
          setFilter({ ...filter, color: [...filter.color, item.color] });
          break;
        case "SIZE":
          setFilter({ ...filter, size: [...filter.size, item.size] });
          break;
        default:
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(
            (e) => e !== item.categorySlug
          );
          setFilter({ ...filter, category: newCategory });
          break;
        case "COLOR":
          const newColor = filter.color.filter((e) => e !== item.color);
          setFilter({ ...filter, color: newColor });
          break;
        case "SIZE":
          const newSize = filter.size.filter((e) => e !== item.size);
          setFilter({ ...filter, size: newSize });
          break;
        default:
      }
    }
  };

  const clearFilter = () => setFilter(initFilter);

  const updateProducts = useCallback(() => {
    let temp = productList;

    if (filter.category.length > 0) {
      temp = temp.filter((e) => filter.category.includes(e.categorySlug));
    }

    if (filter.color.length > 0) {
      temp = temp.filter((e) => {
        const check = e.colors.find((color) => filter.color.includes(color));
        return check !== undefined;
      });
    }

    if (filter.size.length > 0) {
      temp = temp.filter((e) => {
        const check = e.size.find((size) => filter.size.includes(size));
        return check !== undefined;
      });
    }

    setProducts(temp);
  }, [filter, productList]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);

  const filterRef = useRef(null);

  const showHideFilter = () => filterRef.current.classList.toggle("active");

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [productList]);

  return (
    <Helmet title="Products">
      <div className="title">
        <h1>Products</h1>
      </div>
      <div className="products">
        <div className="products__filter" ref={filterRef}>
          <div
            className="products__filter__close"
            onClick={() => showHideFilter()}
          >
            <MdOutlineArrowBackIos style={{ cursor: "pointer" }} />
          </div>
          <div className="products__filter__widget">
            <div className="products__filter__widget__title">
              Product portfolio
            </div>
            <div className="products__filter__widget__content">
              {category.map((item) => (
                <div
                  key={item.id}
                  className="products__filter__widget__content__item"
                >
                  <CheckBox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("CATEGORY", input.checked, item)
                    }
                    checked={filter.category.includes(item.categorySlug)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="products__filter__widget">
            <div className="products__filter__widget__title">Colors</div>
            <div className="products__filter__widget__content">
              {colors.map((item) => (
                <div
                  key={item.color}
                  className="products__filter__widget__content__item"
                >
                  <CheckBox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("COLOR", input.checked, item)
                    }
                    checked={filter.color.includes(item.color)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="products__filter__widget">
            <div className="products__filter__widget__title">Sizes</div>
            <div className="products__filter__widget__content">
              {size.map((item) => (
                <div
                  key={item.size}
                  className="products__filter__widget__content__item"
                >
                  <CheckBox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("SIZE", input.checked, item)
                    }
                    checked={filter.size.includes(item.size)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="products__filter__widget">
            <div className="products__filter__widget__content">
              <Button
                buttonColor="del"
                buttonStyle="btn--outline"
                onClick={clearFilter}
              >
                Delete fillter
              </Button>
            </div>
          </div>
        </div>
        <div className="products__filter__toggle">
          <Button
            buttonColor="green"
            buttonStyle="btn--outline"
            onClick={() => showHideFilter()}
          >
            Fillter
          </Button>
        </div>
        <div className="row products__content">
          {products.map((item) => (
            <ProductCard
              class="col-xs-12 col-sm-6 col-md-4 mb-4"
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
    </Helmet>
  );
};

export default Products;
