import styled, { css } from "styled-components";

export const BackgroundImageContainer = styled.div`
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
  ${props => css`
    background-image: url(${props.imageUrl});
  `}
`;

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

export const TitleContainer = styled.div`
  font-weight: bold;
  font-size: 22px;
  color: #4a4a4a;
`;

export const SubtitleContainer = styled.div`
  font-weight: lighter;
  font-size: 16px;
`;

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  ${props =>
    props.size === "large" &&
    css`
      height: 340px;
    `}

  &:hover {
    cursor: pointer;
    ${BackgroundImageContainer} {
      transform: scale(1.1);
      transition: transform 3s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    ${ContentContainer} {
      opacity: 0.9;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
