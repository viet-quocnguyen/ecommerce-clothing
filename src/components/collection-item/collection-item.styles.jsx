import styled from "styled-components";
import Button from "../button/button.component";

// style={{ backgroundImage: `url(${imageUrl})` }}

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: url('${props => props.imageUrl}');
`;

export const ButtonContainer = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 250px;
  display: none;
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.div`
  width: 90%;
`;

export const PriceContainer = styled.span`
  width: 10%;
`;

export const CollectionItemContainer = styled.div`
  width: 22vw;
  min-width: 250px;
  height: 350px;

  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  &:hover ${ImageContainer} {
    opacity: 0.8;
  }

  &:hover ${ButtonContainer} {
    opacity: 0.8;
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: auto;
    margin-bottom: 20px;
  }
`;
