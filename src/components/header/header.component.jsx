import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { ReactComponent as Menu } from "../../assets/bars-solid.svg";
import { auth } from "../../firebase/firebase.utils";

import "./header.style.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showOptions: false
    };
  }

  handleMenu = e => {
    this.setState({
      showOptions: !this.state.showOptions
    });
  };

  handleLogOut = () => {
    auth.signOut();
  };

  render() {
    const { showOptions } = this.state;
    const { currentUser } = this.props;

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
        </div>

        <div className="toggle">
          <Menu name="icon" className="icon" onClick={this.handleMenu} />

          {showOptions ? (
            <div className="dropdown-menu">
              <Link className="option" to="/shop">
                SHOP
              </Link>
              <Link className="option" to="/contact">
                CONTACT
              </Link>
              {currentUser ? (
                <div className="option logout" onClick={this.handleLogOut}>
                  LOG OUT
                </div>
              ) : (
                <Link className="option" to="/signin">
                  SIGN IN
                </Link>
              )}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Header;
