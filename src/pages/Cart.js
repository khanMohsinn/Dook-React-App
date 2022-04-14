import {
  Box,
  Button,
  Card,
  Grid,
  makeStyles,
  Typography,
  Snackbar,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import MyNavbar from "../Components/MyNavbar";
import { resetCart } from "../redux/order/order-actions";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  checkout_btn: {
    paddingBottom: "10px",
  },
}));

const Cart = () => {
  const cart = useSelector((state) => state.order.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const classes = useStyles();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  //   console.log(cart);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;

      setTotalPrice(price);
      setTotalItems(items);
    });
  });
  return (
    <div>
      <MyNavbar />
      <Grid container spacing={3} justifyContent="center">
        {cart.length === 0 ? (
          <Grid item md={12}>
            <Typography variant="h1" align="center">
              Cart is empty
            </Typography>
          </Grid>
        ) : (
          <>
            <Grid item md={12}>
              <Card>
                <Typography variant="h4" align="center">
                  Order Summary
                </Typography>
              </Card>
            </Grid>
            {cart.map((item, index) => {
              return (
                <Grid item md={8}>
                  <CartItem key={index} dish={item} />
                </Grid>
              );
            })}
            <Grid item md={8}>
              <Card>
                <Box m={1}>
                  <Grid
                    container
                    spacing={4}
                    direction="row"
                    alignItems="center"
                  >
                    <Grid item md={4}>
                      <Typography variant="h6">
                        Total Items : {totalItems}
                      </Typography>
                    </Grid>
                    <Grid item md={4}>
                      <Typography variant="h6">
                        Total Price : ₹{totalPrice}
                      </Typography>
                      {/* <Typography variant="h6">Qty:{cart.qty}</Typograp hy> */}
                    </Grid>
                    <Grid item md={4}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          dispatch(resetCart(state));
                          handleClick();
                        }}
                      >
                        Proceed to Checkout
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            </Grid>
          </>
        )}
      </Grid>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Order placed successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Cart;
