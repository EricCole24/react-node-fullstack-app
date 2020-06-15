"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SignUpForm = (props) => {
    return (<form className="container" onSubmit={props.onSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <div className="field">
          <input id="email" type="email" name="email" onChange={props.onChange} className="form-control" value={props.inputText.email}/>
          <div style={{ fontSize: 12, color: "red" }}>
            {props.inputText.emailError}
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <div className="field">
          <input id="username" type="text" name="username" className="form-control" value={props.inputText.username} onChange={props.onChange}/>
          <div style={{ fontSize: 12, color: "red" }}>
            {props.inputText.usernameError}
          </div>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <div className="field">
          <input id="password" type="password" name="password" className="form-control" value={props.inputText.password} onChange={props.onChange} autoComplete="new password"/>
          <div style={{ fontSize: 12, color: "red" }}>
            {props.inputText.passwordError}
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="cpassword">Confirm password</label>
        <div className="field">
          <input type="password" id="cpassword" name="cpassword" className="form-control" value={props.inputText.cpassword} onChange={props.onChange} autoComplete="new password"/>
          <div style={{ fontSize: 12, color: "red" }}>
            {props.inputText.confirmPasswordError}
          </div>
        </div>
      </div>

      <input type="submit" value="Sign Up" className="btn btn-primary" style={{ padding: "0.2em 5em", marginLeft: "465px" }}/>
    </form>);
};
exports.default = SignUpForm;
