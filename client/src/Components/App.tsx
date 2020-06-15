import React, { useState, useEffect } from "react";
import Header from "./Common/Header";
import AboutPage from "./AboutPage";
import { Route, RouteComponentProps, useHistory } from "react-router-dom";
import HomePage from "./HomePage";
import ManageSignUp from "./ManageSignUpForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ManageSignIn from "./ManageSignInForm";
import Header2 from "./Common/Header2";
import ManageLogOut from "./ManageSingOut";
import { createBrowserHistory } from "history";
const App: React.FC = (props) => {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar={false} />
      <Header2 />
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/signupform" exact component={ManageSignUp} />
      <Route path="/signinform" exact component={ManageSignIn} />
      <Route path="/logout" exact component={ManageLogOut} />
    </div>
  );
};
export default App;
