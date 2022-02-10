import React from "react";

const FilterDropdownMenu = (props) => {
  let { Arr, setActiveProduct } = props;
  const handleClick = (e) => {
    if (setActiveProduct) {
      setActiveProduct(e.target.textContent);
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
