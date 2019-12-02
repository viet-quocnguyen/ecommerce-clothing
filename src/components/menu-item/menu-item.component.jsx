import React from "react";
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  TitleContainer,
  SubtitleContainer
} from "./menu-item.styles";

import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <MenuItemContainer
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      size={size}
    >
      <BackgroundImageContainer imageUrl={imageUrl}></BackgroundImageContainer>
      <ContentContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <SubtitleContainer>SHOP NOW</SubtitleContainer>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
