import React from "react";

import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.actions";

import {
  ButtonContainer,
  ImageContainer,
  CollectionFooterContainer,
  CollectionItemContainer,
  NameContainer,
  PriceContainer
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <ButtonContainer onClick={() => addItem(item)} inverted>
        Add to cart
      </ButtonContainer>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
