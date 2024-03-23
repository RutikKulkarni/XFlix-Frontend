import React from "react";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Searchbar from "../SearchBar/Searchbar";
import "./Header.css";

const Header = ({ children }) => {
  const history = useHistory();

  const handleLogoClick = () => {
    history.push("/");
  };

  return (
    <Box className="header">
      <Box onClick={handleLogoClick} className="logo">
        <img src="/xlogo.png" alt="xflix" />
      </Box>
      {children}
    </Box>
  );
};

export default Header;
