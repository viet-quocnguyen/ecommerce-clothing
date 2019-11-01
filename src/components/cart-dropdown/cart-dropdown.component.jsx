import React from "react";
import { connect } from "react-redux";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import "./cart-dropdown.style.scss";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(
  mapStateToProps,
  null
)(Cart);
