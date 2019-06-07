import React from "react";
import { StyledHeader, StyledHeaderH1, StyledDate, StyledTemp } from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <StyledDate>JUNE 7th, 2019</StyledDate>
      <StyledHeaderH1>Lambda Times</StyledHeaderH1>
      <StyledTemp>84°</StyledTemp>
    </StyledHeader>
  );
};

export default Header;
