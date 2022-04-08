import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useAuth } from "../Components/contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
}));

const Login = () => {
  const classes = useStyles();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      login(email, password);
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        console.log(error.code);
        toast.error("Please check the Password");
      }
      if (error.code === "auth/user-not-found") {
        toast.error("Please check the Email");
      }
    }
  };

  return (
    <div>
      <div className={classes.container}>
        <h1>Login</h1>
        <form
          onSubmit={handleSubmit}
          className={classes.form}
          autoComplete="on"
        >
          <label htmlFor="Email/Name" style={{ marginTop: "10px" }}>
            Email/Username
          </label>
          <input
            type="text"
            id="email"
            name="email/username"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="Password" style={{ marginTop: "10px" }}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input type="submit" value="Login" style={{ marginTop: "20px" }} />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
