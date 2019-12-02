import React from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

// import "./sign-up.style.scss";
import { SignUpContainer } from "./sign-up.styles";
import { TitleContainer } from "../menu-item/menu-item.styles";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignUpContainer>
        <TitleContainer>I do not have an account</TitleContainer>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          {/* displayName */}
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />

          {/* email */}
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />

          {/* password */}
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />

          {/* confirm password */}
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />

          <Button type="submit">SIGN UP</Button>
        </form>
      </SignUpContainer>
    );
  }
}

export default SignUp;
