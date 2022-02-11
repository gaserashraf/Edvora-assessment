import React from "react";

const FilterDropdownMenu = (props) => {
  let { Arr, setActive } = props;
  const handleClick = (e) => {
    if (setActive) {
      setActive(e.target.textContent);
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

export default FilterDropdownMenu;
