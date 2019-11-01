import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import "./header.style.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleLogOut = () => {
    auth.signOut();
  };

  render() {
    const { currentUser, isCartHidden } = this.props;
    return (
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          <Link className="option" to="/contact">
            CONTACT
          </Link>

          {currentUser ? (
            <div className="option" onClick={this.handleLogOut}>
              LOG OUT
            </div>
          ) : (
            <Link className="option" to="/signin">
              SIGN IN
            </Link>
          )}

          <CartIcon />
        </div>
        {isCartHidden ? null : <CartDropdown />}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCartHidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
