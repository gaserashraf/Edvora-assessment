import React from "react";
import Dialog from "@mui/material/Dialog";
import FilterContainer from "../View";
import PropTypes from "prop-types";

const FilterPopup = (props) => {
  const { onClose, open,dark } = props;
  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog
      onClose={handleClose}
      open={open}
      PaperProps={{
        style: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      }}
    >
      <FilterContainer dark={dark} onClose={onClose} hide={false} />
    </Dialog>
  );
};
FilterPopup.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  dark:PropTypes.bool
};
export default FilterPopup;
