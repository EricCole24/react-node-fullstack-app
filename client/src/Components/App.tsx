import React, { useState, useEffect } from "react";
import Header from "./Common/Header";
import AboutPage from "./AboutPage";
import { Route } from "react-router-dom";
import HomePage from "./HomePage";
import ManageSignUp from "./ManageSignUpForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ManageSignIn from "./ManageSignInForm";
import Header2 from "./Common/Header2";
import { createBrowserHistory } from "history";
import BookSchedule from "./AppointmentForm";
import BookAppointment from "./AppointmentForm";
import EmailSuccess from "./EmailSuccess";
import Details from "./DetailSchedule";
const App: React.FC = (props) => {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={5000} hideProgressBar={false} />
      <Header2 />
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/signupform" exact component={ManageSignUp} />
      <Route path="/signinform" exact component={ManageSignIn} />
      <Route path="/bookappointment" exact component={BookAppointment} />
      <Route path="/emailsuccess" exact component={EmailSuccess} />
      <Route path="/details" exact component={Details} />
    </div>
  );
};
export default App;
