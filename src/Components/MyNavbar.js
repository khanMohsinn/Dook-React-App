import {
  alpha,
  AppBar,
  Button,
  IconButton,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
  Badge,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { withStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { currentUser, logout, useAuth } from "./contexts/AuthContext";
import Dishes from "./Dishes";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "rgba(255, 0, 0, 0)",
  },

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
    alignItems: "center",
  },
  authItems: {
    marginLeft: theme.spacing(6),
  },
}));

const MyNavbar = () => {
  const classes = useStyles();

  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();
  const cart = useSelector((state) => state.order.cart);

  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      navigate("/");
    } catch {
      setError("Failed to log out");
    }
  };

  useEffect(() => {
    console.count("counter");
    let count = 0;
    {
      cart.length === 0
        ? setCartCount(0)
        : cart.forEach((dish) => {
            count += dish.qty;
            setCartCount(count);
            console.log(count);
          });
    }
  }, [cart]);

  return (
    <AppBar position="static" className={classes.appbar}>
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
              <Link to="/signup" className={classes.links}>
                <IconButton aria-label="cart">
                  <Badge
                    badgeContent={cartCount === 0 ? "0" : cartCount}
                    color="primary"
                  >
                    <Link to="/cart">
                      <ShoppingCartIcon
                        // color="secondary"
                        fontSize="large"
                        style={{ color: "#E61B20" }}
                      />
                    </Link>
                  </Badge>
                </IconButton>
              </Link>
              <Link to="/" className={classes.links}>
                <Button
                  variant="contained"
                  className={classes.authItems}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MyNavbar;
