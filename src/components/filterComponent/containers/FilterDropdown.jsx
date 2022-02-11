import React, { useState } from "react";
import FilterDropdownMenu from "./FilterDropdownMenu";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const FilterDropdown = (props) => {
  let { constName, dropdownList, setActive } = props;
  const [activeItem, setActiveItem] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClickAway = () => {
    setOpen(false);
  };
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
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className="menu">
            <FilterDropdownMenu
              Arr={dropdownList}
              setActive={setActive}
            />
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
};

export default FilterDropdown;
