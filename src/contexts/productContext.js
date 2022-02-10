import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import { getProducts } from "./Service";
export const ProductContext = createContext();
export default function ProductContextProvider(props) {
  const [products, setProducts] = useState([]);
  const [hashMapProducts, setHashMapProducts] = useState(new Map());
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterBrand, setFilterBrand] = useState(null);
  //function to get products from the api
  const getProductsServices = () => {
    getProducts(setProducts, setLoading, setBrands, setHashMapProducts);
  };
  const setBrandFilterProducts = (brandName) => {
    console.log(brandName);
    //let arr=hashMapProducts.get(brandName);
    // console.log(arr);
    setFilterBrand(brandName);
  };
  //console.log(filterProducts);
  const clearBrandFilterProducts = () => {
    setFilterBrand(null);
  };
  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        brands,
        hashMapProducts,
        filterBrand,
        getProductsServices,
        setBrandFilterProducts,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}
ProductContextProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
