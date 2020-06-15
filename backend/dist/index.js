"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = require("react-dom");
require("bootstrap/dist/css/bootstrap.min.css");
require("./index.css");
const App_1 = __importDefault(require("./Components/App"));
const react_router_dom_1 = require("react-router-dom");
react_dom_1.render(<react_router_dom_1.BrowserRouter>
    <App_1.default />
  </react_router_dom_1.BrowserRouter>, document.getElementById("root"));
