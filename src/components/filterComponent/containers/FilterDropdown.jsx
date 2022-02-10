import React, { useState } from "react";
import FilterDropdownMenu from "./FilterDropdownMenu";
const FilterDropdown = (props) => {
  let { constName, dropdownList, setActiveProduct } = props;
  const [activeItem, setActiveItem] = useState(null);
  const [open, setOpen] = useState(false);
  return (
    <div
      className="filter-dropdown d-flex justify-content-between"
      onClick={() => {
        setOpen(!open);
      }}
    >
      {constName}
      <i class="fas fa-caret-down"></i>
      {open && (
        <div className="menu">
          <FilterDropdownMenu
            Arr={dropdownList}
            setActiveProduct={setActiveProduct}
          />
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
