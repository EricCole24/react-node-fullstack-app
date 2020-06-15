import React from "react";
import { Props } from "./interface";

const SignUpForm: React.FC<Props> = (props) => {
  return (
    <div className="wrapper">
      <form className="container jumbotron" onSubmit={props.onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <div className="field">
            <input
              id="email"
              type="email"
              name="email"
              onChange={props.onChange}
              className="form-control"
              value={props.inputText.email}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {props.errorText.emailError}
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <div className="field">
            <input
              id="username"
              type="text"
              name="username"
              className="form-control"
              value={props.inputText.username}
              onChange={props.onChange}
              autoComplete="username"
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {props.errorText.usernameError}
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="field">
            <input
              id="password"
              type="password"
              name="password"
              className="form-control"
              value={props.inputText.password}
              onChange={props.onChange}
              autoComplete="new password"
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {props.errorText.passwordError}
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="cpassword">Confirm password</label>
          <div className="field">
            <input
              type="password"
              id="cpassword"
              name="cpassword"
              className="form-control"
              value={props.inputText.cpassword}
              onChange={props.onChange}
              autoComplete="new password"
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {props.errorText.confirmPasswordError}
            </div>
          </div>
        </div>

        <input
          type="submit"
          id="sub"
          value="Sign Up"
          className="btn btn-danger"
          style={{ padding: "0.2em 5em", marginLeft: "465px" }}
        />
      </form>
    </div>
  );
};

export default SignUpForm;
