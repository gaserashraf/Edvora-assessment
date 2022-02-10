import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
const Loader = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      {" "}
      <CircularProgress />
    </div>
  );
};

export default Loader;
