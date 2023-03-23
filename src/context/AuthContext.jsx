import axios from "axios";
import React, { useState } from "react";
import { createContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const login = (token) => {
    // Save the JWT token to local storage
    localStorage.setItem("jwtToken", token);

    // Update the authentication state and user object
    setIsAuthenticated(true);
  };
  const logout = async () => {
    try {
      let res = axios.get("https://bugappbackend1.onrender.com/logout");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
