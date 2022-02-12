import React, { useState } from "react";
import Products from "../productsComponent/View";
import FilterContainer from "../filterComponent/View";
import Button from "@mui/material/Button";
import FilterPopup from "../filterComponent/containers/FilterPopup";
import DarkModeBtn from "./containers/DarkModeBtn";
const Home = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={`home ${darkMode ? "dark" : "normal"}`}>
      <DarkModeBtn
        dark={darkMode}
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      />
      <div className="row justify-content-between">
        <div className="col-3 fil">
          <FilterContainer hide={true} dark={darkMode} />
        </div>
        <div className="col-md-9 col-12 cont">
          <div className="dia">
            <Button
              className="Button"
              onClick={() => {
                setOpen(true);
              }}
            >
              Open filter
            </Button>
            <FilterPopup
              dark={darkMode}
              open={open}
              onClose={() => {
                setOpen(false);
              }}
            />
          </div>
          <Products  dark={darkMode} />
        </div>
      </div>
    </div>
  );
};

export default Home;
