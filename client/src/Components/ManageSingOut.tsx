import React from "react";
import axios from "axios";
import { RouteComponentProps } from "react-router-dom";

const ManageLogOut: React.FC<RouteComponentProps> = (props) => {
  const logOut = async () => {
    const url = "http://localhost:5000/logout";
    try {
      let response = await axios(url);
      if (response.status === 200) {
        localStorage.removeItem("user");
        console.log(response.data);
        props.history.push("/");
        return window.location.reload();
      } else {
        throw console.error();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return <button onClick={logOut}>Logout</button>;
};

export default ManageLogOut;
