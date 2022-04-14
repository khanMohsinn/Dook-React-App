import { Box, Card, Grid, Typography } from "@material-ui/core";
import React from "react";
import MyNavbar from "../Components/MyNavbar";
import useDocumentTitle from "../pages/useDocumentTitle";

const Offers = () => {
  useDocumentTitle("Dook-Offers");
  return (
    <div style={{ justifyContent: "center" }}>
      <MyNavbar />

      <Box>
        <Grid container md={12}>
          <Grid item md={12}>
            <Card md={12}>
              <Typography style={{ textAlign: "center" }}>
                No Offers available currently
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Offers;
