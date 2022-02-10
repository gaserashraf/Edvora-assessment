import React, { useContext, useState } from "react";
import { ProductContext } from "../../contexts/productContext";
import FilterDropdown from "./containers/FilterDropdown";
const FilterContainer = () => {
  const { brands, setBrandFilterProducts, filterBrand } =
    useContext(ProductContext);
  const setActiveProduct = (brandName) => {
    setBrandFilterProducts(brandName);
  };
  return (
    <div className="filter-container">
      <h2 className="filter-header">Filter</h2>
      <div className="filter-line"></div>
      <ul className="filter-3">
        <FilterDropdown
          constName={filterBrand ? filterBrand : "Products"}
          dropdownList={brands}
          setActiveProduct={setActiveProduct}
        />
        <FilterDropdown constName="State" dropdownList={[]} />
        <FilterDropdown constName="City" dropdownList={[]} />
      </ul>
    </div>
  );
};

export default FilterContainer;
