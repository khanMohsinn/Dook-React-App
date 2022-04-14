import React, { useEffect, useState } from "react";
import useDocumentTitle from "./useDocumentTitle";
import MyNavbar from "../Components/MyNavbar";
import Login from "./Login";
import { Container, Typography, Grid } from "@material-ui/core";
import Dishes from "../Components/Dishes";

const Menu = () => {
  useDocumentTitle("Dook-Menu");

  return (
    <div>
      <MyNavbar />
      <Container spacing={3}>
        <Grid item md={12}>
          <Typography variant="h3" align="center" style={{ padding: "10px" }}>
            Menu
          </Typography>
        </Grid>
        <Dishes />
      </Container>
    </div>
  );
};

export default Menu;
