import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import { getProducts, productsToMap } from "./Service";
export const ProductContext = createContext();
export default function ProductContextProvider(props) {
  const [products, setProducts] = useState([]);
  const [hashMapProducts, setHashMapProducts] = useState(new Map());
  const [hashMapProductsFilter, setHashMapProductsFilter] = useState(null);
  const [brands, setBrands] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterBrands, setFilterBrands] = useState(null);
  const [filterStates, setFilterStates] = useState(null);
  const [filterCities, setFilterCities] = useState(null);
  const [filterBrand, setFilterBrand] = useState(null);
  const [filterState, setFilterState] = useState(null);
  const [filterCity, setFilterCity] = useState(null);
  //function to get products from the api
  const getProductsServices = () => {
    getProducts(
      setProducts,
      setLoading,
      setBrands,
      setHashMapProducts,
      setFilterBrands,
      setStates,
      setCities,
      setFilterStates,
      setFilterCities
    );
  };
  const setBrandFilterProducts = (brandName) => {
    // set the selected brandname
    setFilterBrand(brandName);
    // set the products which brand = brandName
    let filterProductsArr = products.filter((product) => {
      if (filterState && filterCity) {
        return (
          product.brand_name === brandName &&
          product.address.state === filterState &&
          product.address.city === filterCity
        );
      } else if (filterState) {
        return (
          product.brand_name === brandName &&
          product.address.state === filterState
        );
      } else if (filterCity) {
        return (
          product.brand_name === brandName &&
          product.address.state === filterCity
        );
      } else {
        return product.brand_name === brandName;
      }
    });
    let newMap = productsToMap(filterProductsArr);
    setHashMapProductsFilter(newMap);

    // make the states and cities filter equal to only the selected brand name
    //put filter States
    let arrStates = [];
    let arrCities = [];
    filterProductsArr.forEach((product) => {
      //get uniqe cities and states
      const found1 = arrStates.find((b) => product?.address?.state === b);
      if (!found1) arrStates.push(product?.address?.state);
      const found2 = arrCities.find((b) => product?.address?.city === b);
      if (!found2) arrCities.push(product?.address?.city);
    });
    setFilterCities(arrCities);
    setFilterStates(arrStates);
  };
  const setBrandFilterState = (stateName) => {
    // set the selected state name
    setFilterState(stateName);

    // set the products which state = stateName

    let filterProductsArr = products.filter((product) => {
      if (filterBrand && filterCity) {
        return (
          product.brand_name === filterBrand &&
          product.address.state === stateName &&
          product.address.city === filterCity
        );
      } else if (filterBrand) {
        return (
          product.brand_name === filterBrand &&
          product.address.state === stateName
        );
      } else if (filterCity) {
        return (
          product.address.city === filterCity &&
          product.address.state === stateName
        );
      } else {
        return product.address.state === stateName;
      }
    });
    let newMap = productsToMap(filterProductsArr);
    setHashMapProductsFilter(newMap);

    // make the states and cities filter equal to only the selected brand name
    //put filter States
    let arrCities = [];
    let arrBrands = [];
    console.log(filterProductsArr);
    filterProductsArr.forEach((product) => {
      //get uniqe cities and states
      const found1 = arrBrands.find((b) => product?.brand_name === b);
      if (!found1) arrBrands.push(product?.brand_name);
      const found2 = arrCities.find((b) => product?.address?.city === b);
      if (!found2) arrCities.push(product?.address?.city);
    });
    setFilterCities(arrCities);
    setFilterBrands(arrBrands);
  };
  const setBrandFilterCity = (CityName) => {
    // set the selected city name
    setFilterCity(CityName);

    // set the products which state = stateName
   
    let filterProductsArr = products.filter((product) => {
      if (filterBrand && filterState) {
        return (
          product.brand_name === filterBrand &&
          product.address.state === filterState &&
          product.address.city === CityName
        );
      } else if (filterBrand) {
        return (
          product.brand_name === filterBrand &&
          product.address.city === CityName
        );
      } else if (filterState) {
        return (
          product.address.state === filterState &&
          product.address.city === CityName
        );
      } else {
        return product.address.city === CityName;
      }
    });
    let newMap = productsToMap(filterProductsArr);
    setHashMapProductsFilter(newMap);

    // make the states and cities filter equal to only the selected brand name
    //put filter States
    let arrStates = [];
    let arrBrands = [];
    console.log(filterProductsArr);
    filterProductsArr.forEach((product) => {
     
      //get uniqe cities and states
      const found1 = arrBrands.find((b) => product?.brand_name === b);
      if (!found1) arrBrands.push(product?.brand_name);
      const found2 = arrStates.find((b) => product?.address?.state === b);
      if (!found2) arrStates.push(product?.address?.state);
    });
    setFilterStates(arrStates);
    setFilterBrands(arrBrands);
    console.log(arrBrands);
  };
  //console.log(filterProducts);
  const clearBrandFilterProducts = () => {
    setFilterBrand(null);
    setFilterState(null);
    setFilterCity(null);
    setFilterBrands(brands);
    setFilterStates(states);
    setFilterCities(cities);
    setHashMapProductsFilter(null);
  };
  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        brands,
        hashMapProducts,
        filterBrand,
        filterBrands,
        filterStates,
        filterCities,
        filterState,
        filterCity,
        hashMapProductsFilter,
        getProductsServices,
        setBrandFilterProducts,
        clearBrandFilterProducts,
        setBrandFilterState,
        setBrandFilterCity,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}
ProductContextProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
