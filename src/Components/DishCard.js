import {
  Button,
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  IconButton,
} from "@material-ui/core";
import { Add, AddShoppingCartOutlined, Remove } from "@material-ui/icons";
import React, { useState } from "react";
import Dishes from "./Dishes";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { connect, useDispatch } from "react-redux";
import { addToCart } from "../redux/order/order-actions";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    justifyContent: "space-around",
  },
  media: {
    height: 200,
  },
  button_div: {
    justifyContent: "flex-end",
  },
});

const DishCard = ({ dish }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.root} elevation={3}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`/images/${dish.id}.webp`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {dish.title}
          </Typography>
          {dish.description ? (
            <Typography>{dish.description}</Typography>
          ) : null}
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.root}>
        <Typography variant="subtitle1" color="textSecondary">
          Price: ₹{dish.price}
        </Typography>
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={() => dispatch(addToCart(dish))}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};
export default DishCard;
