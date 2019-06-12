import React from "react";
import {
  StyledTopBar,
  StyledContainer,
  StyledContainerLeft,
  StyledContainerLeftSpan,
  StyledContainerCenter,
  StyledContainerCenterSpan,
  StyledContainerRight,
  StyledContainerRightSpan
} from "./styles.js";
import "../CSS/index.css";

const TopBar = () => {
  return (
    <StyledTopBar>
      <StyledContainer>
        <StyledContainerLeft>
          <StyledContainerLeftSpan>TOPICS</StyledContainerLeftSpan>
          <StyledContainerLeftSpan>SEARCH</StyledContainerLeftSpan>
        </StyledContainerLeft>
        <StyledContainerCenter>
          <StyledContainerCenterSpan>GENERAL</StyledContainerCenterSpan>
          <StyledContainerCenterSpan>BROWNBAG</StyledContainerCenterSpan>
          <StyledContainerCenterSpan>RANDOM</StyledContainerCenterSpan>
          <StyledContainerCenterSpan>MUSIC</StyledContainerCenterSpan>
          <StyledContainerCenterSpan>ANNOUNCEMENTS</StyledContainerCenterSpan>
        </StyledContainerCenter>
        <StyledContainerRight>
          <StyledContainerRightSpan>LOG IN</StyledContainerRightSpan>
        </StyledContainerRight>
      </StyledContainer>
    </StyledTopBar>
  );
};

export default TopBar;
