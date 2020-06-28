import React, { useState, useEffect } from "react";
const useUserStatus = () => {
  let [user, setUser] = useState({
    authenticate: false,
    loading: false,
  });
  const getData = () => {
    if (localStorage.length > 0) {
      setUser({
        authenticate: true,
        loading: true,
      });
    }
  };
  useEffect(() => {
    //if (localStorage.length > 0) {
    //setUser( {
    //authenticate:true,
    // loading:true
    //});
    //}
    getData();
  }, []);

  return user;
};

export default useUserStatus;
