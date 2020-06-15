import React from "react";
import { Link } from "react-router-dom";
import { authen } from "./interface";
const HomePage: React.FC<authen> = (props) => {
  return (
    <div className="home-page">
      <div className="container jumbotron">
        <h1 style={{ textAlign: "center" }}>Welcome to Eric's Design Page</h1>

        <p style={{ textAlign: "center", marginTop: "25px" }}>
          <Link
            to="signinform"
            className="btn btn-primary"
            style={{ marginLeft: "50px" }}
          >
            Sign In
          </Link>
          <Link
            style={{ marginLeft: "50px" }}
            to="signupform"
            className="btn btn-primary"
          >
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
