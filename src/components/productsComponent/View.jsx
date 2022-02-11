import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/productContext";
import ProductContainer from "./containers/ProductContainer";
import Loader from "./containers/Loader";
const Products = () => {
  const {
    products,
    getProductsServices,
    loading,
    brands,
    hashMapProducts,
    filterBrand,
    hashMapProductsFilter,
  } = useContext(ProductContext);
  useEffect(() => {
    getProductsServices();
  }, []);
  //console.log(brands);

  return (
    <div className="products-home">
      <h2>Edvora</h2>
      <h3>Products</h3>
      {loading ? (
        <Loader />
      ) : hashMapProductsFilter ? (
        brands?.map((brand, index) => {
          if (hashMapProductsFilter?.get(brand)?.length) {
            return (
              <ProductContainer
                key={index}
                productName={brand}
                productList={hashMapProductsFilter.get(brand)}
                loading={loading}
              />
            );
          }
        })
      ) : (
        brands?.map((brand, index) => {
          return (
            <ProductContainer
              key={index}
              productName={brand}
              productList={hashMapProducts.get(brand)}
              loading={loading}
            />
          );
        })
      )}
    </div>
  );
};

export default Products;
