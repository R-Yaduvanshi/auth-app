import { Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Users = () => {
  const [user, setUser] = useState("");
  const token = localStorage.getItem("jwtToken");
  const auth = useContext(AuthContext);
  const options = {
    method: "GET",
    url: "https://bugappbackend1.onrender.com/users",
    headers: {
      Authorization: token,
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleLogout = () => {
    auth.logout();
  };
  return (
    <div>
      <h1>{user}</h1>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Users;
