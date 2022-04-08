import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      display: (props) => (props.open ? "flex" : "none"),
    },
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
    width: "100vw",
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
    },
  },
  icons: {
    alignItems: "center",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    display: (props) => (props.open ? "none" : "flex"),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Lama Dev
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          LAMA
        </Typography>
        <div className={classes.search}>
          <InputBase placeholder="Search" className={classes.input} />
          {open ? null : <Search />}
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.searchButton}
            onClick={() => setOpen(!open)}
          />
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={8} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar
            alt="Lama Dev"
            src="https://v4.mui.com/static/images/avatar/1.jpg"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
