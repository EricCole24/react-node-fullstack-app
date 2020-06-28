import React, { useState, useEffect } from "react";
import { signIn } from "./interface";
import { RouteComponentProps } from "react-router-dom";
import SignInForm from "./SignInForm";
import axios from "axios";
import { toast } from "react-toastify";
//import useUserStatus from "./userLoggedIn";
const ManageSignIn: React.FC<RouteComponentProps> = (props) => {
  const [signInData, setSignInData] = useState<signIn>({
    email: "",
    password: "",
    error: "",
  });

  useEffect(() => {
    if (localStorage.length > 0) {
      props.history.push("/");
    }
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let updateSignInInfo = {
      ...signInData,
      [event.target.name]: event.target.value,
    };
    setSignInData(updateSignInInfo);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    let error1 = "";
    const url = "http://localhost:5000/signinform";
    try {
      const response = await axios({
        method: "post",
        url: url,
        data: JSON.stringify(signInData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then(
        (result) => {
          if (result.data) {
            console.log("ooooo ", result.data);
            localStorage.setItem("user", JSON.stringify(result.data));
            console.log("abiiiie", result.data);
            clearState();

            props.history.push("/");
            return window.location.reload(false);

            //let s = JSON.parse(localStorage.getItem("user") as string);
          }
        },
        (error) => {
          let error1 = "Invalid Username or Password";
          if (error) {
            console.log("mmme ", error1);
            //console.log(signInData);
            return setSignInData({
              email: "",
              password: "",
              error: error1,
            });
            //console.log("mamamdeee ", signInData);
          }
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const clearState = () => {
    return setSignInData({
      email: "",
      password: "",
      error: "",
    });
  };
  return (
    <>
      <SignInForm
        signInData={signInData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageSignIn;
