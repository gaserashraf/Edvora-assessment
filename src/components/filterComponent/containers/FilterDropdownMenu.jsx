import React from "react";
import PropTypes from "prop-types";

const FilterDropdownMenu = (props) => {
  let { Arr, setActive, onClose } = props;
  const handleClick = (e) => {
    if (setActive) {
      setActive(e.target.textContent);
      if (onClose) {
        onClose();
      }
    }
  };
  return (
    <ul>
      {Arr?.map((el) => {
        return <li onClick={handleClick}>{el}</li>;
      })}
    </ul>
  );
};
FilterDropdownMenu.propTypes={
  Arr: PropTypes.array,
  setActive: PropTypes.func,
  onClose: PropTypes.func,
}
export default FilterDropdownMenu;
