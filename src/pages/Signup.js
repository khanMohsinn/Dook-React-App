import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useAuth } from "../Components/contexts/AuthContext";

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

const Signup = () => {
  const { signup } = useAuth();
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Passwords do no match");
    }

    try {
      setError("");
      await signup(email, password);
      console.log("Sign up successful");
    } catch (error) {
      alert(error.code);
    }
  };

  return (
    <div>
      <div className={classes.container}>
        <h1>Signup</h1>
        <form
          onSubmit={handleSubmit}
          className={classes.form}
          autoComplete="on"
        >
          <label htmlFor="Name" style={{ marginTop: "10px" }}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="Email" style={{ marginTop: "10px" }}>
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
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
          <label htmlFor="Confirm Password" style={{ marginTop: "10px" }}>
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <input type="submit" value="Sign Up" style={{ marginTop: "20px" }} />
        </form>
      </div>
    </div>
  );
};

export default Signup;
