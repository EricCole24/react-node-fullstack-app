import React, { useState } from "react";
import { data, errorState } from "./interface";
import axios from "axios";
import { toast } from "react-toastify";
import { RouteComponentProps } from "react-router-dom";

import SignUpForm from "./SignUpForm";

const ManageSignUp: React.FC<RouteComponentProps> = (props) => {
  const [registrationInputData, setInputtext] = useState<data>({
    email: "",
    username: "",
    password: "",
    cpassword: "",
  });
  const [error, setError] = useState<errorState>({
    emailError: "",
    usernameError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  //const history = createBrowserHistory({ forceRefresh: true });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let updatedRegistrationData = {
      ...registrationInputData,
      [event.target.name]: event.target.value,
    };
    setInputtext(updatedRegistrationData);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let emailError = "";
    let usernameError = "";
    let passwordError = "";
    let confirmPasswordError = "";
    const url = "http://localhost:5000/signupform";
    if (!registrationInputData.email) {
      emailError = "invalid email";
    }
    if (!registrationInputData.username) {
      usernameError = "invalid username";
    }
    if (!registrationInputData.password) {
      passwordError = "invalid password";
    }
    if (!registrationInputData.cpassword) {
      confirmPasswordError = "passwords must match";
    }
    if (
      registrationInputData.password.length! > 0 &&
      registrationInputData.password.length < 5
    ) {
      passwordError = "length of password must be 8 characters long";
    }
    if (registrationInputData.password !== registrationInputData.cpassword) {
      confirmPasswordError = "Password must match confirm password";
    }
    if (emailError || usernameError || passwordError || confirmPasswordError) {
      setError({
        emailError: emailError,
        usernameError: usernameError,
        passwordError: passwordError,
        confirmPasswordError: confirmPasswordError,
      });
    } else {
      try {
        console.log("boooy ");
        let response = await axios({
          method: "post",
          url: url,
          data: JSON.stringify(registrationInputData),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }).then(
          (response) => {
            if (response.statusText === "OK") {
              console.log(" ooooooo ", " " + response.data);
              toast.success(response.data);
              clearState();
              return props.history.push("/");
            }
          },
          (error) => {
            console.log("ogogogog ");
            emailError = "email already exist";
            if (error) {
              console.log("dbk ", emailError);
              setError({
                emailError: emailError,
                usernameError: "",
                passwordError: "",
                confirmPasswordError: "",
              });
              return clearState();
            }
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  const clearState = () => {
    //clears the input field
    return setInputtext({
      email: "",
      username: "",
      password: "",
      cpassword: "",
    });
  };

  return (
    <>
      <SignUpForm
        inputText={registrationInputData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        errorText={error}
      />
    </>
  );
};
export default ManageSignUp;
