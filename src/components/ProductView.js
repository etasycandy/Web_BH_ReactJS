import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button } from "./Button";
import numberWithCommas from "../utils/numberWithCommas";

import {selectRemainingOrderProducts} from "../redux/selector"

import cartSlice from './slices/cartSlice'
// icon
import { GrSubtractCircle, GrAddCircle } from "react-icons/gr";

const ProductView = (props) => {
  let product = props.product;
  const count = 1
  if (product === undefined) {
    product = {
      title: "",
      priceOld: "",
      price: "",
      image01: null,
      image02: null,
      categorySlug: "",
      colors: [],
      slug: "",
      size: [],
      description: "",
    };
  }
  const [previewImg, setPreviewImg] = useState(product.image01);
  const [descriptionExpand, setDescriptionExpand] = useState(false);
  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);
  let [quantity, setQuantity] = useState(1);
  let [priceTotal, setPriceTotal] = useState(0)

  const check = () => {
    if (color === undefined) {
      alert("Vui lòng chọn màu sắc!");
      return false;
    }

    if (size === undefined) {
      alert("Vui lòng chọn kích cỡ!");
      return false;
    }

    return true;
  };
  const dispatch = useDispatch()
  const listOrderProduct = useSelector(selectRemainingOrderProducts)

  useEffect(() => {
    setPreviewImg(product.image01)
  }, [product])

  // useEffect(() => {
  //   console.log(quantity)
  //   setPriceTotal(() => Number(product.price*quantity))
  //   console.log(priceTotal)
  // },[quantity, priceTotal])

  const handleIncreament = () => {
    setQuantity(() => quantity++)
  }

  const handleDecreament = () => {
    if(quantity <= 1) {
      setQuantity(1)
      return false
    }
    setQuantity(() => quantity--)
  }

  const handleGetColorOrder = (color) => {
    setColor(color)
  }

  const handleGetSizeOrder = (size) => {
    setSize(size)
  }

  const addToCart = () => {
    if (check()) {
      const productChoose = {
        id: product.id,
        image:  previewImg,
        name: product.title,
        price: parseInt(product.price),
        color: color,
        size: size,
        quantity: quantity,
        priceTotal: (product.price*quantity)
      }
      setQuantity(1)
      setColor(undefined)
      setSize(undefined)
      toast.success('🦄 Add to cart successfully!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return dispatch(cartSlice.actions.addOrderProducts(productChoose))
  };
}
  const goToCart = () => {
    if (check()) {
      console.log("Buy");
    }
  };

  const priceOld = [];

  if (product.priceOld > 0) {
    priceOld.push(
      <span key={1} className="product-view__info__item__priceOld">
        <del>{numberWithCommas(product.priceOld)}</del>
      </span>
    );
  } else {
    priceOld.push(<span key={1} className="d-none"></span>);
  }

  return (
    <div>
      <div className="row product-view m-5">
        <div className="row col-sm-12 col-md-7 product-view__images">
          <div className="col-3 product-view__images__list">
            <ToastContainer
                position="bottom-right"
                theme="dark"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div
              className="product-view__images__list__item"
              onClick={() => setPreviewImg(product.image01)}
            >
              <img src={product.image01} alt="" />
            </div>
            <div
              className="product-view__images__list__item"
              onClick={() => setPreviewImg(product.image02)}
            >
              <img src={product.image02} alt="" />
            </div>
          </div>
          <div className="col-9 product-view__images__main">
            <img src={previewImg} alt="" />
          </div>
          <div
            className={`col-12 product-description ${
              descriptionExpand ? "expand" : ""
            }`}
          >
            <div className="product-description__title">Product details</div>
            <div
              className="product-description__content"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>
            <div className="product-description__toggle">
              <Button
                buttonColor="transparent"
                buttonStyle="btn--outline"
                onClick={() => setDescriptionExpand(!descriptionExpand)}
              >
                {descriptionExpand ? "Collapse" : "See more >>"}
              </Button>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-5 product-view__info">
          <h1 className="product-view__info__title">{product.title}</h1>
          <div className="product-view__info__item d-flex align-items-center gap-4 mt-4">
            <span className="product-view__info__item__price">
              {numberWithCommas(product.price)}
            </span>
            {priceOld}
          </div>

          <div className="product-view__info__item">
            <div className="product-view__info__item__title">Colors</div>
            <div className="product-view__info__item__list">
              {product.colors.map((item, index) => (
                <div
                  key={index}
                  className={`product-view__info__item__list__item ${
                    color === item ? "active" : ""
                  }`}
                  onClick={() => handleGetColorOrder(item)}
                >
                  <div className={`circle bg-${item}`}></div>
                </div>
              ))}
            </div>
          </div>

          <div className="product-view__info__item">
            <div className="product-view__info__item__title">Sizes</div>
            <div className="product-view__info__item__list">
              {product.size.map((item, index) => (
                <div
                  key={index}
                  className={`product-view__info__item__list__item ${
                    size === item ? "active" : ""
                  }`}
                  onClick={() => handleGetSizeOrder(item)}
                >
                  <span className="product-view__info__item__list__item__size">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="product-view__info__item">
            <div className="product-view__info__item__title">Quantity</div>
            <div className="product-view__info__item__quantity">
              <div
                className="product-view__info__item__quantity__btn"
                onClick={() => handleDecreament()}
              >
                <GrSubtractCircle size={30} />
              </div>
              <div className="product-view__info__item__quantity__input">
                {quantity}
              </div>
              <div
                className="product-view__info__item__quantity__btn"
                onClick={() => handleIncreament()}
              >
                <GrAddCircle size={30} />
              </div>
            </div>
          </div>

          <div className="product-view__info__item">
            {/* <Button buttonStyle="btn--outline" buttonColor="blue">
              ADD TO CART
            </Button>
            <Button buttonStyle="btn--outline" buttonColor="blue">
              BUY
            </Button> */}
            <Button
              buttonStyle="btn--outline"
              buttonColor="blue"
              onClick={() => addToCart()}
            >
              ADD TO CART
            </Button>
            <Button
              buttonStyle="btn--outline"
              buttonColor="blue"
              onClick={() => goToCart()}
            >
              BUY
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
