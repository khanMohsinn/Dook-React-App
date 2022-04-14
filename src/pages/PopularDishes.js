import React from "react";
import MyNavbar from "../Components/MyNavbar";
import useDocumentTitle from "../pages/useDocumentTitle";
import PDishes from "../Components/Pdishes";
import { Container, Grid, Typography } from "@material-ui/core";
import DishCard from "../Components/DishCard";

const PopularDishes = () => {
  useDocumentTitle("Dook-Popular Dishes");
  return (
    <div>
      <MyNavbar />
      <Container spacing={3}>
        <Grid item md={12}>
          <Typography variant="h3" align="center" style={{ padding: "10px" }}>
            Popular Dishes
          </Typography>
        </Grid>
        <PDishes />
      </Container>
    </div>
  );
};

export default PopularDishes;
