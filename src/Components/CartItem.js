import {
  Box,
  Card,
  Grid,
  IconButton,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/order/order-actions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  qty_text: {
    width: "70px",
  },
}));

// const handleDelte = () => {
//   console.log("Delete button clicked");
// };

const CartItem = ({ dish, index }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div>
      <Card>
        <Grid
          container
          spacing={6}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={6}>
            <Box m={2}>
              <Typography variant="h6">{dish.title}</Typography>
            </Box>
          </Grid>
          <Grid item md={3}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                className={classes.qty_text}
                id="outlined-basic"
                type="number"
                size="small"
                label="Qty"
                variant="outlined"
                value={dish.qty}
              />
            </form>
            {/* <Typography variant="h6">Qty:{dish.qty}</Typography> */}
          </Grid>
          <Grid item md={3}>
            <IconButton>
              <Delete onClick={() => dispatch(removeFromCart(dish))} />
            </IconButton>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default CartItem;
