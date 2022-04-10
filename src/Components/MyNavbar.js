import {
  alpha,
  AppBar,
  Button,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Cancel } from "@material-ui/icons";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { currentUser, logout, useAuth } from "./contexts/AuthContext";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: "#212121",
  },
  container: {
    display: "flex",
    margin: theme.spacing(1, 1, 1, 1),
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100vw",
  },
  logo: {
    width: "40px",
  },
  search: {
    color: "white",
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "15vw",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    marginLeft: theme.spacing(3),
  },
  navLinksContainer: {
    // marginLeft: theme.spacing(50),
  },
  navLinks: {
    display: "flex",
  },
  navItems: {
    marginLeft: theme.spacing(6),
  },
  links: {
    color: "inherit",
    textDecoration: "inherit",
  },
  authContainer: {
    right: theme.spacing(0),
    marginRight: theme.spacing(3),
  },
  auth: {
    display: "flex",
  },
  authItems: {
    marginLeft: theme.spacing(6),
  },
}));

const MyNavbar = () => {
  const classes = useStyles();

  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      navigate("/");
    } catch {
      setError("Failed to log out");
    }
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <div className={classes.container}>
          <div className={classes.logoContainer}>
            <Link to="/menu">
              <img src="/images/Dook_Logo.png" className={classes.logo}></img>
            </Link>
          </div>
          <div className={classes.search}>
            <InputBase placeholder="Search" className={classes.input} />
            {/* {open ? null : <Search />} */}
            {/* <Cancel className={classes.cancel} onClick={() => setOpen(false)} /> */}
          </div>
          <div className={classes.navLinksContainer}>
            <div className={classes.navLinks}>
              <Link to="/popular_dishes" className={classes.links}>
                <Typography variant="h6" className={classes.navItems}>
                  Popular Dishes
                </Typography>
              </Link>
              {/* <Link to="/restaurents" className={classes.links}>
                <Typography variant="h6" className={classes.navItems}>
                  Restaurents
                </Typography>
              </Link> */}
              <Link to="/offers" className={classes.links}>
                <Typography variant="h6" className={classes.navItems}>
                  Offers
                </Typography>
              </Link>
            </div>
          </div>
          <div className={classes.authContainer}>
            <div className={classes.auth}>
              <Link to="/" className={classes.links}>
                <Button
                  variant="contained"
                  className={classes.authItems}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Link>
              {/* <Link to="/signup" className={classes.links}>
                <Typography variant="h6" className={classes.authItems}>
                  Sign Up
                </Typography>
              </Link> */}
            </div>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MyNavbar;
