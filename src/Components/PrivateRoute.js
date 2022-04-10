import React from "react";
import { Route } from "react-router";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  return (
    <Route
      {...rest}
      render={(props) => {
        currentUser ? <Component {...props} /> : navigate("/");
      }}
    ></Route>
  );
};

export default PrivateRoute;
