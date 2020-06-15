"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const HomePage = () => {
    return (<div className="home-page">
      <div className="container jumbotron">
        <h1 style={{ textAlign: "center" }}>Welcome to Eric's Design Page</h1>

        <p style={{ textAlign: "center", marginTop: "25px" }}>
          <react_router_dom_1.Link to="signinform" className="btn btn-primary" style={{ marginLeft: "50px" }}>
            Sign In
          </react_router_dom_1.Link>
          <react_router_dom_1.Link style={{ marginLeft: "50px" }} to="signupform" className="btn btn-primary">
            SignUp
          </react_router_dom_1.Link>
        </p>
      </div>
    </div>);
};
exports.default = HomePage;
