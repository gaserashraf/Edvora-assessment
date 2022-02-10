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
        {productList?.map((product, index) => {
          return (
            <ProductItem
              key={index}
              productName={product?.product_name}
              brandName={product?.brand_name}
              price={product?.price}
              adress={product?.address?.city}
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
