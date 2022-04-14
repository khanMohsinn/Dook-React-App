import { Container, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import DishCard from "./DishCard";

const Dishes = () => {
  const [dishes, setDishes] = useState([]);
  const [cart, setCart] = useState([]);

  // const handleAddCart = (dish) => {
  //   setCart((prevCart) => [...prevCart, dish]);
  // };

  useEffect(() => {
    fetch("http://localhost:8000/dishes")
      .then((res) => res.json())
      .then((data) => setDishes(data));
  }, []);
  return (
    <div>
      <Container spacing={10}>
        <Grid container spacing={3}>
          {dishes.map((dish) => {
            return (
              <Grid item key={dish.id} md={4}>
                <DishCard dish={dish} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Dishes;
