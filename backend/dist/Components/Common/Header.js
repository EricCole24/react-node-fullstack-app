"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Header = () => {
    return (<nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{ marginBottom: "10px" }}>
      <react_router_dom_1.NavLink style={{ color: "white" }} className="navbar-brand" to="/">
        Home
      </react_router_dom_1.NavLink>
      <react_router_dom_1.NavLink style={{ color: "white" }} className="navbar-brand" to="/about">
        About
      </react_router_dom_1.NavLink>
      <react_router_dom_1.NavLink style={{ color: "white" }} className="navbar-brand " to="/view">
        ViewData
      </react_router_dom_1.NavLink>
    </nav>);
};
exports.default = Header;
