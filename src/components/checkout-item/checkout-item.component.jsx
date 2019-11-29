import React from "react";

import {
  clearItemFromCart,
  removeItemFromCart,
  addItemToCart
} from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  NameContainer,
  PriceContainer,
  QuantityContainer,
  ValueContainer,
  ArrowContainer,
  RemoveButtonContainer
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt="item" />
      </ImageContainer>
      <NameContainer>{name}</NameContainer>
      <QuantityContainer>
        <ArrowContainer onClick={() => removeItem(cartItem)}>
          &#10094;
        </ArrowContainer>
        <ValueContainer>{quantity}</ValueContainer>
        <ArrowContainer onClick={() => addItem(cartItem)}>
          &#10095;
        </ArrowContainer>
      </QuantityContainer>
      <PriceContainer>{price}</PriceContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItemToCart(item)),
  removeItem: item => dispatch(removeItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
