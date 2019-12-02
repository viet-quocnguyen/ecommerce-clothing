import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import {
  ButtonsContainer,
  SignInContainer,
  TitleContainer
} from "./sign-in.styles";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
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
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: ""
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <SignInContainer>
        <TitleContainer>I already have an account</TitleContainer>
        <span>Please enter your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            label="Email"
            name="email"
            type="email"
            value={email}
            required
          />

          <FormInput
            handleChange={this.handleChange}
            label="Password"
            name="password"
            type="password"
            value={password}
            required
          />
          <ButtonsContainer>
            <Button type="submit">Sign In</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Log In with Google
            </Button>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
