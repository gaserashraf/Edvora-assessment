import React, { useContext, useState } from "react";
import { ProductContext } from "../../contexts/productContext";
import FilterDropdown from "./containers/FilterDropdown";
import PropTypes from "prop-types";

const FilterContainer = (props) => {
  const {
    brands,
    setBrandFilterProducts,
    filterBrand,
    clearBrandFilterProducts,
    filterStates,
    filterCities,
    setBrandFilterState,
    setBrandFilterCity,
    filterState,
    filterCity,
    filterBrands,
  } = useContext(ProductContext);
  let { hide, onClose, dark } = props;
  const setActiveProduct = (brandName) => {
    setBrandFilterProducts(brandName);
  };
  const setActiveState = (StateName) => {
    setBrandFilterState(StateName);
  };
  const setActiveCity = (CityName) => {
    setBrandFilterCity(CityName);
  };
  const clearFilter = () => {
    clearBrandFilterProducts();
  };
  return (
    <div className={`filter-container ${hide ? "hide" : ""} ${dark ? "dark" : "normal"}`}>
      <div className="row">
        <div className="col-6">
          <h2 className="filter-header">Filter</h2>
        </div>
        <div className="col-6 clear d-flex justify-content-md-center justify-content-end">
          <h2 onClick={clearFilter} className="filter-header mr-0">
            Clear
          </h2>
        </div>
      </div>
      <div className="filter-line"></div>
      <ul className="filter-3">
        <FilterDropdown
          constName={filterBrand ? filterBrand : "Products"}
          dropdownList={filterBrands}
          setActive={setActiveProduct}
          onClose={onClose}
        />
        <FilterDropdown
          constName={filterState ? filterState : "State"}
          dropdownList={filterStates}
          setActive={setActiveState}
          onClose={onClose}
        />
        <FilterDropdown
          constName={filterCity ? filterCity : "City"}
          dropdownList={filterCities}
          setActive={setActiveCity}
          onClose={onClose}
        />
      </ul>
    </div>
  );
};
FilterContainer.propTypes = {
  hide: PropTypes.bool,
  onClose: PropTypes.func,
  dark: PropTypes.bool,
};
export default FilterContainer;
