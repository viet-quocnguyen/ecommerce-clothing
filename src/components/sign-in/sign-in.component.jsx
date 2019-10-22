import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.style.scss";


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

  handleSubmit = async(e) => {
    e.preventDefault();
    const {email, password} = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: ''
      })
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
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
          <div className="buttons">
            <Button type="submit">Sign In</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Log In with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
