import React from "react";
import PropTypes from "prop-types";
import ProductItem from "./ProductItem";
import arrow from "../../../assets/arrow.png";
const ProductContainer = (props) => {
  let { productName, productList, loading } = props;
  // console.log(loading);
  return (
    <div className="product-container">
      <h2 className="product-header">{productName}</h2>
      <div className="product-line"></div>
      <div className="product-list">
        {(!productList || !productList?.length) && (
          <div
            class="alert d-flex align-items-center w-100"
            role="alert"
            style={{fontSize:"27px"}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2 mr-2"
              viewBox="0 0 16 16"
              role="img"
              aria-label="Warning:"
            >
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <div>no products found !</div>
          </div>
        )}
        {productList?.map((product, index) => {
          return (
            <ProductItem
              key={index}
              productName={product?.product_name}
              brandName={product?.brand_name}
              price={product?.price}
              state={product?.address?.state}
              city={product?.address?.city}
              discription={product?.discription}
              date={product?.date}
              time={product?.time}
              image={product?.image}
            />
          );
        })}
      </div>
      <div className="arrow">
        <div className="arrow-img">
          <img src={arrow}></img>
        </div>
      </div>
    </div>
  );
};
ProductContainer.propTypes = {
  productName: PropTypes.string,
  productList: PropTypes.array,
  loading: PropTypes.bool,
};
export default ProductContainer;
