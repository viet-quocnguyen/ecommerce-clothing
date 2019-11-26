import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./header.styles";

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
      <HeaderContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
          <OptionLink to="/shop">SHOP</OptionLink>
          <OptionLink to="/contact">CONTACT</OptionLink>

          {currentUser ? (
            <OptionLink as="div" onClick={this.handleLogOut}>
              LOG OUT
            </OptionLink>
          ) : (
            <OptionLink to="/signin">SIGN IN</OptionLink>
          )}

          <CartIcon />
        </OptionsContainer>
        {isCartHidden ? null : <CartDropdown />}
      </HeaderContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCartHidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
