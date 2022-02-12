import React, { useState } from "react";
import FilterDropdownMenu from "./FilterDropdownMenu";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import PropTypes from "prop-types";

const FilterDropdown = (props) => {
  let { constName, dropdownList, setActive, onClose } = props;
  const [open, setOpen] = useState(false);
  const handleClickAway = () => {
    setOpen(false);
  };
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div
        className="filter-dropdown d-flex justify-content-between"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="const">{constName}</div>
        <i class="fas fa-caret-down"></i>
        {open && (
          <div className="menu">
            <FilterDropdownMenu
              onClose={onClose}
              Arr={dropdownList}
              setActive={setActive}
            />
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};
FilterDropdownMenu.propTypes = {
  dropdownList: PropTypes.array,
  setActive: PropTypes.func,
  onClose: PropTypes.func,
  constName: PropTypes.string,
};
export default FilterDropdown;
