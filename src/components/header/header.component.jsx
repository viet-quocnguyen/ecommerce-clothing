import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { ReactComponent as Menu } from "../../assets/bars-solid.svg";

import "./header.style.scss";

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      showOptions: false
    };
  }

  handleClick = e => {
    this.setState({
      showOptions: !this.state.showOptions
    });
  };

  render() {
    const { showOptions } = this.state;
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
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        </div>

        <div className="toggle">
          <Menu name="icon" className="icon" onClick={this.handleClick} />

          {showOptions ? (
            <div className="dropdown-menu">
              <Link className="option" to="/shop">
                SHOP
              </Link>
              <Link className="option" to="/contact">
                CONTACT
              </Link>
              <Link className="option" to="/signin">
                SIGN IN
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Header;
