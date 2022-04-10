import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import useDocumentTitle from "../pages/useDocumentTitle";
import Login from "./Login";

const useStyles = makeStyles((theme) => ({
  right_col: {
    backgroundImage: "url(/images/food-image.webp)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100%",
  },
  left_col: {
    // minWidth: "60%",
    // height: "100vh",
  },
  logo_container: {
    display: "flex",
    alignItems: "center",
    marginTop: "5em",
    marginLeft: "3em",
  },
  logo: {
    width: "50px",
  },
}));

const Home = () => {
  const classes = useStyles();
  useDocumentTitle("Dook-Home");
  return (
    <section>
      <Grid container>
        <Grid item className={classes.left_col} md={6}>
          <div className={classes.header}>
            <div className={classes.logo_container}>
              <img src="/images/Dook_Logo.png" className={classes.logo} />
              <h1>DOOK</h1>
            </div>
          </div>
          <Login />
        </Grid>
        <Grid className={classes.right_col} item md={6}>
          <div></div>
        </Grid>
      </Grid>
      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        />
      </Container>
    </section>
  );
};
export default Home;
