import React from "react";
import PropTypes from "prop-types";
const DarkModeBtn = (props) => {
  const { dark, onClick } = props;
  const handleClick = () => {
    onClick();
  };
  return (
    <button
      onClick={handleClick}
      className={`btn-dark ${dark ? "dark" : "noraml"}`}
    >
      <i class={`fa fa-${dark ? "moon" : "sun"}`}></i>
    </button>
  );
};
DarkModeBtn.propTypes = {
  dark: PropTypes.bool,
  onClick:PropTypes.func
};
export default DarkModeBtn;
