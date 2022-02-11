import React, { useState } from "react";
import Products from "../productsComponent/View";
import FilterContainer from "../filterComponent/View";
import Button from "@mui/material/Button";
import FilterPopup from "../filterComponent/containers/FilterPopup";
const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="home">
      <div className="row justify-content-between">
        <div className="col-3 fil">
          <FilterContainer hide={true} />
        </div>
        <div className="col-md-9 col-12 cont">
          <div className="dia">
            <Button
            //  variant="outlined"
             
              className="Button"
              onClick={() => {
                setOpen(true);
              }}
              
            >
              Open filter
            </Button>
            <FilterPopup
              open={open}
              onClose={() => {
                setOpen(false);
              }}
            />
          </div>
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Home;
