import React from "react";

import Button from "../button/button.component";

import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.actions";

import "./collection-item.style.scss";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button className="button" onClick={() => addItem(item)} inverted>
        Add to cart
      </Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
