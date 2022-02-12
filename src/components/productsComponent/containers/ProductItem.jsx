import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
const ProductItem = (props) => {
  let {
    productName,
    brandName,
    price,
    state,
    city,
    discription,
    date,
    time,
    image,
    dark,
  } = props;
  return (
    <div className="product-item">
      <div className="row">
        <div className="col-6 box1">
          <div className="img">
            <img src={image}></img>
          </div>
          <h3 className="text-sec adress">{state + "/" + city}</h3>
        </div>
        <div className="col-6 box2">
          <h3 className="text-sec p-name">{productName}</h3>
          <h3 className="text-sec b-name">{brandName}</h3>
          <h3 className="text-sec price">$ {price}</h3>
          <h3 className="text-sec date">
            date:{" "}
            <Moment
              style={{ color: dark ? "#ffffff80" : "#000" }}
              format="YYYY/MM/DD"
            >
              {date}
            </Moment>
          </h3>
        </div>
      </div>
      <div className="row dis">
        <h3 className="text-sec">{discription}</h3>
      </div>
    </div>
  );
};
ProductItem.propTypes = {
  productName: PropTypes.string,
  brandName: PropTypes.string,
  price: PropTypes.string,
  state: PropTypes.string,
  city: PropTypes.string,
  discription: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  image: PropTypes.string,
  dark: PropTypes.bool,
};
export default ProductItem;
