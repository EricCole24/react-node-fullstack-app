import React from "react";
import { signInProps } from "../Components/interface";

const SignInForm: React.FC<signInProps> = (props) => {
  let p = localStorage.getItem("user");

  return (
    <div className="wrapper">
      <form className="container jumbotron" onSubmit={props.onSubmit}>
        <div style={{ fontSize: 15, color: "red", marginLeft: "200px" }}>
          {props.signInData.error}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <div className="field">
            <input
              id="email"
              type="email"
              name="email"
              className="form-control"
              onChange={props.onChange}
              value={props.signInData.email}
              required
            />
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
              onChange={props.onChange}
              value={props.signInData.password}
              autoComplete="current-password"
              required
            />
          </div>
        </div>

        <input
          type="submit"
          id="sub"
          value="Sign In"
          className="btn btn-danger"
          style={{
            padding: "0.2em 0em",
            marginLeft: "240px",
            width: "15%",
            marginTop: "10px",
            color: "black",
            backgroundColor: "orange",
          }}
        />
      </form>
    </div>
  );
};

export default SignInForm;
